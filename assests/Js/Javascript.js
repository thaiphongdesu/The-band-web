//Slide
var index =0;
slider();
function slider(){
    var sliderList = document.getElementsByClassName('sliders');
    var i;
    for(i = 0; i < sliderList.length; i++){
        sliderList[i].style.display = 'none';
    }
    index++;
    if(index > sliderList.length){
        index = 1;
    }
    sliderList[index-1].style.display = 'block';
    setTimeout(slider,4000);
}
var header = document.getElementById('header');
var barMenu = document.getElementById('menu-bar');
var clientHeight = document.getElementById('header').clientHeight;
//Đóng mở mobile barmenu
barMenu.onclick = function(){
    var isClosed = header.clientHeight === clientHeight;
    if(isClosed){
        header.style.height = 'auto';
    }else{
        header.style.height = null;
    }
}
// Tự động đóng bar menu và fix bug sub menu
var menuList = document.querySelectorAll('#header #nav li a[href*="#"]');
for(var i = 0; i < menuList.length; i++){
    menuList[i].onclick = function(e){
        var isSubNav = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(!isSubNav){
            header.style.height = null;
            document.querySelector('.subnav').classList.remove('open');
        }else{
            e.preventDefault();
            this.nextElementSibling.classList.add('open');
        }
    }
}
