require('bootstrap');
require('./styles/styles.scss');


console.log("dude:");

window.onload = function () {

	const parallaxBox = document.getElementById ( 'intro' );
	// const c1left = document.getElementById ( 'l1' ).offsetLeft,
	// c1top = document.getElementById ( 'l1' ).offsetTop,
	const c2left = document.getElementById ( 'l2' ).offsetLeft,
	c2top = document.getElementById ( 'l2' ).offsetTop,
  c3left = document.getElementById ( 'l3' ).offsetLeft,
  c3top = document.getElementById ( 'l3' ).offsetTop;

	parallaxBox.onmousemove = function ( event ) {
		event = event || window.event;
		const x = event.clientX - parallaxBox.offsetLeft,
		y = event.clientY - parallaxBox.offsetTop;

    mouseParallax ( 'l2', c2left, c2top, x, y, 60 );
    mouseParallax ( 'l3', c3left, c3top, x, y, 120 );
	};

};

function mouseParallax ( id, left, top, mouseX, mouseY, speed ) {
	const obj = document.getElementById ( id );
	const parentObj = obj.parentNode,
	containerWidth = parseInt( parentObj.offsetWidth ),
	containerHeight = parseInt( parentObj.offsetHeight );
	obj.style.left = left - ( ( ( mouseX - ( parseInt( obj.offsetWidth ) / 2 + left ) ) / containerWidth ) * speed ) + 'px';
	obj.style.top = top - ( ( ( mouseY - ( parseInt( obj.offsetHeight ) / 2 + top ) ) / containerHeight ) * speed ) + 'px';
}
