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
  
  let phrases = split(phrase, "...")
  if (phrases[1] == " "){
    phrases[1] = " ";
  }
  //works same as instagram stories where you go to different slides and choose your own adventure books
  
  textFont('Algerian');
  textSize(30)
  textAlign(CENTER)
  text(title, windowWidth/2, 50)
  
  textSize(20)
  textFont('Arial');
  text((phrases[0]+'\n'+phrases[1]), windowWidth/2, 180)
  
  if (storyCounter == 1){
    text(choice1,windowWidth/4,400);
    text(choice2,(windowWidth/4)+(windowWidth/2),400);
    
    image(sword,(windowWidth/2)-190,250,350,350)
  }
  
}

function touchEnded(){
  if (storyCounter == 1){
    if (mouseX < windowWidth/2){
      storyCounter += 1;
    }
    if (mouseX > windowWidth/2){
      storyCounter += 3;
    }
  }
  else{
    storyCounter += 1;
  }
  if (storyCounter == 5){
    openLink();
  }
  if (storyCounter == 3){
    openLink();
  }
  console.log(storyCounter)
}

function openLink(){
  if (storyCounter == 3){
    window.open("https://jmonk603.github.io/DAndDARAcceptQuest/");
    window.location.href = ('https://jmonk603.github.io/DAndDExperienceP2/');
  }
  else if (storyCounter == 5){
    window.open("https://jmonk603.github.io/DAndDARDenyQuest/");
    window.location.href = ('https://jmonk603.github.io/DAndDExperience/');
  }
}
