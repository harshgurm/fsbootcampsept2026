            $(document).ready(function(){
                // 1. selecting element by id

                $('#title').text('<h1>This is an updated subtitle using jQuery</h1>');
                $('#subtitle').html('<h1>This is an updated subtitle using jQuery</h1>');
                $('#title').css('color', 'blue');


                // 2. selecting element by class
                $('.content').css('font-size', '18px');
                // $('.content').css('color', 'darkgray');
                $('.content').css('background-color', 'black');
                $('.content').addClass('text');


                // 3. selecting element by tag name
                $('h1').css('font-size', '40px');
                $('h1').css('font-family', 'Arial, sans-serif');

            });