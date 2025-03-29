var bg;
var title = "a much longer title for test purposes"
var storyCounter = 0;
var sword

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = loadImage('js/paperTexture.jpg');
  sword = loadImage('js/sword.png');
  storytext = loadStrings('js/storyoptions.txt');
  titletext = loadStrings('js/Titles.txt');
  choicestext = loadStrings('js/multiplechoices.txt');
}

function draw() {
  background(bg);
  
  let title = titletext[storyCounter]
  let phrase = storytext[storyCounter]
  let choice1 = choicestext[storyCounter];
  let choice2 = choicestext[(storyCounter)+1];
  //works same as instagram stories where you go to different slides and choose your own adventure books
  
  textFont('Algerian');
  textSize(30)
  textAlign(CENTER)
  text(title, windowWidth/2, 50)
  
  textSize(20)
  textFont('Arial');
  text(phrase, windowWidth/2, 200)
  
  if (storyCounter == 0){
    text(choice1,windowWidth/4,400);
    text(choice2,(windowWidth/4)+(windowWidth/2),400);
    
    image(sword,(windowWidth/2)-190,250,350,350)
  }
  
}

function touchEnded(){
  if (storyCounter == 0){
    if (mouseX < windowWidth/2){
      storyCounter += 1;
    }
    if (mouseX > windowWidth/2){
      storyCounter += 2;
    }
  }
  else{
    storyCounter = 0;
  }
}
