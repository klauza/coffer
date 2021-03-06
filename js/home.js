// Home State
export const homeState = function() {
  
  
  document.querySelector('#heading').textContent = '';
  document.querySelector('#content').innerHTML = `
  <div class="container home-page">
    <h2 class="text-center" id="home-title">Home</h2>
    <p class="text-center" id="title">Welcome to my sandbox <br/>
    The content of this project is not important <br/>
    Go to <strong>about</strong> page to learn more</p> 
    <div class="image-div"><img src="${location.origin}/media/main.jpg" /></div>
  </div>
  `;

  DomLoad; // init animations

};



const DomLoad = document.addEventListener('DOMContentLoaded', () => {

  // starting layout
  document.body.style.backgroundColor = "white";

  document.querySelector('.navbar').style.transform = "translateY(-100px)";
  
  document.querySelector('#home-title').style.transform = "translateX(-100px)";
  document.querySelector('#home-title').style.opacity = "0";

  document.querySelector('#title').style.transform = "translateX(-100px)";
  document.querySelector('#title').style.opacity = "0";

  document.querySelector('.image-div').style.transform = "translateY(70px)";
  document.querySelector('.image-div').style.opacity = "0";



  // 500ms delay
  setTimeout(function(){
    document.body.style.transition = "150ms all ease-in"
    document.body.style.backgroundColor = "white";


    const navbarCss = `
      transform: translatey(0);
      transition: 1s all ease-in-out;
      transition-delay: 500ms;
    `;
    document.querySelector('.navbar').style.cssText = navbarCss;


    const headerCss = `
      transform: translatex(0);
      opacity: 1; 
      transition: 200ms all ease-in-out;
    `;
    document.querySelector('#home-title').style.cssText = headerCss;


    const titleCss = `
      transform: translatex(0);
      opacity: 1;
      transition: 200ms all ease-in-out;
      transition-delay: 500ms;
    `;
    document.querySelector('#title').style.cssText = titleCss;

    const pictureCss = `
      transform: translateY(0);
      opacity: 1;
      transition: 600ms all ease-in-out;
      transition-delay: 850ms;
    `;
    document.querySelector('.image-div').style.cssText = pictureCss;
  }, 500);
  console.log('Dom start');
})