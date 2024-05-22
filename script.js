const images = document.querySelectorAll(".headerslider ul img");
const previmg = document.getElementById("previousbtn");
const nextimg = document.getElementById("nextbtn");

let n = 0;

const changeslide = () =>{
    for(let i = 0; i < images.length; i++){
        images[i].style.display = "none";
    }
    images[n].style.display = "block";
}

previmg.addEventListener("click", () => {
    if(n > 0 ){
        n--;
    } else {
        n = images.length -1;
    }
    changeslide();
});

nextimg.addEventListener("click", () => {
    if (n < images.length -1 ){
        n++;
    } else {
        n = 0;
    }
    changeslide();
});

// Scrollbar
const scrollcontainer = document.querySelectorAll(".product");
for (let item of scrollcontainer){
    item.addEventListener("wheel", (e) => {
        e.preventDefault();
        item.scrollLeft += e.deltaY;
    });
}