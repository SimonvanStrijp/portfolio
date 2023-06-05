var projectActive = false;

//loop through all the divs with class prj
console.log("hoi");

    $('.prj').each(function(index) {
        console.log("this is: " + this);
        $(this).append('<a class="prj-button">Back</a> ')
        $(this).append('<div class="prj-container-header"></div> ')
        $(this).append('<div class="prj-container-body"></div> ')
    } );

    $('.prj-container-header').each(function(index) {
        console.log("this is: " + this);
       
        // var targetHeader = "projects/project" + (index+1) + ".html header" ;
        var targetHeader = "projects/" +  $(this).parent().attr("id") + ".html header";
        $(this).load(targetHeader);
        index = 0; 
    });

    $('.hiddenButton').hide(0);

    
    // load CV
    $('#cv-container').load('cv.html');

    
    
    $('.prj-button').click(function() {
        var target = "projects/" + $(this).parent().attr("id") + ".html #body";
        console.log("target: " + target);
        if ($(this).parent().hasClass('prj-active')) {
            projectActive = false;
            $('.prj-dummy').show(300);
            console.log("projectActive: " + projectActive);
            toggleCV();
            $('html, body').animate({
                scrollTop: $("#projects").offset().top
            }, 250);
            $(".prj").each(function() {
                $(this).removeClass('prj-active');
                $(this).removeClass('prj-inactive'); });
            $(".prj").each(function() {
                $(this).show(300); });
            $('.prj-container-body').empty();
            $('.prj-header').each().addClass('.prj-header-inactive');
            

        } else {
            projectActive = true;
            console.log("projectActive: " + projectActive);
            toggleCV();
            $('.prj-dummy').hide(300);
            $('html, body').animate({
                scrollTop: $("#projects").offset().top
            }, 250);
            $(".prj").each(function() {
                $(this).remove('prj-active');
                $(this).addClass('prj-inactive'); });
            $(this).parent().removeClass('prj-inactive');
            $(".prj-inactive").each(function() {
                $(this).hide(300); });
            $(this).parent().addClass('prj-active');
            $('.prj-active > .prj-container-body').load(target, function() {
                $(this).show(300);
            });
            $('.prj-header').each().removeClass('.prj-header-inactive');
            
        }
        
        });

    
// open/close about page

    $('.about-button').click(
        function()  {
            var target = "about.html";
            console.log("target: " + target);
            $('#about-container').toggleClass('about-active');

            if ($('#about-container').hasClass('about-active')) {
                $('#about-container').hide(0);
                $('#about-container').load(target, function(){
                    $('#about-container').show(300);
                    $('.hiddenButton').show(300);
                    $('html, body').animate({
                        scrollTop: $("#about-container").offset().top
                    }, 250);
                });
                
            } else {
                $('.hiddenButton').hide(300);
                $('#about-container').hide(300,function(){
                    $('#about-container').empty();
                    
                
            });
                
            }
        }
    );


    // open/close CV
    function toggleCV(){
        if (projectActive) {
            // alert("project active");
            $('#cv-container').hide(300);
        } else {
            $('#cv-container').show(300);
        }
    }




    
    
    