let downArrow = document.getElementById('downArrow');
let contactSection = document.getElementById('contactSection');

let csWidth = contactSection.offsetWidth;
downArrow.style.borderLeft = `${csWidth / 2}px solid transparent`;
downArrow.style.borderRight = `${csWidth / 2}px solid transparent`;

let submitButton = document.getElementById('submitButton');
submitButton.onmouseover = () => {
	submitButton.style.backgroundColor = '#04C2C9';
};
submitButton.onmouseleave = () => {
	submitButton.style.backgroundColor = 'transparent';
};

linkedinUrl = () => {
	window.open('https://www.linkedin.com/in/ashutosh-kaushik-55293314a/');
};
githubUrl = () => {
	window.open('https://github.com/Ashutosh1499');
};
instagramUrl = () => {
	window.open('https://www.instagram.com/ak.d.signs/');
};
