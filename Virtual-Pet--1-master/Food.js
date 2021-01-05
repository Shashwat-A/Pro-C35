class Food{
    constructor() {
        lastFed = database.ref('FeedTime')
        lastFed.on("value", function(data){
            lastFed = data.val();
        });

        this.image = loadImage("images/Milk.png");
        this.foodStock = foodStock;
    }
    display() {

        if(this.foodStock !=  0) {
            for(var i = 0; i < this.foodStock; i = i + 1) {
                if(i % 10 === 0) {
                    x = 80;
                    y = y + 50;
                }
                console.log(x + " " + y);
                console.log(this.foodStock)
                imageMode(CENTER);
                image(this.image, x, y, 50, 50);
                x = x + 0.1;
            }
        }
        
    }

    getFoodStock() {
        foodStock = database.ref('Food');
        foodStock.on("value", function(data){
            foodStock = data.val();
        });
    }
    
    updateFoodStock(y) {
        database.ref('/').update({
            Food: foodStock

        });
        console.log("hello guys")
    }

    feed()  {
    
        flag = true;

        if(foodStock <= 0) {
            foodStock = 0; 
        }else {
            foodStock = foodStock - 1;

            database.ref('/').update({
            Food: foodStock
            
            });
        }

        database.ref('/').update({
            FeedTime: hour()
        });
    } 
}