let flag = 0; //[0,1,2,3]

function controller(x) { //-1
    flag = flag+x; //2=2+(-1)  2=2+(-1)/1
    slideshow(flag); //3
}

slideshow(flag); //2

function slideshow(num) {
    let slides = document.getElementsByClassName("slide");

    if (num == slides.length) {
        flag = 0;  
        num = 0;
    }

    if (num < 0) {
        flag = slides.length-1;
        num = slides.length-1;
    }

    for (let y of slides){
        y.style.display = "none";
    }
    slides[num].style.display = "block";
}