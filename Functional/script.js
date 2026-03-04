let myList = document.getElementsByTagName("li");
var i;
for(i = 0; i < myList.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myList[i].appendChild(span);
}

document.addEventListener("DOMContentLoaded", function() {
  var list = document.getElementById('ulList');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
});

function checkEmpty() {
  var list = document.getElementById("ulList");
  var emptyMessage = document.getElementById("emptyMessage");

  if (list.getElementsByTagName("li").length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
  }
}

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Add more task if u want!");
  } else {
    document.getElementById("ulList").appendChild(li);
  }
  document.getElementById("input").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  var close = document.getElementsByClassName("close");

  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.remove();
        checkEmpty();
    }
  }

  checkEmpty();
}

/* Reflection Questions 
1. How does your application manage state?
- It uses an array to store all the tasks the array keeps the current data.

2. Why is renderTasks() necessary after updating the array?
- Because the screen not update automatically, renderTasks() shows the updated tasks.

3. What is event delegation and why is it efficient?
- It means adding one event listener to a parent instead of many childrens so that It saves alot of memory and works for new elements.

4. What happens if you manipulate the DOM but not the state?
- The data and screen will not match, which can cause problems in the app. */