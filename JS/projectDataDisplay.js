'use strict';

import projects from '../JSON/data.json' assert { type: 'json' };

let test1 = document.getElementById('petLMB');
test1.onclick = () => {
	console.log(projects[0]);
};
