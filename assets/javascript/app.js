// * The player will have a limited amount of time to finish the quiz. 
    // create a countdown timer that starts when the game begins.

    // Multiple -choice quiz requirements 

    // Display question and 4 multiple-choice answers underneath as radio buttons.
    
    // create a variable with an object as value for the questions, multiple-choice
    // and correct answer. 

    var choices = [
        {
            question: "Pupusas, handmade thick stuffed corn tortillas, are a traditional dish from what country?", 
            choice: ["Morocco", "El Salvador", "Guatemala", "Spain"],
            answer: 1,
            photo: "assets/images/pupusas.jpg"
         },
         {
            question: "What popular soda beverage was originally developed as a mixer for whiskey?", 
            choice: ["Mountain Dew", "Coke", "7-UP", "Dr.Pepper"],
            answer: 0,
            photo: "assets/images/mtdew.gif"
         }, 
         {
            question: "Kopi luwak is a very expensive type of what?", 
            choice: ["Liqueur", "Sushi", "Coffee", "Caviar"],
            answer: 2,
            photo: "assets/images/coffee.gif"
        }, 
        {
            question: "Which is not an ingredient in a Harvey Wallbanger cocktail?", 
            choice: ["Orange Juice", "Gin", "Sour Mix", "Galliano"],
            answer: 2,
            photo: "assets/images/harvey.jpg"
        }, 
        {
            question: "How many items are there in a Bakers' Dozen?", 
            choice: ["12", "15", "24", "13"],
            answer: 3,
            photo: "assets/images/dozen.jpg"
        }, 
        {
            question: "What is the most widely eaten fish in the world?", 
            choice: ["Salmon", "Herring", "Sardine", "Tuna"],
            answer: 1,
            photo: "assets/images/herring.jpg"
        }, 
        {
            question: "Which fruit does not ripen once it has been picked?", 
            choice: ["Banana", "Lemon", "Mango", "Apple"],
            answer: 1,
            photo: "assets/images/lemon.gif"
        }, 
        {
            question: "Which fruit contains the most protein per 100 calories?", 
            choice: ["Guava", "Avocado", "Banana", "Blackberries"],
            answer: 0,
            photo: "assets/images/guava.gif"
        }];

    // starting variables for counters

    var timeRemaining = 0;
    
    var correctAnswers = 0;
    
    var incorrectAnswers = 0;
    
    var unanswered = 0;

 
    //Creating function that starts the game

            $('#start-button').on('click', function(){
                for (var i in choices){
                    var questions = (choices[i].question); //logs the question in each object
                    var userChoice = (choices[i].choice); // logs the choice key in each object
                    var correctAns = (choices[i].answer); //logs each correct answer
                    console.log(questions);
                    console.log(userChoice);
                    console.log('the correct answer is ' + correctAns);
                    
                    // creating an element to have the questions displayed
                    var hThree = $('<h3>').text(questions);

                    // display the Question
                    $('#questions').append(hThree);

            //------------------------------------------------------------------------

                    // creating another element to have the multiple-choice answers displayed
                    var radioBtn = $('<input type="radio" name="muliple">').text(userChoice);

                                                            
                    // display the button answers
                    $('#radio-buttons').append(radioBtn);

    // ***radio buttons do not display correctly.  They should diplay multiple-choice answer text next to them
    //
            }
            })
            


        // take in and store user-choice data 
        // use stored user data and compare with answer 
        // store compared results in variable
        // do not allow user to record more than one answer
            //if one radio button answer is already chosen by user, and user then clicks on
            //another radio button answer, clear the previous selection and record the answer 
            //on the screen and in the user-answer array
    

//   * The game ends when the time runs out. 
    // The page will reveal the number of questions that players answer correctly and incorrectly.
        // when timer reaches zero, have something occur:
        // -show divs that contain questions answered correctly/incorrectly
        //-after a couple of seconds after the game is over, re-start the game without a player refresh.

// * Don't let the player pick more than one answer per question.
    //-When the player chooses one radio button choice, the previously selected radio button
    //is cleared

// * Don't forget to include a countdown timer.
