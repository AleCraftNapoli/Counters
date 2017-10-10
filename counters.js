//Canvas Declaration
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
//Variables Declaration
let y = 45;
let count = prompt("Insert number of counters:", 3);
let c = [];
let color = "#FF0000"; //Line Color
let sW = 2; //Stroke Weight



function drawRect(x1, y1, x2, y2) {
	ctx.strokeStyle = color;
	ctx.fillStyle = "#000000";
	ctx.lineWidth = sW;
	ctx.strokeRect(x1, y1, x2, y2);
	ctx.fillRect(x1+sW/2, y1+sW/2, x2-sW, y2-sW);
}

function drawBtn(x1, y1, x2, y2) {
	ctx.strokeStyle = color;
	ctx.fillStyle = "#333333";
	ctx.lineWidth = sW;
	ctx.strokeRect(x1, y1, x2, y2);
	ctx.fillRect(x1+sW/2, y1+sW/2, x2-sW, y2-sW);
}

function Refresh() {
	for (let i = 0; i < count; i++) {
	c[i].show();
	}
}

function mouseClick(event) {
	let mouseX = event.clientX;
	let mouseY = event.clientY;
	for (let i=0; i<count; i++) {
		let b1 = c[i].x+(300+(3*9.375)); //328.125 + x
		let b2 = c[i].x+(300+(3*9.375))+37.5; //365.625 + x
		let b3 = c[i].y+(101.25); //31.25 + 70
		let b4 = c[i].y+(101.25+37.5); //68.75 + 70
		//console.log(mouseX+" "+mouseY);
		if (mouseX > b1 && mouseX < b2 && mouseY > b3 && mouseY < b4) {
			c[i].value++;
			Refresh();
			//console.log("Incremented Counter "+i+" to "+c[i].value);
		}
		
		let b5 = c[i].x+(375+(9.375));
		let b6 = c[i].x+(375+(3*9.375)+37.5);
		let b7 = c[i].y+(101.25);
		let b8 = c[i].y+(101.25+37.5);
		if (mouseX > b5 && mouseX < b6 && mouseY > b7 && mouseY < b8) {
			c[i].value--;
			Refresh();
			//console.log("Decremented Counter "+i+" to "+c[i].value);
		}
	}
}

class Counter {
	constructor(id, y, name) {
		this.id = id;
		this.ty = y - 5;
		this.x = 5;
		this.y = y;
		this.value = 0;
		this.vtext = "";
		this.title = name;
		ctx.stroke();
		drawRect(this.x, this.y, 450, 100);
	}
	
	show() {
		//Counter Title
		ctx.fillStyle = "#00FF00";
		ctx.font = "40px Times New Roman";
		ctx.fillText(this.title, this.x, this.ty);
		//Digit Rect
		drawRect(this.x, this.y, 75, 100);
		drawRect(this.x+75, this.y, 75, 100);
		drawRect(this.x+75*2, this.y, 75, 100);
		drawRect(this.x+75*3, this.y, 75, 100);
		//Buttons
		drawBtn(this.x+(300+(3*9.375)), this.y+31.25, 37.5, 37.5);
		drawBtn(this.x+(375+(9.375)), this.y+31.25, 37.5, 37.5);
		ctx.fillStyle = "#FFFFFF";
		ctx.font = "37.5px Verdana";
		ctx.fillText("+", this.x+(331.25), this.y+62);
		ctx.fillText("-", this.x+(395), this.y+62);
		
		//Digits
		ctx.font = "75px Verdana";
		if (this.value > 9999) 
		{
			this.value = 9999;
			this.vtext = this.value.toString();
		}
		else if (this.value > 999) 
		{
			this.vtext = this.value.toString();
		}
		else if (this.value > 99) 
		{
			this.vtext = "0" + this.value.toString();
		}
		else if (this.value > 9) 
		{
			this.vtext = "00" + this.value.toString();
		}
		else if (this.value >= 0) 
		{
			this.vtext = "000" + this.value.toString();
		}
		else if (this.value < 0) 
		{
			this.value = 0;
			this.vtext = "0000";
			this.show();
		}
		ctx.fillText(this.vtext[0], this.x+12.5, this.y+75);
		ctx.fillText(this.vtext[1], this.x+87.5, this.y+75);
		ctx.fillText(this.vtext[2], this.x+162.5, this.y+75);
		ctx.fillText(this.vtext[3], this.x+237.5, this.y+75);
	}
}

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