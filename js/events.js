//define functions here
function getIt(){
  $('p').on("click",(e)=>(alert("Hey!")));
}

function frameIt() {
  $('img').on('load', function (){
    $(this).addClass("tasty")

  });
}

function pressIt() {
  $("#typing").on("keydown", (e)=>
    {
      if(e.which===71){
        alert("G key pressed");
      }
    })
}

function submitIt() {

}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();

});
