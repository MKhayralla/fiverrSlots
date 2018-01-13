$(document).ready(()=>{
  $("#description").hide();
  var description = ['1','2','3','4','5','6'] ;
  var machine = $("#slot").slotMachine( {
    active : 0 ,
    delay : 500
  } );
  $("#logo").mouseenter(()=>{
    $("#description").hide();
    machine.shuffle() ;
    $("#image").html('<img src="assets/img/arrows.gif" class="img img-responsive arrows">');
  }) ;
  $("#logo").mouseleave(()=>{
    $("#description").show();
    machine.stop() ;
    $("#description").html(`<h3>${description[machine.active]}</h3>`)
    $("#image").html('<img src="assets/img/arrows2.png" class="img img-responsive arrows">');
  }) ;

}) ;
