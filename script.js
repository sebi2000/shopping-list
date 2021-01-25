var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

var lists = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));

	var but = document.createElement("button");
	console.log(but);
	but.classList.add("del");

	but.appendChild(document.createTextNode("Delete"));

	li.appendChild(but);
	ul.appendChild(li);
	input.value = "";
	console.log(document.querySelectorAll(".del"));
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress)

/*var delButton = document.getElementByClassName(".del");
var array = document.querySelectorAll(".del");
var li = array[1].parentNode;
li.remove();
console.log(array);*/


/*delButton.addEventListener("click", function(){
	var li = this.parentNode;
	/*delButton.parentNode
	li.remove();
})*/


document.querySelectorAll(".del").forEach(item => {
	item.addEventListener("click", function() {
		var li = item.parentNode;
		li.remove();

	})
})
