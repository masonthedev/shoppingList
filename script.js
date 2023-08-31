var button = document.getElementById("enter_btn");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var delButton = document.getElementById("delete_btn");

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick(){
	if (inputLength() > 0){
		createListElement();
	}
}

function addListAfterKeypress(event){
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleClassDoneOnAndOff(task) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");       
    } 
}

function deleteCompletedItems() {
    var listItems = document.querySelectorAll(".done");
    listItems.forEach(function(item) {
        item.remove();
    });
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleClassDoneOnAndOff);

delButton.addEventListener("click", deleteCompletedItems);