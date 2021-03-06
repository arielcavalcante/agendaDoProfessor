(function () {
	let firebaseConfig = {
		apiKey: 'AIzaSyB7VIwHfuAkj3ldrqVdpOTeiPxiEB_I9Hc',
		authDomain: 'agenda-do-professor-170ca.firebaseapp.com',
		databaseURL:
			'https://agenda-do-professor-170ca-default-rtdb.firebaseio.com',
		projectId: 'agenda-do-professor-170ca',
		storageBucket: 'agenda-do-professor-170ca.appspot.com',
		messagingSenderId: '978409010510',
		appId: '1:978409010510:web:ba05292bb89d08dfec5a1f',
		measurementId: 'G-KDJRQE1K9T',
	};
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);

	// Get elements
	const preObject = document.getElementById('object');

	// Create references
	const dbRefObject = firebase.database().ref().child('aluno');

	//Sync obj changes

	// Create server
	// const createServer = require('http');

	// // Initialize access to realtime db
	// let server = createServer((req, res) => {
	// 	let ref = firebase.database().ref();
	// 	let html = '';
	// });
})();

const openMenu = document.querySelector('.menu-button');
const closeMenu = document.querySelector('.menu-close');
const menu = document.querySelector('header nav');
// Menu
function activateMenu() {
	if (menu.style.display === 'none') menu.style.display = 'flex';
	else menu.style.display = 'none';
}
openMenu.addEventListener('click', activateMenu);
closeMenu.addEventListener('click', activateMenu);

/* Seleciona e desseleciona todos os checkboxes da lista e mostra o status de seleção no checkbox 'mãe' */
function checkToggle(event) {
	let changed = event.target,
		selectAll = document.getElementById('frequencia-diaria'),
		checkboxes = [
			...this.querySelectorAll('.lista-frequencia input[type=checkbox]'),
		].filter(check => check !== selectAll);

	if (changed === selectAll) {
		checkboxes.forEach(check => (check.checked = selectAll.checked));
	} else {
		let allChecked =
			checkboxes.filter(check => check.checked).length === checkboxes.length;
		selectAll.checked = allChecked;
	}
}

let checkboxListElement = document.querySelector('.lista-frequencia ul');
checkboxListElement.addEventListener('change', checkToggle);
