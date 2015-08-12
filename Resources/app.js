Titanium.UI.setBackgroundColor('#fff');

var homeWindow = Ti.UI.createWindow({
	title: "About Me",
	backgroundColor: "#FCD125"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: homeWindow
});

var picBox = Ti.UI.createView({
	backgroundColor: "transparent",
	top: 0,
	height: 250,
	width: 250
});

var lion = Ti.UI.createImageView({
	image: "lion.png",
	top: picBox.top,
	height: "150%",
});

var seeMore = Ti.UI.createView({
	borderRadius: 10,
	backgroundColor: "#735826",
	top: picBox.height + 10,
	height: 70,
	left: 50,
	right: 50
});

var seeText = Ti.UI.createLabel({
	color: "#d9d9d9",
	text: "Click here to learn about \n your classmate",
	font: {fontFamily: "Marker Felt", fontSize: 18, fontWeight: "Wide"},
	textAlign: "center", 
});

var theInfo = require("info");

picBox.add(lion);
seeMore.add(seeText);
homeWindow.add(picBox, seeMore);
navWindow.open();
