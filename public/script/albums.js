var cntPht, cntAlbm, cntDot, init, trck;

$(document).ready(()=>{

  $('#tnailOne').click(()=>{
  init = 0;
  trck = 0;
  cntAlbm = document.getElementsByClassName("albm");
  cntPht = cntAlbm[trck].getElementsByClassName("photo");
  cntDot = cntAlbm[trck].getElementsByClassName("dot");
  cntAlbm[trck].style.zIndex = "3";
  cntPht[init].style.opacity = "1";  
  cntDot[init].style.borderColor = "red";
  });

  $('#tnailTwo').click(()=>{
  init = 0;
  trck = 1;
  cntAlbm = document.getElementsByClassName("albm");
  cntPht = cntAlbm[trck].getElementsByClassName("photo");
  cntDot = cntAlbm[trck].getElementsByClassName("dot");
  cntAlbm[trck].style.zIndex = "3";
  cntPht[init].style.opacity = "1";
  cntDot[init].style.borderColor = "red";
  
  });
    
  $('#tnailThree').click(()=>{
    init = 0;
    trck = 2;
    cntAlbm = document.getElementsByClassName("albm");
    cntPht = cntAlbm[trck].getElementsByClassName("photo");
    cntDot = cntAlbm[trck].getElementsByClassName("dot");
    cntAlbm[trck].style.zIndex = "3";
    cntPht[init].style.opacity = "1";
    cntDot[init].style.borderColor = "red";
  });

  $('#tnailFour').click(()=>{
  init = 0;
  trck = 3;
  cntAlbm = document.getElementsByClassName("albm");
  cntPht = cntAlbm[trck].getElementsByClassName("photo");
  cntDot = cntAlbm[trck].getElementsByClassName("dot");
  cntAlbm[trck].style.zIndex = "3";
  cntPht[init].style.opacity = "1";
  cntDot[init].style.borderColor = "red";
  });

  $('#tnailFive').click(()=>{
    init = 0;
    trck = 4;
    cntAlbm = document.getElementsByClassName("albm");
    cntPht = cntAlbm[trck].getElementsByClassName("photo");
    cntDot = cntAlbm[trck].getElementsByClassName("dot");
    cntAlbm[trck].style.zIndex = "3";
    cntPht[init].style.opacity = "1";
    cntDot[init].style.borderColor = "red";
  });

  $('#tnailSix').click(()=>{
    init = 0;
    trck = 5;
    cntAlbm = document.getElementsByClassName("albm");
    cntPht = cntAlbm[trck].getElementsByClassName("photo");
    cntDot = cntAlbm[trck].getElementsByClassName("dot");
    cntAlbm[trck].style.zIndex = "3";
    cntPht[init].style.opacity = "1";
    cntDot[init].style.borderColor = "red";
  });
 
});

function nxtClick() {
 
  if (init < cntPht.length - 1) {
    cntPht[init].style.opacity = "0";
    cntDot[init].style.borderColor = "white";
    init++;
    cntPht[init].style.opacity = "1";
    cntDot[init].style.borderColor = "red";
  } else {
    
  }
}

function prvClick() {
  if (init < 1) {
    
  } else {
    cntPht[init].style.opacity = "0";
    cntDot[init].style.borderColor = "white";
    init--;
    cntPht[init].style.opacity = "1";
    cntDot[init].style.borderColor = "red";
  }
}

function clsClick() {
  cntPht[init].style.opacity = "0";
  cntDot[init].style.borderColor = "white";
  cntAlbm[trck].style.zIndex = "1";
}
