var question = document.querySelector("#question");
var options = document.querySelectorAll(".options")

var questionOne = question.innerHTML="What is used to indicate a closed tag?"
var optionsOne = ["Hello","Hi","Hiya","Goodbye"]



var gameOver = false;


    for(i=0;i<options.length;i++){
        options[i].innerHTML=optionsOne[i];
            options[i].addEventListener("click",function(){
                var clicked = this.innerHTML;

                // Check if answer is correct
                var rightAnswer=optionsOne[3];
                if(clicked!=rightAnswer){
                    // Get colour of clicked square
                    this.style.color="red";
                    this.classList.add("wrong");
                    
                    }
                else{
                    this.innerHTML+=" -- Correct!: ";
                    this.classList.add("correct");
                    this.classList.remove("wrong")
                    }

            }
        )}





