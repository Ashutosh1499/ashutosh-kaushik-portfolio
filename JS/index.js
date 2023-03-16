let introButton = document.getElementById('introButton');
let introIcon = document.getElementById('introIcon');
introButton.onmouseover = e => {
	introIcon.style.transform = 'rotate(0deg)';
	introIcon.classList.remove('introButtonIconAnimation');
};
introButton.onmouseout = () => {
	introIcon.style.transform = 'rotate(-90deg)';
};
let topBar = document.getElementById('topBar');
let topBarOffset = topBar.offsetTop;
let projectSection = document.getElementById('projectSection');
let timeline = document.getElementById('timelineSection');
let projectsOffset = projectSection.offsetTop;
let timelineOffset = timeline.offsetTop;
let contactOffset = document.getElementById('contactSection').offsetTop;
let aboutTB = document.getElementById('aboutTB');
let projectsTB = document.getElementById('projectsTB');
let timelineTB = document.getElementById('timelineTB');
let contactTB = document.getElementById('contactTB');
let aboutSection = document.getElementById('aboutSection');
let aboutBorder = document.getElementById('aboutBorder');
let contactBorder = document.getElementById('contactBorder');
let projectsBorder = document.getElementById('projectsBorder');
let timelineBorder = document.getElementById('timelineBorder');
let projectTabs = document.getElementById('projectTabs');
let contactForm = document.getElementById('contactForm');

let skill1 = document.getElementById('skill1');
let skill2 = document.getElementById('skill2');
let skill3 = document.getElementById('skill3');
let skill4 = document.getElementById('skill4');

let skill1Tittle = document.getElementById('skill1Tittle');
let skill2Tittle = document.getElementById('skill2Tittle');
let skill3Tittle = document.getElementById('skill3Tittle');
let skill4Tittle = document.getElementById('skill4Tittle');

let htmlBar = document.getElementById('htmlBar');
let cssBar = document.getElementById('cssBar');
let jsBar = document.getElementById('jsBar');
let reactBar = document.getElementById('reactBar');
let javaBar = document.getElementById('javaBar');
let dsaBar = document.getElementById('dsaBar');
let illsBar = document.getElementById('illsBar');
let xdBar = document.getElementById('xdBar');
let mongoBar = document.getElementById('mongoBar');
let sqlBar = document.getElementById('sqlBar');

let skillInfo1 = document.getElementById('skillInfo1');
let skillInfo2 = document.getElementById('skillInfo2');
let skillInfo3 = document.getElementById('skillInfo3');
let skillInfo4 = document.getElementById('skillInfo4');
let allImages = document.querySelectorAll('.eachImage');

let aboutDesc1 = document.getElementById('aboutDesc1');
let aboutDesc2 = document.getElementById('aboutDesc2');

let skillIcons = [];
skillIcons.push(skill1);
skillIcons.push(skill2);
skillIcons.push(skill3);
skillIcons.push(skill4);

let skillTittles = [skill1Tittle, skill2Tittle, skill3Tittle, skill4Tittle];

let skillBars = [];
skillBars.push(htmlBar);
skillBars.push(cssBar);
skillBars.push(jsBar);
skillBars.push(reactBar);
skillBars.push(javaBar);
skillBars.push(dsaBar);
skillBars.push(illsBar);
skillBars.push(xdBar);
skillBars.push(mongoBar);
skillBars.push(sqlBar);

let eachBarPercentage = [55, 60, 50, 30, 40, 45, 40, 70, 30, 45];

let skillInfo = [];
skillInfo.push(skillInfo1);
skillInfo.push(skillInfo2);
skillInfo.push(skillInfo3);
skillInfo.push(skillInfo4);

//onScrollHandle----------------------------------------------------------

window.onscroll = e => {
	if (window.pageYOffset >= topBarOffset) {
		topBar.classList.add('sticky');
		aboutSection.style.paddingTop = '50px';
	} else {
		topBar.classList.remove('sticky');
		aboutSection.style.paddingTop = '0';
	}
	if (
		window.pageYOffset >= topBarOffset - 300 &&
		window.pageYOffset <= projectsOffset - 300
	) {
		aboutTB.style.color = '#5de1e6';
		aboutBorder.classList.add('headingAnimation');
		aboutBorder.style.opacity = '1';
		let i = 0;
		setInterval(() => {
			if (i < skillIcons.length) {
				skillIcons[i].classList.add('skillAnimations');
				skillIcons[i].style.opacity = '1';
				skillInfo[i].classList.add('infoAnimation');
				skillInfo[i].style.opacity = '1';
				skillTittles[i].classList.add('infoAnimation');
				skillTittles[i].style.opacity = '1';
				i = i + 1;
			}
		}, 200);
		if (
			window.pageYOffset >= topBarOffset + 100 &&
			window.pageYOffset <= projectsOffset - 300
		) {
			aboutDesc1.classList.add('aboutDescAnimation1');
			aboutDesc2.classList.add('aboutDescAnimation2');
			aboutDesc1.style.opacity = '1';
			aboutDesc2.style.opacity = '1';
			let j = 0;
			setInterval(() => {
				if (j < skillBars.length) {
					skillBars[j].style.width = `${eachBarPercentage[j]}%`;
					j = j + 1;
				}
			}, 150);
		}
	} else {
		aboutTB.style.color = 'white';
	}
	if (
		window.pageYOffset >= projectsOffset - 300 &&
		window.pageYOffset <= timelineOffset - 50
	) {
		projectsTB.style.color = '#5de1e6';
		projectsBorder.classList.add('headingAnimation');
		projectsBorder.style.opacity = '1';
		setTimeout(() => {
			projectTabs.style.opacity = '1';
		}, 200);
		if (
			window.pageYOffset >= projectsOffset - 150 &&
			window.pageYOffset <= timelineOffset - 50
		) {
			let i = 0;
			setInterval(() => {
				if (i < 5) {
					allImages[i].classList.add('imagesAnimation');
					i = i + 1;
				}
			}, 200);
		}
	} else {
		projectsTB.style.color = 'white';
	}
	if (
		window.pageYOffset >= timelineOffset - 300 &&
		window.pageYOffset <= contactOffset - 50
	) {
		timelineTB.style.color = '#5de1e6';
		timelineBorder.classList.add('headingAnimation');
		timelineBorder.style.opacity = '1';
	} else {
		timelineTB.style.color = 'white';
	}
	if (window.pageYOffset >= contactOffset - 300) {
		contactTB.style.color = '#5de1e6';
		contactBorder.classList.add('headingAnimation');
		contactBorder.style.opacity = '1';
		if (window.pageYOffset >= contactOffset - 150) {
			contactForm.classList.add('contactBoxAnimation');
			contactForm.style.opacity = 1;
		}
	} else {
		contactTB.style.color = 'white';
	}
};

