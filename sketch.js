var database ;
var drawing = [];
function setup(){
    var  canvas =   createCanvas(displayWidth,displayHeight);
    canvas.mousePressed(startPath);
  //  canvas.mouseReleased(endPath);
    database = firebase.database();
    database.ref('Positions');
//    database.ref('details');
   // database.on("value");
  //     var username = createInput("username");


}

function startPath(){
    currentPath = [] ;
 //   drawing.push(currentPath);
 drawing.push(currentPath);


}
/*
function endPath(){
    drawing.push(currentPath);
}
*/  
function draw(){
    background(0);
    

    if(mouseIsPressed){
        var point = {
            x : mouseX ,
            y : mouseY 
        }
        currentPath.push(point);
       
    }
        stroke(100,200,150);
        strokeWeight(10);
        noFill();
     //   fill(255,100,50);
        for(var i = 0 ; i   < drawing.length ; i++){
            var path = drawing[i];
            beginShape();
            for(var t = 0 ; t   < path.length ;t++){
                vertex(path[t].x,path[t].y)
            }
            endShape();
        }

        console.log(drawing);
}