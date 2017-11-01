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
		drawRect(this.x+75*0, this.y, 75, 100);
		drawRect(this.x+75*1, this.y, 75, 100);
		drawRect(this.x+75*2, this.y, 75, 100);
		drawRect(this.x+75*3, this.y, 75, 100);
		//Buttons
		this.buttonp = document.createElement('button');
		this.buttonm = document.createElement('button');
		let bp = this.buttonp;
		let bm = this.buttonm;

		bp.id = 'button'+this.id+'p';
		bp.style.position = 'absolute';
		bp.style.left = this.x+(300+(3*9.375))+'px';
		bp.style.top = 100+this.y+'px';
		bp.style.fontSize = '24px';
		bp.style.padding = '3px 10px';
		bp.innerHTML = '+';
		bp.addEventListener("click", () => {this.value++; Refresh();});

		bm.id = 'button'+this.id+'m';
		bm.style.position = 'absolute';
		bm.style.left = this.x+(375+18.75)+'px';
		bm.style.top = 100+this.y+'px';
		bm.style.fontSize = '27px';
		bm.style.padding = '1.5px 13px';
		bm.innerHTML = '-';
		bm.addEventListener("click", () => {this.value--; Refresh();});

		document.body.appendChild(bp);
		document.body.appendChild(bm);

		ctx.fillStyle = "#FFFFFF";
		ctx.font = "37.5px Verdana";

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

function drawRect(x1, y1, x2, y2) {
	ctx.strokeStyle = color;
	ctx.fillStyle = "#000000";
	ctx.lineWidth = sW;
	ctx.strokeRect(x1, y1, x2, y2);
	ctx.fillRect(x1+sW/2, y1+sW/2, x2-sW, y2-sW);
}

function Refresh() {
	for (let i = 0; i < count; i++) {
		c[i].show();
	}
}