if (window.pageYOffset >= topBarOffset) {
	topBar.classList.add('sticky');
	aboutSection.style.paddingTop = '50px';
} else {
	topBar.classList.remove('sticky');
	aboutSection.style.paddingTop = '0';
}
if (
	window.pageYOffset >= topBarOffset - 300 &&
	window.pageYOffset <= projectsOffset - 300
) {
	aboutTB.style.color = '#5de1e6';
	aboutBorder.classList.add('headingAnimation');
	aboutBorder.style.opacity = '1';
	let i = 0;
	setInterval(() => {
		if (i < skillIcons.length) {
			skillIcons[i].classList.add('skillAnimations');
			skillIcons[i].style.opacity = '1';
			skillInfo[i].classList.add('infoAnimation');
			skillInfo[i].style.opacity = '1';
			skillTittles[i].classList.add('infoAnimation');
			skillTittles[i].style.opacity = '1';
			i = i + 1;
		}
	}, 200);
	if (
		window.pageYOffset >= topBarOffset + 100 &&
		window.pageYOffset <= projectsOffset - 300
	) {
		aboutDesc1.classList.add('aboutDescAnimation1');
		aboutDesc2.classList.add('aboutDescAnimation2');
		aboutDesc1.style.opacity = '1';
		aboutDesc2.style.opacity = '1';
		let j = 0;
		setInterval(() => {
			if (j < skillBars.length) {
				skillBars[j].style.width = `${eachBarPercentage[j]}%`;
				j = j + 1;
			}
		}, 200);
	}
} else {
	aboutTB.style.color = 'white';
}
if (
	window.pageYOffset >= projectsOffset - 300 &&
	window.pageYOffset <= timelineOffset - 50
) {
	projectsTB.style.color = '#5de1e6';
	projectsBorder.classList.add('headingAnimation');
	projectsBorder.style.opacity = '1';
	if (
		window.pageYOffset >= projectsOffset - 150 &&
		window.pageYOffset <= timelineOffset - 50
	) {
		let i = 0;
		setInterval(() => {
			if (i < 5) {
				allImages[i].classList.add('imagesAnimation');
				console.log(i);
				i = i + 1;
			}
		}, 200);
	}
} else {
	projectsTB.style.color = 'white';
}
if (
	window.pageYOffset >= timelineOffset - 300 &&
	window.pageYOffset <= contactOffset - 50
) {
	timelineTB.style.color = '#5de1e6';
	timelineBorder.classList.add('headingAnimation');
	timelineBorder.style.opacity = '1';
} else {
	timelineTB.style.color = 'white';
}
if (window.pageYOffset >= contactOffset - 300) {
	contactTB.style.color = '#5de1e6';
	contactBorder.classList.add('headingAnimation');
	contactBorder.style.opacity = '1';
	if (window.pageYOffset >= contactOffset - 150) {
		contactForm.classList.add('contactBoxAnimation');
		contactForm.style.opacity = 1;
	}
} else {
	contactTB.style.color = 'white';
}

scrollToHome = () => {
	let elem = document.getElementById('greet');
	elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
scrollToAbout = () => {
	let elem = document.getElementById('aboutSection');
	elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
scrollToProjects = () => {
	let elem = document.getElementById('projectSection');
	elem.scrollIntoView({ behavior: 'smooth' });
};
scrollToTimeline = () => {
	let elem = document.getElementById('timelineSection');
	elem.scrollIntoView({ behavior: 'smooth' });
};
scrollToContact = () => {
	let elem = document.getElementById('contactSection');
	elem.scrollIntoView({ behavior: 'smooth' });
};
let mobileAlert = document.getElementById('mobileAlert');

if (
	navigator.userAgent.match(/Android/i) ||
	navigator.userAgent.match(/webOS/i) ||
	navigator.userAgent.match(/iPhone/i) ||
	navigator.userAgent.match(/iPad/i) ||
	navigator.userAgent.match(/iPod/i) ||
	navigator.userAgent.match(/BlackBerry/i) ||
	navigator.userAgent.match(/Windows Phone/i)
) {
	f;
	alert('Please switch to a desktop for better experience.');
} else {
}
