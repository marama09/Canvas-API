// select the Canvas Elements
let theCanvas =document.getElementById('our-canvas'),

// Select Context Type
theContext=theCanvas.getContext('2d');

//Begin the Path 
theContext.beginPath();

// Select the start Position of the Path
theContext.moveTo(0,0);

// Select the Path Points
theContext.lineTo(250,250 )

// Select the start Position of the Path
theContext.moveTo(500,0);

// Select the Path Points
theContext.lineTo(250,250)

// Adjust Style and Line Width
theContext.strokeStyle='#00F';
theContext.lineWidth=5;

//Draw the Path
theContext.stroke();
