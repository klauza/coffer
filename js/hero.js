// import hero/subpage link events
import { storeAtag } from './App.js';
import { storeBtag } from './App.js';


// Contact State
export const heroState = function(page) {
  
  document.querySelector('#heading').textContent = '';
  
  // inject loader on page init
  const injectLoader = `
  <div class="container">
    <img class="centered" style="text-align:center;" src="https://www.airport-budapest.info/images/loading.gif" />
  </div>
  `;
  

  loader(storeAtag)
    .then(res => console.log(res) )
    .catch(err => console.log(err));



  // LOADER
  async function loader(storeAtag){
    
    const promise = new Promise((resolve, reject) => {
        document.querySelector('#content').innerHTML = injectLoader;  // Puts loader at start
        

        let objImg = new Image();           // init Image [biggest one]
        objImg.src = '../media/3.jpg';   // init src of Image
        
        objImg.onload = function() {        // when image is loaded.. show the page

    
        // prevent from loading #hero page into another state
        document.querySelector('#home').addEventListener('click', function(){
          clearTimeout(loadHeroAnimation);
        });
        document.querySelector('#about').addEventListener('click', function(){
          clearTimeout(loadHeroAnimation);
        });


        // PAGE LOADED!
        var loadHeroAnimation = setTimeout(function(){   // minimum time for spinner
          console.log('Hero loaded');
          
          // Inject Dom
          animateAndInjectHeroPage();

          // Card links
          const cardOne = document.getElementById('card-1');  
          const cardTwo = document.getElementById('card-2');  
          
          cardOne.addEventListener('click', (e) => {
            storeAtag.click();
            e.preventDefault();
          })
          cardTwo.addEventListener('click', (e) => {
            storeBtag.click();
            e.preventDefault();
          })

        }, 450); 

      }
    });

    const error = false;

    if(!error){
      const res = await promise;  // Wait until the promise is resolved
      return res;
    } else {
      await Promise.reject(new Error('something went wrong'));
    }
  }


  // ANIMATION entry on page init
  const animateAndInjectHeroPage = () => {

    injectDom();

    document.querySelector('#content').style.transform = 'translateY(100px)';
    document.querySelector('#content').style.opacity = '0';
    document.querySelector('#content').style.transition = 'none';

    setTimeout(function(){
      document.querySelector('#content').style.opacity = '1';
      document.querySelector('#content').style.transform = 'translateX(0)';
      document.querySelector('#content').style.transition = '500ms all ease';

    }, 50);
  }


  // DOM FUNCTION INJECT
  const injectDom = function(){
  
    document.querySelector('#content').innerHTML = `
    <div class="container hero-main">

      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4 text-center">Single hero pages</h1>
          <p class="lead text-center">This is a collection of hero single pages</p>
        </div>
      </div>

      <div class="row">
        <div class="col-sm mt-2">
          <div class="card col-sm">
            <img src="${location.origin}/media/3.jpg" class="mt-2 card-img-top img-test-1" alt="pic1">
            <div class="card-body">
              <p class="card-text">Made with significant amount of opacity and transform animations</p>
              <button id="card-1" class="hero-link btn btn-outline-success" type="button">See prototype</button>
            </div>
          </div>
        </div>

        <div class="col-sm mt-2">
          <div class="card col-sm">
            <img src="${location.origin}/media/pic2-hero.jpg" class="mt-2 card-img-top" alt="pic2">
            <div class="card-body">
              <p class="card-text">Stars, the universe filler</p>
              <button id="card-2" class="hero-link btn btn-outline-success" type="button">See prototype</button>
            </div>
          </div>
        </div>
        
        <div class="col-sm mt-2">
          <div class="card col-sm">
            <img src="${location.origin}/media/pic3-hero.jpg" class="mt-2 card-img-top" alt="pic3">
            <div class="card-body">
              <p class="card-text">Here is hero page inspired by microsoft leader John Wick</p>
              <button id="card-3" class="hero-link btn btn-outline-success" type="button">See prototype</button>
            </div>
          </div>
        </div>
        
        <div class="col-sm mt-2">
          <div class="card col-sm">
            <img src="${location.origin}/media/in-progress.jpg" class="mt-2 card-img-top" alt="pic4">
            <div class="card-body">
              <p class="card-text">In progress...</p>
              <button id="card-3" disabled class="hero-link btn btn-outline-secondary" type="button">See prototype</button>
            </div>
          </div>
        </div>
        
        <div class="col-sm mt-2">
          <div class="card col-sm">
            <img src="${location.origin}/media/in-progress.jpg" class="mt-2 card-img-top" alt="pic5">
            <div class="card-body">
              <p class="card-text">In progress...</p>
              <button id="card-3" disabled class="hero-link btn btn-outline-secondary" type="button">See prototype</button>
            </div>
          </div>
        </div>
        
        <div class="col-sm mt-2">
          <div class="card col-sm">
            <img src="${location.origin}/media/in-progress.jpg" class="mt-2 card-img-top" alt="pic6">
            <div class="card-body">
              <p class="card-text">In progress...</p>
              <button id="card-3" disabled class="hero-link btn btn-outline-secondary" type="button">See prototype</button>
            </div>
          </div>
        </div>
      </div>
        
    </div>
    `;
    
  }

};


