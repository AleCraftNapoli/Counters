//Canvas Declaration
let canvas = document.createElement('canvas');
let ctx = canvas.getContext("2d");
var body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);
//Variables Declaration
let y = 45;
let count = prompt("Insert number of counters:", 3);
let c = [];
let color = "#FF0000"; //Line Color
let sW = 2; //Stroke Weight



if (count == 0) {
	canvas.width = 0;
	canvas.height = 0;
} else if (count < 0) {
	console.log("Error: Number of counters can't be negative!");
} else if (count > 0) {
	canvas.width = 500;
	canvas.height = 170*count;
}

for (let i = 0; i < count; i++) {
	let p = "Name of Counter "+i;
	let a = "Counter "+i;
	let name = prompt(p, a);
	c[i] = new Counter(i, y, name);
	c[i].show();
	y += 170;
}
