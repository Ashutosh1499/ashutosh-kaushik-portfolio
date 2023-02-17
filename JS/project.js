let all = document.getElementById('all');
let allTab = document.getElementById('allTab');

let js = document.getElementById('js');
let jsTab = document.getElementById('jsTab');

let react = document.getElementById('react');
let reactTab = document.getElementById('reactTab');

let xd = document.getElementById('xd');
let xdTab = document.getElementById('xdTab');

let projTabs = [];
projTabs.push(allTab);
projTabs.push(jsTab);
projTabs.push(reactTab);
projTabs.push(xdTab);

let allTabSpan = document.getElementById('allTabSpan');
let allTabHover = document.getElementById('allTabHover');

let jsTabSpan = document.getElementById('jsTabSpan');
let jsTabHover = document.getElementById('jsTabHover');

let reactTabSpan = document.getElementById('reactTabSpan');
let reactTabHover = document.getElementById('reactTabHover');

let xdTabSpan = document.getElementById('xdTabSpan');
let xdTabHover = document.getElementById('xdTabHover');

let projTabSpans = [];
projTabSpans.push(allTabSpan);
projTabSpans.push(jsTabSpan);
projTabSpans.push(reactTabSpan);
projTabSpans.push(xdTabSpan);

allTab.style.height = `${allTabSpan.clientHeight + 10}px`;
allTabHover.style.height = `${allTabSpan.clientHeight + 10}px`;

jsTab.style.height = `${jsTabSpan.clientHeight + 10}px`;
jsTabHover.style.height = `${jsTabSpan.clientHeight + 10}px`;

reactTab.style.height = `${reactTabSpan.clientHeight + 10}px`;
reactTabHover.style.height = `${reactTabSpan.clientHeight + 10}px`;

xdTab.style.height = `${xdTabSpan.clientHeight + 10}px`;
xdTabHover.style.height = `${xdTabSpan.clientHeight + 10}px`;

changeTab = i => {
	projTabs.forEach(eachTab => {
		eachTab.classList.remove('active');
		eachTab.classList.remove('tabFullWidth');
	});
	projTabs[i - 1].classList.add('active');
	projTabs[i - 1].classList.add('tabFullWidth');
	document.getElementById('barDiv').style.height = '250px';
	document.getElementById('barDiv').style.width = '400px';
	if (i == 2) {
		document.getElementById('barDiv').style.height = '0px';
		document.getElementById('barDiv').style.width = '0px';
	}
};
all.onmouseover = () => {
	allTabHover.classList.add('tabFullWidth');
	allTabHover.style.backgroundColor = '#d8d8d8';
};
all.onmouseleave = () => {
	allTabHover.classList.remove('tabFullWidth');
};
let tre = document.getElementById('tre');

js.onmouseover = () => {
	jsTabHover.classList.add('tabFullWidth');
	jsTabHover.style.backgroundColor = '#d8d8d8';
};
js.onmouseleave = () => {
	jsTabHover.classList.remove('tabFullWidth');
};

react.onmouseover = () => {
	reactTabHover.classList.add('tabFullWidth');
	reactTabHover.style.backgroundColor = '#d8d8d8';
};
react.onmouseleave = () => {
	reactTabHover.classList.remove('tabFullWidth');
};

xd.onmouseover = () => {
	xdTabHover.classList.add('tabFullWidth');
	xdTabHover.style.backgroundColor = '#d8d8d8';
};
xd.onmouseleave = () => {
	xdTabHover.classList.remove('tabFullWidth');
};

let projs = [];
let projImgs = [];
let projlmbs = [];

let proj1 = document.getElementById('proj1');
projs.push(proj1);
let p1Image = document.getElementById('p1Image');
projImgs.push(p1Image);
let proj1lmb = document.getElementById('proj1lmb');
projlmbs.push(proj1lmb);

let proj2 = document.getElementById('proj2');
projs.push(proj2);
let p2Image = document.getElementById('p2Image');
projImgs.push(p2Image);
let proj2lmb = document.getElementById('proj2lmb');
projlmbs.push(proj2lmb);

let proj3 = document.getElementById('proj3');
projs.push(proj3);
let p3Image = document.getElementById('p3Image');
projImgs.push(p3Image);
let proj3lmb = document.getElementById('proj3lmb');
projlmbs.push(proj3lmb);

