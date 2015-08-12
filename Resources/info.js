//set a function for the info page. 
var infoPage = function(){
	var infoWindow = Ti.UI.createWindow({
		title: "About Your Classmate",
	});
	
	//set an array for questions and answers.
	var myInfo =[
			{quest: "What is your name?", ans: "My name is Deonslow Cole (Deon for short)"},
			{quest: "What is your chat/username and host?", ans: "deoncole77 on hangouts"},
			{quest: "In which time zone do you reside?", ans: "Eastern Standard Time"},
			{quest: "Why are you in the Mobile Development Program?", ans: "To learn about a new and emerging industry in order to use my connections to build an app that can used by the masses."},
			{quest: "How comfortable are you with Javascript?", ans: "I'm very comfortable with Java. I just have to remember to do the little things so that it will not throw my entire page off."},
			{quest: "How comfortable are you with Appcelerator?", ans: "I'm getting use to Appcelerator. I like it a lot. It's a SDK that's very useful for developing since it is able to build everything for iOS, andriod and mobile web."},
			{quest: "Do you have any pets?", ans: "I have two dogs. A super playful and loveable Pitbull along with a super laid back Cockapoo."},
			{quest: "What's your favorite Movie?", ans: "A Christmas Story"},
			{quest: "What's your sport?", ans: "Baseball"},
			{quest: "What's a little known fact?", ans: "I won a trophy drag racing Mustang Cobras."},
			{quest: "What's your favorite movie character?", ans: "I'm a big Gozilla fan. All of the old japanese movies are the best. The 1998 version was pretty corny but the 2014 one made up for it."},
			];
			
	//declare a variable for the header.
	var infoHeader = Ti.UI.createView({
		height: 35,
	});
	
	//declare a variable for the header text.
	var infoText = Ti.UI.createLabel({
		text: "Information about your classmate",
		color: "#000",
		font: {fontFamily: "noteworthy", fontSize: 20}
	});
	
	//declare a variable for the footer.
	var infoFooter = Ti.UI.createView({
	});
	
	//declare a variable for the footer text.
	var infoFtext = Ti.UI.createLabel({
		text: "The interesteing things about your classmate.",
		color: "#000",
		font: {fontFamily: "noteworthy", fontSize: 12}
	});
	
	//add the text label to the header and footer.
	infoHeader.add(infoText);
	infoFooter.add(infoFtext);
	
	//declare a variable for the table view.
	var infoTable = Ti.UI.createTableView({	
	});
	
	//declare a variable for the table view section.
	var infoSection = Ti.UI.createTableViewSection({
		headerView: infoHeader,
		footerView: infoFooter,
	});
	
	//declare a function to open the answer page.
	var myAnsw = function(bioSource){
		var ansWindow = Ti.UI.createWindow({
			title: bioSource.title,
			font: {fontSize: 12}
		});
		
		//declare a variable for a view on the answer page.
		var infoView = Ti.UI.createView({
			top: 0,
			height: 100,
			left: 16,
			right: 16,
			//width: "auto"
	});
		//declare a variable for text.	
		var infoText = Ti.UI.createLabel({
			text: bioSource.desc,
			color: "#000",
			textAlign: "left",
			width: Titanium.UI.FILL,
			font: {fontFamily: "noteworthy", fontSize: 17}
		});
		
		//add text to the view and add the view to the window.
		infoView.add(infoText);
		ansWindow.add(infoView);
		
		navWindow.openWindow(ansWindow);
		
	};
	
	//declare a for loop for array
	for(var i=0, j=myInfo.length; i<j; i++){
		var infoRow = Ti.UI.createTableViewRow({
			title: myInfo[i].quest,
			desc: myInfo[i].ans,
			font: {fontFamily: "ariel", fontSize: 14},
			hasChild: true
		});
		infoSection.add(infoRow);	
	}
	
	//declare a variable to hold the section as an array
	var theInfoSection = [infoSection];
	
	//set the variable from the created array section to the table view. Data only accepts array types 
	infoTable.setData(theInfoSection);
	
	//set an event listener for event propagation to cut down on the amount of event listeners
	infoTable.addEventListener("click", function(event){
		myAnsw(event.source);
	});
	
	//add the table to the window and open the window as a navagation window.
	infoWindow.add(infoTable);		
	navWindow.openWindow(infoWindow);
};

//set an event listener to call the info page.
seeMore.addEventListener("click", infoPage);