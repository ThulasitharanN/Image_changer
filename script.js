var images=document.querySelectorAll(".scrollimage");
var mainImage=document.querySelector("#main-image");

for(var i=0;i<images.length;i++){
    images[i].addEventListener("click",function()
    {
mainImage.src=this.src
    });
}