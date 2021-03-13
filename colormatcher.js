function colormatcher(){
var color1;
var color2;


    switch(randcolor1){
    case 1: color1 = 'red';
    break;
    
    case 2: color1 = 'orange';
    break;
    
    case 3: color1 = 'yellow';
    break;
    
    case 4: color1 = 'green';
    break;
    
    case 5: color1 = 'blue';
    break;
    
    case 6: color1 = 'indigo';
    break;
    
    case 7: color1 = 'purple';
    break;
    
    case 8: color1 = 'lavender';
    break;
    
    case 9: color1 = 'pink';
    break;
    
    case 10: color1 = 'black';
    break;
    
    case 11: color1 = 'brown';
    break;
    
    case 12: color1 = 'grey';
    break;
    }
    
    //color for  5 blocks
    switch(randcolor2){
    case 1: color2 = 'red';
    if(color1 === 'red'){
    color1 = 'orange';
    }
    break;
    
    case 2: color2 = 'orange';
    if(color1 === 'orange'){
    color1 = 'red';
    }
    break;
    
    case 3: color2 = 'yellow';
    if(color1 === 'yellow'){
    color1 = 'green';
    }
    break;
    
    case 4: color2 = 'green';
    if(color1 === 'green'){
    color1 = 'yellow';
    }
    break;
    
    case 5: color2 = 'blue';
    if(color1 === 'blue'){
    color1 = 'indigo';
    }
    break;
    
    case 6: color2 = 'indigo';
    if(color1 === 'indigo'){
    color1 = 'blue';
    }
    break;
    
    case 7: color2 = 'purple';
    if(color1 === 'purple'){
    color1 = 'lavender';
    }
    break;
    
    case 8: color2 = 'lavender';
    if(color1 === 'lavender'){
    color1 = 'purple';
    }
    break;
    
    case 9: color2 = 'pink';
    if(color1 === 'pink'){
    color1 = 'black';
    }
    break;
    
    case 10: color2 = 'black';
    if(color1 === 'black'){
    color1 = 'pink';
    }
    break;
    
    case 11: color2 = 'brown';
    if(color1 === 'brown'){
    color1 = 'grey';
    }
    break;
    
    case 12: color2 = 'grey';
    if(color1 === 'grey'){
    color1 = 'brown';
    }
    break;
    }
    // chosing part 
    switch(chooser1){
    //111//  
    case 1: spr1.shapeColor = color1;
    spr2.shapeColor = color2;
    spr3.shapeColor = color2;
    spr4.shapeColor = color2;
    spr5.shapeColor = color2;
    spr6.shapeColor = color2;
    if(mousePressedOver(spr2)){
    spr2.shapeColor = color2;
    console.log("spr2");
    poly2 = createSprite(spr2.x,spr2.y,100,100);
    poly2.shapeColor = color1;
    }
    if(mousePressedOver(spr3)){
    spr3.shapeColor = color1;
    console.log("spr3");
    poly3 = createSprite(spr3.x,spr3.y,100,100);
    poly3.shapeColor = color1;
    }
    if(mousePressedOver(spr4)){
    spr4.shapeColor = color1;
    console.log("spr4");
    poly4 = createSprite(spr4.x,spr4.y,100,100);
    poly4.shapeColor = color1;
    }
    if(mousePressedOver(spr5)){
    spr5.shapeColor = color1;
    console.log("spr5");
    poly5 = createSprite(spr5.x,spr5.y,100,100);
    poly5.shapeColor = color1;
    }
    if(mousePressedOver(spr6)){
    spr6.shapeColor = color1;
    console.log("spr6");
    poly6 = createSprite(spr6.x,spr6.y,100,100);
    poly6.shapeColor = color1;
    }
    break;
    //222//
    case 2: spr2.shapeColor = color1;
    spr1.shapeColor = color2;
    spr3.shapeColor = color2;
    spr4.shapeColor = color2;
    spr5.shapeColor = color2;
    spr6.shapeColor = color2;
    if(mousePressedOver(spr1)){
    spr1.shapeColor = color1;
    console.log("spr1");
    poly1 = createSprite(spr1.x,spr1.y,100,100);
    poly1.shapeColor = color1;
    }
    if(mousePressedOver(spr3)){
    spr3.shapeColor = color1;
    console.log("spr3");
    poly3 = createSprite(spr3.x,spr3.y,100,100);
    poly3.shapeColor = color1;
    }
    if(mousePressedOver(spr4)){
    spr4.shapeColor = color1;
    console.log("spr4");
    poly4 = createSprite(spr4.x,spr4.y,100,100);
    poly4.shapeColor = color1;
    }
    if(mousePressedOver(spr5)){
    spr5.shapeColor = color1;
    console.log("spr5");
    poly5 = createSprite(spr5.x,spr5.y,100,100);
    poly5.shapeColor = color1;
    }
    if(mousePressedOver(spr6)){
    spr6.shapeColor = color1;
    console.log("spr6");
    poly6 = createSprite(spr6.x,spr6.y,100,100);
    poly6.shapeColor = color1;
    }
    break;
    //333//
    case 3: spr3.shapeColor = color1;
    spr2.shapeColor = color2;
    spr1.shapeColor = color2;
    spr4.shapeColor = color2;
    spr5.shapeColor = color2;
    spr6.shapeColor = color2;
    if(mousePressedOver(spr1)){
    spr1.shapeColor = color1;
    console.log("spr1");
    poly1 = createSprite(spr1.x,spr1.y,100,100);
    poly1.shapeColor = color1;
    }
    if(mousePressedOver(spr2)){
    spr2.shapeColor = color1;
    console.log("spr2");
    poly2 = createSprite(spr2.x,spr2.y,100,100);
    poly2.shapeColor = color1;
    }
    if(mousePressedOver(spr4)){
    spr4.shapeColor = color1;
    console.log("spr4");
    poly4 = createSprite(spr4.x,spr4.y,100,100);
    poly4.shapeColor = color1;
    }
    if(mousePressedOver(spr5)){
    spr5.shapeColor = color1;
    console.log("spr5");
    poly5 = createSprite(spr5.x,spr5.y,100,100);
    poly5.shapeColor = color1;
    }
    if(mousePressedOver(spr6)){
    spr6.shapeColor = color1;
    console.log("spr6");
    poly6 = createSprite(spr6.x,spr6.y,100,100);
    poly6.shapeColor = color1;
    }
    
    break;
    //444//
    case 4: spr4.shapeColor = color1;
    spr2.shapeColor = color2;
    spr3.shapeColor = color2;
    spr1.shapeColor = color2;
    spr5.shapeColor = color2;
    spr6.shapeColor = color2;
    if(mousePressedOver(spr1)){
    spr1.shapeColor = color1;
    console.log("spr1");
    poly1 = createSprite(spr1.x,spr1.y,100,100);
    poly1.shapeColor = color1;
    }
    if(mousePressedOver(spr2)){
    spr2.shapeColor = color1;
    console.log("spr2");
    poly2 = createSprite(spr2.x,spr2.y,100,100);
    poly2.shapeColor = color1;
    }
    if(mousePressedOver(spr3)){
    spr3.shapeColor = color1;
    console.log("spr3");
    poly3 = createSprite(spr3.x,spr3.y,100,100);
    poly3.shapeColor = color1;
    }
    if(mousePressedOver(spr5)){
    spr5.shapeColor = color1;
    console.log("spr5");
    poly5 = createSprite(spr5.x,spr5.y,100,100);
    poly5.shapeColor = color1;
    }
    if(mousePressedOver(spr6)){
    spr6.shapeColor = color1;
    console.log("spr6");
    poly6 = createSprite(spr6.x,spr6.y,100,100);
    poly6.shapeColor = color1;
    }
    break;
    //555//
    case 5: spr5.shapeColor = color1;
    spr2.shapeColor = color2;
    spr3.shapeColor = color2;
    spr4.shapeColor = color2;
    spr1.shapeColor = color2;
    spr6.shapeColor = color2;
    if(mousePressedOver(spr1)){
    spr1.shapeColor = color1;
    console.log("spr1");
    poly1 = createSprite(spr1.x,spr1.y,100,100);
    poly1.shapeColor = color1;
    }
    if(mousePressedOver(spr2)){
    spr2.shapeColor = color1;
    console.log("spr2");
    poly2 = createSprite(spr2.x,spr2.y,100,100);
    poly2.shapeColor = color1;
    }
    if(mousePressedOver(spr3)){
    spr3.shapeColor = color1;
    console.log("spr3");
    poly3 = createSprite(spr3.x,spr3.y,100,100);
    poly3.shapeColor = color1;
    }
    if(mousePressedOver(spr4)){
    spr4.shapeColor = color1;
    console.log("spr4");
    poly4 = createSprite(spr4.x,spr4.y,100,100);
    poly4.shapeColor = color1;
    }
    if(mousePressedOver(spr6)){
    spr6.shapeColor = color1;
    console.log("spr6");
    poly6 = createSprite(spr6.x,spr6.y,100,100);
    poly6.shapeColor = color1;
    }
    break;
    //666//
    case 6: spr6.shapeColor = color1;
    spr2.shapeColor = color2;
    spr3.shapeColor = color2;
    spr4.shapeColor = color2;
    spr5.shapeColor = color2;
    spr1.shapeColor = color2;
    if(mousePressedOver(spr1)){
    spr1.shapeColor = color1;
    console.log("spr1");
    poly1 = createSprite(spr1.x,spr1.y,100,100);
    poly1.shapeColor = color1;
    }
    if(mousePressedOver(spr2)){
    spr2.shapeColor = color1;
    console.log("spr2");
    poly2 = createSprite(spr2.x,spr2.y,100,100);
    poly2.shapeColor = color1;
    }
    if(mousePressedOver(spr3)){
    spr3.shapeColor = color1;
    console.log("spr3");
    poly3 = createSprite(spr3.x,spr3.y,100,100);
    poly3.shapeColor = color1;
    }
    if(mousePressedOver(spr4)){
    spr4.shapeColor = color1;
    console.log("spr4");
    poly4 = createSprite(spr4.x,spr4.y,100,100);
    poly4.shapeColor = color1;
    }
    if(mousePressedOver(spr5)){
    spr5.shapeColor = color1;
    console.log("spr5");
    poly5 = createSprite(spr5.x,spr5.y,100,100);
    poly5.shapeColor = color1;
    }
    break;
    }
    }