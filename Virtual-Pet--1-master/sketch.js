//for making the database
var database;

//to make the dog and the pics
var dog;
var dogImg, happyDogImg;

//for storing the values of milk bottles left and last feeding time
var foodStock = 20, lastFed;

// to make every thing
var foodObj;

//for making the the two buttons to feed and add milk bottles
var feedBn, addBn;

//to change the pic of dog on feeding
var flag = false;
var timer = 1.5;

//for the positioning of the milk bottles
var y = 100;

var x = 80;
var milkCount = 0;

//for making the milk bottles only once
var hi = 0;

function preload() {
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(400, 250, 50, 50);
  dog.addImage("normal", dogImg);
  dog.addImage("happy", happyDogImg);
  dog.scale = 0.3;

  foodObj = new Food();

  //to get, update and deduct food
  foodObj.getFoodStock();

  //to create the buttons of feeding and adding the milk bottles
  feedBn = createButton("Feed The Dog");
  feedBn.position(500, 60);
  feedBn.mousePressed(foodObj.feed);

  addBn = createButton("Add Milk Bottle");
  addBn.position(620, 60);
  addBn.mousePressed(reset);


}


function draw() {  
  background(46, 139, 89);
  foodObj.display();


  textSize(20);
  fill("white");
  text("FoodStock: " + foodStock,180, 50);

  text("LastFed: " + lastFed, 30, 30);

  if(foodStock != null) {
    hi = hi + 1;
  }

  if(flag === true) {
    dog.changeImage("happy", happyDogImg);
    timer = timer - 0.050
  }

  if(timer > 0 && timer < 1) {
    flag = false
  }

  if(flag === false) {
    dog.changeImage("normal", dogImg);
    timer = 1.5;
  }

  drawSprites();
}

function reset() {
    console.log("hello world")
    foodStock = foodStock + 1;
    foodObj.updateFoodStock(foodStock);
  
}