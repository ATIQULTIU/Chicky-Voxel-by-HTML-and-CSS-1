"use strict";
// const chicky = document.querySelector('.chicky');
// let isActive = false;
// let startingPoint = {
// 	x: null,
// 	y: null,
// };
// let rotatePoint = {
// 	x: 0,
// 	y: 0,
// };
// window.addEventListener('mousedown', (evt) => {
// 	isActive = true;
// 	startingPoint.x = evt.clientX - rotatePoint.x;
// 	startingPoint.y = evt.clientY - rotatePoint.y;
// });
// window.addEventListener('mousemove', (evt) => {
// 	if (!isActive) {
// 		return;
// 	}
// 	rotatePoint.y = startingPoint.y - evt.clientY;
// 	rotatePoint.x = evt.clientX - startingPoint.x;
// 	chicky.style.setProperty('--rotate-x', `${rotatePoint.y}deg`);
// 	chicky.style.setProperty('--rotate-y', `${rotatePoint.x}deg`);
// });
// window.addEventListener('mouseup', () => {
// 	isActive = false;
// });