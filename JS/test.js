let links = document.getElementById('links');
let insta = document.getElementById('insta');
let linkd = document.getElementById('linkd');
let arrow = document.getElementById('arrow');
let git = document.getElementById('git');
links.addEventListener('mouseover', e => {
	insta.style.transform = 'translateY(-60px)';
	linkd.style.transform = 'translateY(-120px)';
	git.style.transform = 'translateY(-180px)';
	arrow.style.transform = 'rotate(0deg)';
	insta.style.width = '50px';
	insta.style.height = '50px';
	linkd.style.width = '50px';
	linkd.style.height = '50px';
	git.style.width = '50px';
	git.style.height = '50px';
});
links.addEventListener('mouseout', e => {
	insta.style.transform = 'translateY(0)';
	linkd.style.transform = 'translateY(0)';
	git.style.transform = 'translateY(0)';
	arrow.style.transform = 'rotate(180deg)';
	insta.style.width = '0px';
	insta.style.height = '0px';
	linkd.style.width = '0px';
	linkd.style.height = '0px';
	git.style.width = '0px';
	git.style.height = '0px';
});

openImageInNewTab = () => {
	let petimg = document.getElementById('PETimage');
	let url = petimg.getAttribute('src');
	window.open(url);
};