let proj4 = document.getElementById('proj4');
projs.push(proj4);
let p4Image = document.getElementById('p4Image');
projImgs.push(p4Image);
let proj4lmb = document.getElementById('proj4lmb');
projlmbs.push(proj4lmb);

let projectNameChildDivs = document.querySelectorAll('.projectNameChild');

let projLmbs = document.querySelectorAll('.projLmbs');

makeVisible = i => {
	projs[i].style.opacity = '1';
	projlmbs[i].style.opacity = '1';
	projectNameChildDivs[i].style.transform = 'translateY(0)';
	projLmbs[i].style.transform = 'translateY(0)';

	projectNameChildDivs[i].style.opacity = 1;
	projLmbs[i].style.opacity = 1;
};

makeInvisible = i => {
	projs[i].style.opacity = '0';
	projlmbs[i].style.opacity = '0';

	projectNameChildDivs[i].style.transform = 'translateY(-50%)';
	projLmbs[i].style.transform = 'translateY(50%)';

	projectNameChildDivs[i].style.opacity = 0;
	projLmbs[i].style.opacity = 0;
};

p1Image.onmouseover = () => {
	makeVisible(0);
};
p1Image.onmouseleave = () => {
	makeInvisible(0);
};

p2Image.onmouseover = () => {
	makeVisible(1);
};
p2Image.onmouseleave = () => {
	makeInvisible(1);
};

p3Image.onmouseover = () => {
	makeVisible(2);
};
p3Image.onmouseleave = () => {
	makeInvisible(2);
};

p4Image.onmouseover = () => {
	makeVisible(3);
};
p4Image.onmouseleave = () => {
	makeInvisible(3);
};

proj1.onmouseover = () => {
	makeVisible(0);
};
proj1.onmouseleave = () => {
	makeInvisible(0);
};

proj2.onmouseover = () => {
	makeVisible(1);
};
proj2.onmouseleave = () => {
	makeInvisible(1);
};

proj3.onmouseover = () => {
	makeVisible(2);
};
proj3.onmouseleave = () => {
	makeInvisible(2);
};

proj4.onmouseover = () => {
	makeVisible(3);
};
proj4.onmouseleave = () => {
	makeInvisible(3);
};

proj1lmb.onmouseover = () => {
	makeVisible(0);
};
proj1lmb.onmouseleave = () => {
	makeInvisible(0);
};

proj2lmb.onmouseover = () => {
	makeVisible(1);
};
proj2lmb.onmouseleave = () => {
	makeInvisible(1);
};

proj3lmb.onmouseover = () => {
	makeVisible(2);
};
proj3lmb.onmouseleave = () => {
	makeInvisible(2);
};

proj4lmb.onmouseover = () => {
	makeVisible(3);
};
proj4lmb.onmouseleave = () => {
	makeInvisible(3);
};

let currentProject = 0;
showDetails = id => {
	currentProject = id;
	document.getElementById('eachProjectDetails').style.display = 'flex';
	document.getElementById(`projDetail${id}`).style.display = 'block';
	document
		.getElementById(`projDetail${id}`)
		.classList.add('projectDetailAreaAnimation');
};

document.addEventListener('mouseup', e => {
	let eachProjectDetails = document.getElementById('eachProjectDetails');
	if (e.target.id == 'eachProjectDetails') {
		eachProjectDetails.style.display = 'none';
		document.getElementById(`projDetail`).style.display = 'none';
	}
});

displayDetails = id => {
	document.getElementById('eachProjectDetails').style.display = 'flex';
	document.getElementById('projDetail').style.display = 'block';
	document
		.getElementById('projDetail')
		.classList.add('projectDetailAreaAnimation');
	fetch('../JSON/data.json')
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			document.getElementById(
				'projectName',
			).innerText = `${data[id].projectName}`;
			document.getElementById(
				'projImages',
			).style.backgroundImage = `url('${data[id].bgImage}')`;
			document.getElementById(
				'projectMainImages',
			).src = `${data[id].mainImage}`;
			let details = data[id].details;
			document.getElementById('projectDescription').innerHTML = '';
			details.forEach(detail => {
				document.getElementById(
					'projectDescription',
				).innerHTML += `<div>${detail}</div>`;
			});
			let linkButton = document.getElementById('linkButton');
			linkButton.onclick = () => {
				window.open(data[id].gitLink);
			};
		})
		.catch(function (err) {
			console.log(err);
		});
};
