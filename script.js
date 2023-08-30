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

function delListElement(element) {

}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleClassDoneOnAndOff);

delButton.addEventListener("click", delListElement);



// FROM STACK OVERFLOW...

 // if( event.target.classList.contains('done') ) {
 //    // add delete button
 //    const buttonElem = document.createElement('button');
 //    buttonElem.innerText = 'delete';
 //    buttonElem.onclick = function() { // remove list item here
 //        this.parentElement.remove()
 //    };
 //    event.target.appendChild(buttonElem);
// 	} else {
 //    // remove the delete button
 //    event.target.getElementByTagName('button').remove();

