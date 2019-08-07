var mainColor = getRandomRgb();
var resetBtn = document.querySelector("button");
var colorDisplay = document.getElementById("color-display");
var easyBtn = document.getElementById("easy-btn");
var hardBtn = document.getElementById("hard-btn");
var square = document.querySelectorAll(".square");
var buttons = document.querySelectorAll("button");
var message = document.querySelector("#message");
var d = document.querySelector("#top");


function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }

function hardModeFunc(arr){
    d.style.backgroundColor = "steelblue";
    message.textContent ="";
    var randNum = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    for(var i=0;i<arr.length;i++){
        arr[i].style.backgroundColor = getRandomRgb();
    }
    arr[randNum-1].style.backgroundColor = mainColor;
    checkIfCorrect(arr);
}

function easyModeFunc(arr){
    d.style.backgroundColor = "steelblue";
    message.textContent ="";
    var randNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    for(var i=0;i<arr.length;i++){
        arr[i].style.backgroundColor = getRandomRgb();
    }
    arr[randNum-1].style.backgroundColor = mainColor;
    checkIfCorrect(arr);
}

function checkIfCorrect(arr){
    for(var j=0;j<arr.length;j++){
        arr[j].addEventListener("click",function(){
            if(this.style.backgroundColor==mainColor){
                for(var x=0;x<arr.length;x++){
                     arr[x].style.backgroundColor =mainColor;
                }
                message.textContent = "Correct !";
                d.style.backgroundColor=mainColor;
                resetBtn.textContent = "PLAY AGAIN ?";
            }
            else if(this.style.backgroundColor!=mainColor){
                this.style.backgroundColor = "#232323";
                message.textContent = "Try Again";
            }
        })
    }}

    
hardBtn.classList.add("selected");
colorDisplay.textContent = mainColor;
hardModeFunc(square);

resetBtn.addEventListener("click",function(){ 
    mainColor = getRandomRgb();
    colorDisplay.textContent = mainColor;
    d.style.backgroundColor = "steelblue";
    message.textContent ="";
    resetBtn.textContent = "NEW COLORS";
    if(square[4].classList.contains("square")){
        hardModeFunc(square);
    }
    else{
        easyModeFunc(square);
    }
})

easyBtn.addEventListener("click",function(){  
    resetBtn.textContent = "NEW COLORS";
    for(var i=3;i<square.length;i++){
        square[i].classList.remove("square");
    }
    mainColor= getRandomRgb();
    colorDisplay.textContent = mainColor;
    easyModeFunc(square);
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
})

hardBtn.addEventListener("click",function(){
    resetBtn.textContent = "NEW COLORS";
    for(var i=0;i<square.length;i++){
        square[i].classList.add("square");
    }
    mainColor = getRandomRgb();
    colorDisplay.textContent = mainColor;
    hardModeFunc(square);
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
})


