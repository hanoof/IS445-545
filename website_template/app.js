
var messages = [
    'message 01',
    'message 02',
    'message 03',
    'message 04',
    'message 05',
];

window.onload = displayMenu("");

function displayMenu(){
	var menu = "Choose an option \n1: Show messages\n2: Add a message\n3: Delete a message\n0: Quite";
	var response = prompt(menu)
	if (response  == null) return;
	console.log(response);
	switch (response) {
		case "1":
			displayMessages();
			break;
		case "2":
			addMessage();
			break;
		case "3":
			deleteMessage("");
			break;
		case "0":
			quite();
			break;
		default:
			const output = document.getElementById("output");
			output.innerHTML = "Please refresh and select a correct command"
			break;
	}
}


function displayMessages(){
	var initialMessages = "";
	for (var i=1; i <= messages.length; i++){
		initialMessages += i + ": " + messages[i-1] + "<br />";
	}
	const output = document.getElementById("output");
	output.innerHTML = initialMessages
}

function addMessage(){
	var addMessageMenu = "Enter a new message \n";
	var response = prompt(addMessageMenu)
	messages.push(response);
	displayMessages();
}

function deleteMessage(){
	var deleteMessageMenu = "Enter a message index (1 to " + messages.length +") \n";
	var index = prompt(deleteMessageMenu)
	if (index > 0 && index <= messages.length) {
		messages.splice(index - 1, 1);
		displayMessages();
	} else {
		const output = document.getElementById("output");
		output.innerHTML = "Please refresh and select a correct command"
	}
}

function quite(){
	const output = document.getElementById("output");
	output.innerHTML = "Good Bye"
}