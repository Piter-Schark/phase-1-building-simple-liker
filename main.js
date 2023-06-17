// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let likeButtons = document.querySelectorAll(".like-glyph")

// Your JavaScript code goes here!


function clickLikeButtons(e){
 
    
      const heart = e.target
      console.log (heart)
      mimicServerCall("bogusUrl")
      .then(function () {
        if (heart.innerText === EMPTY_HEART){
          heart.innerText = FULL_HEART
          heart.className = "activated-heart"
        console.log ("empty to full") 
        }
        else {
          heart.innerText = EMPTY_HEART
          heart.className = ""
          console.log ("full to empty")
        }})
  
     .catch((error) => {
     document.getElementById("modal").className = ""
     setTimeout(function(){
      document.getElementById("modal").className = "hidden" 
     },3000);
     return error
    })
    
  
}

for (let btn of likeButtons){
btn.addEventListener('click',(clickLikeButtons) )
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
