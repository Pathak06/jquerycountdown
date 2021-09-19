$(document).ready(function () {
    
    var sec = 0;
    var csec = 0;


    $('input').change(function () {
        var value = $('input').val();
        value = parseInt(value);
       
        console.log(typeof(value));
       
        if (value > 1 && value <= 60) {
            $('.sec').text(value-1);
            
            
            $('.csec').text(99);

           sec = $('.sec').text();
           csec = $('.csec').text();

            console.log(sec);
            console.log(csec);
            
            
            
           
        } else if (value > 60 && value < 3600) {
            $('.min').text(Math.floor(value % 3600 / 60));
            var sec = Math.floor(value % 3600 % 60);
            $('.sec').text(sec-1);
            $('.csec').text(99);

        } else{
            $('.hrs').text( Math.floor(sec / 3600))
            $('.min').text(Math.floor((sec - (hours * 3600)) / 60));
            var sec =  sec - (hours * 3600) - (minutes * 60);
            $('.sec').text(sec-1);
            $('.csec').text(99);
        }
    }) 

    $('.start').click(function () {
        // var counter = $('.csec').text();
        var counter = 5;
        var second = $('.sec').text();
        var minute = $('.min').text();
        console.log(second);
        console.log(minute);

        
         
        
        setInterval(function () {
            counter--;
            if (counter >= 0) {
            
                $('.csec').text(counter);

            }  else if (second > 0) {
                
                    $('.sec').text(second-1);
                    $('.csec').text(csec);
                    // counter = $('.csec').text();
                    counter = 5;
                    second = $('.sec').text();

                } else {
                    
                    $('.min').text(minute-1);
                    $('.csec').text(csec);
                    $('.sec').text(second);
                    minute = $('.min').text();
                    // clearInterval(counter);
                    // clearInterval(second);
                }
               
            },1000);

        
        

       
    })
})