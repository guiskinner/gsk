function goToByScroll(page){
          // Reove "link" from the ID
        console.log(page);
          // Scroll
        $('html,body').animate({
            scrollTop: $("."+page).offset().top},
            'slow');
    }

    $(".menu > nav > ul > li > a").click(function(e) { 
          // Prevent a page reload when a link is pressed
        e.preventDefault(); 
          // Call the scroll function
        goToByScroll($(this).attr("class"));           
    });