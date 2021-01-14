'use strict';

            // Code Block 1
            // Get data from the user
            var userName = prompt('What is your name?');
            var greeting = 'Youre name is: ';
       
            // display data to the user
            alert(greeting + userName);
       
            // log data to your developer console
            console.log('The users name is ' + userName);
       
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////

            // Questions in Array
            var arrayOfQuestions = ['Is my name Paulo? T/F', 'Did I work as a Outdoor Recreation Coordinator at Humboldt State? T/F', 'The country I came from was the Philippines? T/F','I like painting as a hobby? T/F','Am I a horrible cook? T/F','I have worked mainly in the music and festival scene during the past three summers? T/F'];
            // arrayOfQuestions[someNumber] => some number represents the position of items within the array.
            // pushed item moved this way <=
            var arrayOfAnswers = ['T', 'T', 'T', 'F', 'F', 'T'];
            var arrayOfResponse = [];
            var correctAnswers = 0
            
             // this loop is running against the number of items in the array of Questions.
            for (var i = 0; i < arrayOfQuestions.length; i++) {
                // because is being being incremented we are able to ask each question from the array of questions.
                var response = prompt(arrayOfQuestions[i]);
                response = response.toUpperCase();

                while (response !== 'T' && response !== 'F') {
                    response = prompt(arrayOfQuestions[i]);
                    response = response.toUpperCase();
                    console.log('The response to the question is: ' + response);
                }
                
                arrayOfResponse.push(response);
                console.log('The response to the question is: ' + arrayOfResponse[i]);
                
                if (arrayOfAnswers[i] === arrayOfResponse[i]) {
                    alert("Correct!!!")
                    correctAnswers++
                    console.log(correctAnswers)

                } else if (arrayOfAnswers[i] !== arrayOfAnswers[i]) {
                    alert("Sorry incorrect answer.");
                }
            }


            ////////////////////////////////////////////////////////////////////////////////////////////////////////////

            // Multiple Question Array
            alert('Before for the pandemic I would go to Asian restaurants and try to to find the new immigrant there and try my best to order my meal in their language. What are the 3 languages I learned doing this method?')
            var arraymultiQuestion = ["THAI", "KOREAN", "VIETNAMESE"]
            var arraymultiresponse = []
            var multiResponse

            for (var i = 0; i < 7; i++) {
                multiResponse = prompt("Please guess the language you have " + (7-i) + " guesses remaining")
                multiResponse = multiResponse.toUpperCase()
                console.log(multiResponse)

                for (var j=0; j < 3; j++) {
                    if (multiResponse == arraymultiQuestion[j]) {
                        arraymultiresponse.push(multiResponse);
                        alert("Great Job!!! You got " + arraymultiresponse.length);
                    } else if (multiResponse !== arraymultiQuestion[j]) {
                        alert("Sorry that was incorrect.")
                        console.log("Incorrect Answer");
                    }
                }

                if (arraymultiresponse.length == 3){
                    correctAnswers++
                    console.log(correctAnswers)
                    {break}
                }
            }


            ////////////////////////////////////////////////////////////////////////////////////////////////////////////

            // Random Number Picking Game
            var randomNumber = Math.floor(Math.random() * 6);
            console.log(randomNumber)    
            var userNumberpick
            

            for (var i = 0; i < 4; i++) {

                //
                //  In this code block I would like to put something to check that the variable is a number how would I do a while loop to convert that. How would I set up the condition to check for the typeof thing it is
                //
                
                userNumberpick = prompt('Please guess the randomly selected number from 0-5. You have ' + (i+1) + ' more tries');

                while(userNumberpick > 5 && userNumberpick < 0) {
                userNumberpick = prompt('Please guess the randomly selected number from 0-5. You have ' + (i+1) + ' more tries');
                console.log(userNumberpick);
                }

                if (randomNumber == userNumberpick) {
                    alert("Great guess!!! The number was: " + randomNumber);
                    correctAnswers++;
                    {break};
                } else if (randomNumber > userNumberpick) {
                    alert("Sorry incorrect number but your guess is too low Please guess again.");
                } else if (randomNumber < userNumberpick) {
                    alert("Sorry incorrect number but your guess is too high Please guess again.");
                } else if (randomNumber != userNumberpick && i ==4) {
                    alert("Sorry your outta tries and you didn't guess correctly.");
                }

            } 

            if (correctAnswers === 8) {
                alert("Great Job You Got Every Question!!! Your Score: " + correctAnswers + "/8");
            } else if (correctAnswers < 8) {
                alert("Your Score: " + correctAnswers + "/8");
            }

            
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
