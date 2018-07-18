var c = document.getElementById('canvas');
var ctx = c.getContext('2d');

//Premier rectangle haut
ctx.beginPath();
ctx.fillStyle = '#00A551';
ctx.fillRect(120, 130, 250, 50);

//Deuxième rectangle bas
ctx.beginPath();
ctx.fillStyle = '#00A551';
ctx.fillRect(70, 180, 350, 50);

//Roue gauche
ctx.arc(100,253,25,0,Math.PI*2,true);
ctx.fillStyle = '#C9C9C9';
ctx.fill();

//Roue droite
ctx.arc(400,253,25,0,Math.PI*2,true);
ctx.fillStyle = '#C9C9C9';
ctx.fill();
