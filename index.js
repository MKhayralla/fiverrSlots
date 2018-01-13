$(document).ready(()=>{
  //adding the slots to the DOM :
  for (var i = 0; i < templates.length; i++) {
    var newDiv = $("<div></div>").text(templates[i].label);
    $("#slot").append(newDiv) ;
  }
  $("#description").hide();
  //initiating the slot machine :
  var machine = $("#slot").slotMachine( {
    active : 0 ,
    delay : 500
  } );
  //shuffle on hover :
  $("#logo").mouseenter(()=>{
    $("#description").hide();
    machine.shuffle() ;
    $("#image").html('<img src="assets/img/arrows.gif" class="img img-responsive arrows">');
  }) ;
  //stop on going away :
  $("#logo").mouseleave(()=>{
    $("#description").slideDown(500);
    machine.stop() ;
    $("#description").html(`${templates[machine.active].template}`)
    $("#image").html('<img src="assets/img/arrows2.png" class="img img-responsive arrows">');
  }) ;

}) ;
