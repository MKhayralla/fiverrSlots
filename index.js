$(document).ready(()=>{
  var description = ['1','2','3','4','5','6'] ;
  var machine = $("#slot").slotMachine( {
    active : 1 ,
    delay : 200
  } );
  $("#machine").mouseenter(()=>{
    machine.shuffle() ;
    $("#image").html('<img src="assets/img/arrows.gif" class="img img-responsive arrows">');
  }) ;
  $("#machine").mouseleave(()=>{
    machine.stop() ;
    $("#description").html(`<h3>${description[machine.active]}</h3>`)
    $("#image").html('<img src="assets/img/arrows2.png" class="img img-responsive arrows">');
  }) ;

}) ;
