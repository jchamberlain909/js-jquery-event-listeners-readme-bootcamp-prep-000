//define functions here
function getIt(){
  $('p').on("click",(e)=>(alert("Hey!")));
}

function frameIt() {
  $('img').on('load',function (e){
    this.addClass("tasty")
  });
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();

});
