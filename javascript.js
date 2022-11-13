function play() {//Link Audio Bisa Diganti
var audio = new Audio('https://www.mboxdrive.com/[MV]%20%EC%A7%80%EB%AF%BC(Jimin)%20X%20%ED%95%98%EC%84%B1%EC%9A%B4(Ha%20Sung-Woon)%20-%20With%20you%20%EC%9A%B0%EB%A6%AC%EB%93%A4%EC%9D%98%20%EB%B8%94%EB%A3%A8%EC%8A%A4(Our%20Blues)%20OST%20Part%204.mp3');audio.play();audio.loop=true;audio.addEventListener('ended', function() {this.currentTime = 0;this.play();}, false);}    

function preview() {
				document.getElementById('prvw').style.display='none'
document.getElementsByTagName('body').style.display='block'
} 
     
function lok() {
window.location='https://www.google.com/maps/place/G874%2BRMJ+Inah+Tailor,+Jl.+Letnan+Joni+Gg.+Dariah,+Jatibarang+Baru,+Kec.+Jatibarang,+Kabupaten+Indramayu,+Jawa+Barat+45273,+Indonesia/@-6.485417,108.306664,14z/data=!4m2!3m1!1s0x2e6ec7206ad3e2af:0xb7b79a3f90da9d62?hl=en&gl=US';
}

function cover() {
document.getElementById("cover").scrollIntoView("cover")}
function mempelai() {
document.getElementById("mempelai").scrollIntoView("mempelai")}
function acara() {
document.getElementById("acara").scrollIntoView("acara")}
function hadiah() {
document.getElementById("hadiah").scrollIntoView("hadiah")}
function lokasi() {
document.getElementById("lokasi").scrollIntoView("lokasi")
      }
      
      
     function copyText() {  
    var copyText = document.getElementById("text-copy");  
    copyText.select();  
    document.execCommand("copy");
}
function copyText1() {  
    var copyText = document.getElementById("text-copy1");  
    copyText.select();  
    document.execCommand("copy");
				
}
function copyText2() {  
    var copyText = document.getElementById("text-copy2");  
    copyText.select();  
    document.execCommand("copy");
				
}
function copyText3() {  
    var copyText = document.getElementById("text-copy3");  
    copyText.select();  
    document.execCommand("copy");
				
}
  
		var countDownDate = new Date("Nov 18, 2022 08:00:00").getTime();
	
  var x = setInterval(function() {
  
  var now = new Date().getTime();
  var tomorrow = new Date(countDownDate)
tomorrow.setDate(tomorrow.getDate() + 1);
  var OneDay = now

  var distance = countDownDate - now;
  
document.getElementById("D").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
document.getElementById("H").innerText =  Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
document.getElementById("M").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
document.getElementById("S").innerText = Math.floor((distance % (1000 * 60)) / 1000);
  
  if (distance < 0) {
    clearInterval(x);
document.getElementById("cdn").innerHTML = "This day is my day!";
    document.getElementById("tm").style.display = "none" ;
    document.getElementById("cd").style.display = "none" ;

  }
  if (OneDay > tomorrow) {
    clearInterval(x);
document.getElementById("cdn").innerHTML = "Sorry the event has passed!";
     document.getElementById("tm").style.display = "none" ;
document.getElementById("cd").style.display = "none" ;

  }
}, 1000);
