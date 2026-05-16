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
        if(this.nextElementSibling.classList.contains("open"))
        {
            e.preventDefault();
            this.nextElementSibling.classList.remove("open");
        } else {
            e.preventDefault();
            this.nextElementSibling.classList.add("open");
        }
    }
}

// onclick copy phone number to clipboard 
document.getElementById("phone-number").addEventListener("click", function() {
    const phone_number = document.getElementById("phone-number").innerText;

    navigator.clipboard.writeText(phone_number).then(() => {
        const toast = document.getElementById("toast");
        toast.textContent = "Copied to clipboard!";
        toast.className = "show";
        setTimeout(() => {
            toast.className = toast.className.replace("show", "");
        }, 2000);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
});