// creo dei menu a comparsa tramite hover
// scompare se clicco fuori dal menu
// o passo su un'altra lista con menu hover
// ----------------------------
// in versione ridimensionata deve apparire
// un menu clicckando sul menuburger

$(document).ready(function(){

  var destri = $(".navigazione>ul>li>h3");
  var casper = $(".blocchetto");
  var burger = $(".burger");
  var chiudi = $(".chiudi");
  var menuburger = $(".menuburger");

  // i menu e l'opzione per chiudere l'hamburger
  // partono da invisibili
  casper.toggle();
  chiudi.toggle();

// gestisco la comparsa e scomparsa dei menu
  $(destri).mouseover(function(){
    $(casper).hide();
    $(this).siblings(casper).slideToggle();
  });

  // se l'utente clicca in giro i menu scompaiono
  $(document).click(function(){
    $(casper).hide();
  });

  //al click del burger apparizione di chiudi di menuburger
  $(burger).click(function(){
    $(chiudi).slideToggle();
    $(burger).slideToggle();
    $(menuburger).slideToggle(500);
  });

// al click di chiudi sparisce tutto
  $(chiudi).click(function(){
    $(burger).slideToggle();
    $(chiudi).slideToggle();
    $(menuburger).slideToggle(200);
  });

  });
