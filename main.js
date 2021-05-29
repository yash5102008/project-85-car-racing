canvas = document.getElementById('mycanvas');
ctx = canvas.getcontext("2d");

car_width = 100;
car_height = 90;

background_image = "background.jpg";

car_image = "car1.jpg";

car_x = 10;
car_y = 10;

function add() {
    background_imgtag = new Image();
    background_imgtag.onload = uploadbackground;
    background_imgtag.src = background_image;

    car_imgtag = new Image();
    car_imgtag.onload = uploadcar;
    rover_imgtag.src = car_image;
}
 function uploadbackground(){
    cyx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
 }

 function uploadcar() {
     ctx.drawImage(car_imgtag, car_x, car_y, car_width, car_height);
 }


 window.addEventListener("keydown", my_keydown);

 function my_keydown(e)
 {
     keypressed = e.keycode;
     console.log(keypressed)
       if(keypressed == '38')
       {
           up();
           console.log("up")
       }
       if(keypressed == '40')
       {
           down();
           console.log("down");
       }
       if(keypressed == '37')
       {
           Left();
           console.log("left")
       }
       if(keypressed == '39')
       {
            right();
            console.log("right")
       }
 }
       function car1up()
       {
           if(car1_y >=0)
           {
               car1_y = car_y -10;
               console.log("when up arrow is pressed", x = "+ car_x +" | y )
           }
       }