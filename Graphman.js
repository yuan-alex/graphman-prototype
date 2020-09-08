function GraphmanWriteData () {
	var data, http, url, params
	// OVERWRITE SERVER DATA
	data = Calc.getState();
	http = new XMLHttpRequest();
	url = "your-url";
	params = 'data=' + encodeURIComponent(JSON.stringify(data));
	http.open('POST', url, true);
	http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	http.send(params);
	return true;
}
function GraphmanReadData() {
	var getRequest, url, data
	// GET SERVER DATA
	getRequest = new XMLHttpRequest();
	url = "your-url";
	getRequest.open('GET', url, false);
	getRequest.send();
	if (getRequest.status === 200) {
		data = JSON.parse(getRequest.responseText);
		Calc.setState(data);
	}
	return true;
}

// BUTTON: override server data
var uploadButton = document.createElement("button");
uploadButton.textContent = "Upload to Server";
uploadButton.onclick = function() {
	GraphmanWriteData();
}
var x = document.getElementsByClassName("dcg-if-user");
x[0].appendChild(uploadButton);


// BUTTON: replace local with server
var replaceLocalButton = document.createElement("button");
replaceLocalButton.textContent = "Refresh Local with Server";
replaceLocalButton.onclick = function() {
	GraphmanReadData();
}

x[0].appendChild(replaceLocalButton);