let tlCanvas = document.getElementById('timelineCanvas');
let timelineCanvasDiv = document.getElementById('timelineCanvasDiv');

tlCanvas.width = timelineCanvasDiv.offsetWidth;
tlCanvas.height = timelineCanvasDiv.offsetHeight;

let tc = tlCanvas.getContext('2d');
let i1 = 10;
let flag1 = true;
let flag2 = true;
let flag3 = true;
let flag4 = true;

displayTimelineCanvas = () => {
	console.log('h1');
	setInterval(() => {
		if (i1 < tlCanvas.height - 50) {
			tc.beginPath();
			tc.moveTo(200, 10);
			tc.lineTo(200, i1);
			tc.lineWidth = 2.5;
			tc.strokeStyle = 'black';
			tc.stroke();
			i1 = i1 + 2;
			if (i1 > 110) {
				tc.beginPath();
				tc.rect(190, 100, 20, 20);
				tc.fillStyle = '#5de1e6';
				tc.fill();
				if (flag1) {
					tc.beginPath();
					tc.rect(185, 95, 30, 30);
					tc.fillStyle = 'rgba(0, 0, 0, 0.2)';
					tc.fill();
					tc.fillStyle = 'black';
					tc.font = 'bold 20px Segoe UI';
					tc.fillText(' 2014 ( X )', 220, 115);
					flag1 = false;
				}
			}
			if (i1 > 340) {
				tc.beginPath();
				tc.rect(190, 340, 20, 20);
				tc.fillStyle = '#5de1e6';
				tc.fill();
				if (flag2) {
					tc.beginPath();
					tc.rect(185, 335, 30, 30);
					tc.fillStyle = 'rgba(0, 0, 0, 0.2)';
					tc.fill();
					tc.fillStyle = 'black';
					tc.font = 'bold 20px Segoe UI';
					tc.fillText(' 2016 ( XII )', 220, 345);
					flag2 = false;
				}
			}
			if (i1 > 570) {
				tc.beginPath();
				tc.rect(190, 570, 20, 20);
				tc.fillStyle = '#5de1e6';
				tc.fill();
				if (flag3) {
					tc.beginPath();
					tc.rect(185, 565, 30, 30);
					tc.fillStyle = 'rgba(0, 0, 0, 0.2)';
					tc.fill();
					tc.fillStyle = 'black';
					tc.font = 'bold 20px Segoe UI';
					tc.fillText(' 2017 - 2021 ( B.E. )', 220, 585);
					flag3 = false;
				}
			}
			if (i1 > 800) {
				tc.beginPath();
				tc.rect(190, 800, 20, 20);
				tc.fillStyle = '#5de1e6';
				tc.fill();
				if (flag4) {
					tc.beginPath();
					tc.rect(185, 795, 30, 30);
					tc.fillStyle = 'rgba(0, 0, 0, 0.2)';
					tc.fill();
					tc.fillStyle = 'black';
					tc.font = 'bold 20px Segoe UI';
					tc.fillText(' 2021 - 2021 ( Software Engineer )', 220, 815);
					flag4 = false;
				}
			}
		} else {
			setInterval(() => {}, 100);
		}
	}, 100);
};

setInterval(() => {
	if (i1 < tlCanvas.height - 50) {
		tc.beginPath();
		tc.moveTo(tlCanvas.width - 200, 10);
		tc.lineTo(tlCanvas.width - 200, i1);
		tc.lineWidth = 2.5;
		tc.strokeStyle = 'black';
		tc.stroke();
		i1 = i1 + 2;
	} else {
		setInterval(() => {}, 100);
	}
}, 1);
