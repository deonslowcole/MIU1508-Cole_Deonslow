Titanium.UI.setBackgroundColor('#fff');
//declare a variable for the home window
var homeWindow = Ti.UI.createWindow({
	title: "About Me",
	backgroundColor: "#FCD125"
});

//declare a nav window variable to hold the home window.
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: homeWindow
});

//declare a variable for the view.
var picBox = Ti.UI.createView({
	backgroundColor: "transparent",
	top: 0,
	height: 250,
	width: 250
});

//declare a variable for the image view.
var lion = Ti.UI.createImageView({
	image: "lion.png",
	top: picBox.top,
	height: "150%",
});

//declare a variable for a view for button
var seeMore = Ti.UI.createView({
	borderRadius: 10,
	backgroundColor: "#735826",
	top: picBox.height + 10,
	height: 70,
	left: 50,
	right: 50
});

//declare a variable for a label.
var seeText = Ti.UI.createLabel({
	color: "#d9d9d9",
	text: "Click here to learn about \n your classmate",
	font: {fontFamily: "Marker Felt", fontSize: 18, fontWeight: "Wide"},
	textAlign: "center", 
});

//declare a variable to require the second js page.
var theInfo = require("info");

//add the image view to the view, add the text label to view, add the two views to the home window.Open the nav window.
picBox.add(lion);
seeMore.add(seeText);
homeWindow.add(picBox, seeMore);
navWindow.open();
