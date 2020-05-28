console.log('Script file loaded.');

$(document).ready(function(){

  console.log('HTML file loaded and parsed.');



  // Tested on :
  // Firefox 76.0.1
  // Chrome 81.0.4044.138
  // Edge 81.0.416.72


  addMyEventListeners();
  
  modifyGreetings()  // function to initiate 'quote of the day'
 
});


function addMyEventListeners(){
  
    // Scroll button script

     // create an onscroll function to display the button on scroll
     // display the button as block once the window is scrolled by 100px
     // if the window has not reach 100px from the top, the button doesn t display.

      $(window).scroll(function(){                
        if ($(window).scrollTop() > 100) {         
          $('#toTop').css("display", "block");
        } else {
          $('#toTop').css("display", "none");     
        }
    
    });
      
    
    // click event on the button

    // create the function to go back to the top clicking the button
    // clicking the button, the page scroll back to the top (0) without transition

      $('#toTop').click(function(){                     
        $('html, body').animate({scrollTop : 0}, 0);   
    });
      

    // End of scroll button script
  
};


// "Quote of the day" script


// This function makes the greeting language changes every time the page is reloaded
// Array of greeting possibilities
// display randomly one of the element picked (relative to the array length) in the array in the html document

function modifyGreetings(){                                                               
  var greeting = ['Hello!', 'Bonjour!', 'Hola!', 'こんにちは!', 'Guten Tag!', '你好!'];    
  $('#hello').html(greeting[Math.floor(Math.random() * greeting.length)]);                
}


// end of "Quote of the day" script


