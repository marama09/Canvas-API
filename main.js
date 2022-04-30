// select the Canvas Elements
let theCanvas =document.getElementById('our-canvas'),

// Select Context Type
theContext=theCanvas.getContext('2d');

// First Circle
theContext.beginPath();
theContext.fillStyle='#ffff02';
theContext.arc(300,200,100,0,Math.PI*2);
theContext.fill();

// Mouth circle 
theContext.beginPath();
theContext.fillStyle='#FFF';
theContext.arc(300,200,80,0,Math.PI);
theContext.stroke();

// Left Eye
theContext.beginPath();
theContext.fillStyle='#000';
theContext.arc(260,160,15,0,Math.PI*2);
theContext.fill();

// Right Eye
theContext.beginPath();
theContext.fillStyle='#000';
theContext.arc(340,160,15,0,Math.PI*2);
theContext.fill();


// Draw 
theContext.stroke();