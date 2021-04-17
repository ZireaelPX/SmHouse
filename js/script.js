const formAuthorisedButton = document.querySelector('.form-authorised__button');
const authorisedBlock = document.querySelector('.authorised__block');
const formAuthorisedInput = document.querySelector('.form-authorised__input');
const homeScreen = document.querySelector('.home-screen');
const linkRoom = document.querySelectorAll('.link-room');
const appartaments = document.querySelector('.appartaments');
const devices = document.querySelector('.devices');
const linkDevice = document.querySelectorAll('.link-device');
const roomGetback = document.querySelector('.room-getback');
formAuthorisedInput.value = 'root';


formAuthorisedButton.addEventListener('click', () => {
	authorisedBlock.classList.add('close-modal');
	homeScreen.classList.remove('close-modal');
});
roomGetback.addEventListener('click', () => {
	devices.classList.add('close-modal');
	homeScreen.classList.remove('close-modal');
});


// linkRoom.addEventListener('click', () => {
// 	homeScreen.classList.add('close-modal');
// 	appartaments.classList.remove('close-modal');
// });
linkRoom.forEach((elem) => {
	console.log(elem);
	// elem.addEventListener('click', () => {
	// 	// console.log(elem);
	// 	elem.classList.toggle('active');
	// 	characteristicsDescription[i].classList.toggle('active');
	// });
	elem.addEventListener('click', () => {
		homeScreen.classList.add('close-modal');
		appartaments.classList.remove('close-modal');
	})
});
linkDevice.forEach((elem) => {
	console.log(elem);
	// elem.addEventListener('click', () => {
	// 	// console.log(elem);
	// 	elem.classList.toggle('active');
	// 	characteristicsDescription[i].classList.toggle('active');
	// });
	elem.addEventListener('click', () => {
		devices.classList.remove('close-modal');
		appartaments.classList.add('close-modal');
		homeScreen.classList.add('close-modal');
	})
});