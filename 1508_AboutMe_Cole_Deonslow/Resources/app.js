Titanium.UI.setBackgroundColor('#000');

var homeWindow = Ti.UI.createWindow({
	title: "All About Me",
	backgroundColor: "#FCD125"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: homeWindow
});


navWindow.open();
