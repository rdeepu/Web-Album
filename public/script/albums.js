var hgt = window.innerHeight;

var wdt = window.innerWidth;

alert(hgt);

var cnt = document.getElementsByClassName("cont");
cnt[0].style.height = hgt +"px";
cnt[0].style.width =  wdt + "px";