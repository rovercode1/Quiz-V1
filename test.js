var question = document.querySelector("#question");
var options = document.querySelectorAll(".options")

var questionOne = question.innerHTML="Which is the incorrect phrase to greet someone with?"
var optionsOne = ["Hello","Hi","Hiya","Goodbye"]


var rightAnswer=optionsOne[3];
var gameOver = false;


for(i=0;i<options.length;i++){
    options[i].innerHTML=optionsOne[i];
    options[i].addEventListener("click",function(){
        var clicked = this.innerHTML;

        // Check if answer is correct

        if(clicked!=rightAnswer){
            // Get colour of clicked square
            this.style.color="red";
            this.style.textDecoration = 'line-through';
            }
        else{
            this.innerHTML+=" -- Correct!: ";
            this.classList.add("correct");
        }
    }
)}