// add 
$('a').click(function(){
  $('.section-hide').hide();
  var clicked = $(this).attr("href");
  $(clicked).show();
});

const pressMe = document.querySelector('#pressme')
const content = document.querySelector('#content')
const countdown = document.querySelector('#countdown')
let timer = 4, interval

pressMe.addEventListener('click', () => {
	content.innerHTML = "<a href='https://cdpn.io/pen/debug/wvQxodO?authentication_hash=dXAqBRZBQzWk' target='gracias'>Autor</a> <br> <a href='https://davidmiranda.info/'>User</a> <a href='' target='gracias'></a> <a href='' target='gracias'></a> <a href='' target='gracias'></a> <a href='' target='gracias'></a> <a href='' target='gracias'></a> <a href='' target='gracias'></a>  <br><iframe src='https://cdpn.io/pen/debug/wvQxodO?authentication_hash=dXAqBRZBQzWk' width='100%' height='500px' scrolling:'no' style='border:none' name='gracias'></iframe>"
	clearInterval(interval)
})

const simulateClick = new Event('click', {
	bubbles: true,
	cancelable: true
})

if (timer > 0) {
	interval = setInterval(()=>{
		countdown.innerHTML = timer
		timer--
		console.log(timer)
	},1000)
}

setTimeout(() => {
	pressMe.dispatchEvent(simulateClick)
}, 5000)

// see: https://gomakethings.com/how-to-simulate-mouse-and-keyboard-events-with-vanilla-js


// 
// saludo 

var thehours = new Date().getHours();
	var themessage;
	var morning = ('Buenos días');
	var afternoon = ('Buenas tardes');
	var evening = ('Buenas noches');

	if (thehours >= 0 && thehours < 12) {
		themessage = morning; 

	} else if (thehours >= 12 && thehours < 17) {
		themessage = afternoon;

	} else if (thehours >= 17 && thehours < 24) {
		themessage = evening;
	}

	$('.greeting').append(themessage);

// tabs 
    function openTab(TabName) {
      var i;
      var x = document.getElementsByClassName("Tab");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      document.getElementById(TabName).style.display = "block";  
    }
    //   Darkmode 

const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});

//


function openiTab(iTabName) {
  var i;
  var x = document.getElementsByClassName("iTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(iTabName).style.display = "block";  
}