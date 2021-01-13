'use strict';

            // Code Block 1
            // Get data from the user
            var userName = prompt('What is your name?');
            var greeting = 'Youre name is: ';
       
            // display data to the user
            alert(greeting + userName);
       
            // log data to your developer console
            console.log('The users name is ' + userName);
       
            //////////////////////////////////////////////////////

            // Question 1
            var questionOne = prompt("1. Did I serve the military? yes/no")
            var responseOne = questionOne.toUpperCase()
            console.log(responseOne)

            if (responseOne === 'YES') {
                alert('CORRECT!') ;
            } else {
                alert('INCORRECT');
            }

            // Question 2
            var questionTwo = prompt("2. Did I lived in Japan to trade bitcoins? yes/no")
            var responseTwo = questionTwo.toUpperCase()
            console.log(responseTwo)

            if (responseTwo === 'NO') {
                alert('CORRECT! I lived in the Philippines!') ;
            } else {
                alert('INCORRECT');
            }

            // Question 3
            var questionThree = prompt("3. I would go to startup hackathons to work on Mesh Networking projects? yes/no")
            var responseThree = questionThree.toUpperCase()
            console.log(responseThree)

            if (responseOne === 'YES') {
                alert('CORRECT!') ;
            } else {
                alert('INCORRECT');
            }

            // Question 4
            var questionFour = prompt("4. Did I worked in Outdoor Recreation Program helping Veterans transition to civilian life after the military? yes/no")
            var responseFour = questionFour.toUpperCase()
            console.log(responseFour)

            if (responseFour === 'YES') {
                alert('CORRECT!') ;
            } else {
                alert('INCORRECT');
            }

            // Question 5
            var questionFive = prompt("I'm building a Van so I can travel the US and code along the way to Texas! yes/no")
            var responseFive = questionFive.toUpperCase()
            console.log(responseFive)


            if (responseFive === 'YES') {
                alert('CORRECT!') ;
            } else {
                alert('INCORRECT');
            }
            



        