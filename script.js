var w = window.innerWidth;
var h = window.innerHeight;
if(w <= 1100){
    document.getElementById("topnav").style.display = "none";
    document.getElementById("sidenav").style.display = "block";
    document.getElementById("myname").style.textTransform = "uppercase";
}
else{
    document.getElementById("topnav").style.display = "block";
    document.getElementById("sidenav").style.display = "none";
}