window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  const video = document.querySelector("video");

  if(scrollY > 500){
    video.style.filter = "blur(3px)";
  }else{
    video.style.filter = "blur(0px)";
  }

});