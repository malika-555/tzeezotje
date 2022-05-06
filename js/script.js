"use strict"

// burger

const iconMenu = document.querySelector(".icon__menu");
if (iconMenu) {
  const menuBody = document.querySelector(".menu__body");
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    
      
});
}

// popup

var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var btn1 = document.getElementById('myBtn1');
var btn2 = document.getElementById('myBtn2');
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
btn1.onclick = function () {
    modal.style.display = "block";
}
btn2.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// бегущие числа

const time = 4000; // ms
const step = 1; 

function outNum(num, elem) {
	let l = document.querySelector('#' + elem);
	let n = 0;
	let t = Math.round(time/(num/step));
	let interval = setInterval(() => {
		n = n + step;
		if (n == num) {
			clearInterval(interval);
		}
		l.innerHTML = n;
	},
		t);
}



function onEntry(entry) {
	entry.forEach(change => {
	  if (change.isIntersecting) {
		outNum(15, 'num-1');
        outNum(125, 'num-2');
        outNum(968, 'num-3');
        outNum(1056, 'num-4');
	  }
	});
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.advantages');
  for (let elm of elements) {
	observer.observe(elm);
  }