let canvas = document.getElementById('greetCanvas');
let mainCont = document.getElementById('greet');

canvas.width = mainCont.offsetWidth;
canvas.height = mainCont.offsetHeight;

let c = canvas.getContext('2d');
let n = parseInt(mainCont.offsetWidth / 80);

let x = 0;
let y = mainCont.offsetHeight - 50;

let dx = 20;
let dy = 0;

let linesY = [];
let linesX = [];

declaringLines = () => {
	linesX = [];
	linesY = [];
	x = 0;
	for (let i = 0; i < n; i++) {
		linesX.push(x + dx);
		x = x + dx;
		let rNum = Math.random() - 0.5;
		let newY = y + rNum * 25;
		linesY.push(newY);
	}
	x = mainCont.offsetWidth - n * dx;
	for (let i = 0; i < n; i++) {
		linesX.push(x + dx);
		x = x + dx;
		let rNum = Math.random() - 0.5;
		let newY = y + rNum * 25;
		linesY.push(newY);
	}
};
declaringLines();
changeLineAndCircle = (line, alpha, circleColor, radius, i) => {
	c.beginPath();
	c.moveTo(line, 0);
	c.lineTo(line, linesY[i]);
	c.lineWidth = 0.5;
	c.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
	c.stroke();

	c.beginPath();
	c.arc(line, linesY[i], radius, 0, 2 * Math.PI);
	c.fillStyle = `${circleColor}`;
	c.fill();
};

c.clearRect(0, 0, innerWidth, innerHeight);
let i = 0;
linesX.forEach(line => {
	changeLineAndCircle(line, 0.3, '#04C2C9', 2, i);
	i = i + 1;
});

// canvas.onmousemove = e => {
// 	c.clearRect(0, 0, mainCont.offsetWidth, mainCont.offsetHeight);
// 	let xPos = e.clientX;
// 	let yPos = e.clientY;
// 	let low = xPos - 12;
// 	let high = xPos + 12;
// 	let lower = xPos - 30;
// 	let higher = xPos + 30;
// 	let lowest = xPos - 50;
// 	let highest = xPos + 50;
// 	let i = 0;
// 	linesX.forEach(line => {
// 		if (line >= low && line <= high && yPos < y) {
// 			changeLineAndCircle(line, 1, '#5de1e6', 3, i);
// 		} else if (
// 			((line < low && line >= lower) || (line > high && line <= higher)) &&
// 			yPos < y
// 		) {
// 			changeLineAndCircle(line, 0.8, '#04C2C9', 2.5, i);
// 		} else if (
// 			((line < lower && line >= lowest) ||
// 				(line > higher && line <= highest)) &&
// 			yPos < y
// 		) {
// 			changeLineAndCircle(line, 0.6, '#04C2C9', 2.5, i);
// 		} else {
// 			changeLineAndCircle(line, 0.3, '#04C2C9', 2, i);
// 		}
// 		i = i + 1;
// 	});
// };

window.onresize = function () {
	let csWidth = contactSection.offsetWidth;
	downArrow.style.borderLeft = `${csWidth / 2}px solid transparent`;
	downArrow.style.borderRight = `${csWidth / 2}px solid transparent`;
	canvas.width = mainCont.offsetWidth;
	canvas.height = mainCont.offsetHeight;
	c = canvas.getContext('2d');
	y = mainCont.offsetHeight - 50;
	n = parseInt(mainCont.offsetWidth / 80);

	declaringLines();
};

let k = 0;
let start = 0;
let end = 4;
let len = linesX.length;

testingAnim = () => {
	setInterval(() => {
		c.clearRect(0, 0, mainCont.offsetWidth, mainCont.offsetHeight);
		let j = 0;
		linesX.forEach(line => {
			changeLineAndCircle(line, 0.6, '#04C2C9', 1, j);
			j = j + 1;
		});
		if (k >= 4 && k < len) {
			changeLineAndCircle(linesX[k - 4], 0.6, '#04C2C9', 2, k - 4);
			changeLineAndCircle(linesX[k - 3], 0.8, '#04C2C9', 2, k - 3);
			changeLineAndCircle(linesX[k - 2], 1, '#04C2C9', 2, k - 2);
			changeLineAndCircle(linesX[k - 1], 0.8, '#04C2C9', 2, k - 1);
			changeLineAndCircle(linesX[k], 0.6, '#04C2C9', 2, k);
		} else {
		}
		k = k + 1;
		if (k == len) {
			k = 0;
		}
	}, 50);
};
testingAnim();
