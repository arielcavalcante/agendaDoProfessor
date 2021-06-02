(function () {
	var firebaseConfig = {
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
