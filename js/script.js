// funzione che aggiunge elemento con la tastiera

$("#add-item").keydown(function(tastiera){
  if ( tastiera.which == 13 ) {
    var testo = $(this).val();

    if (testo != "") {
      var template = $(".template li").clone();
      template.prepend(testo);
      $(".lista").append(template);
      $(this).val("");
    } else {
      alert("Inserisci un elemento!");
    }
  }
 }
);

// funzione che aggiunge elemento con il bottone

$("#button-add").click(function() {

 var template = $(".template li").clone();
 var testo = $("#add-item").val();
  if (testo != "") {
   template.prepend(testo);
   $(".lista").append(template);
 } else {
   alert("Inserisci un elemento!");
  }
 }
);

// funzione che cancella elementi dalla lista

$(".lista").on("click", ".lista-delete", function() {
  $(this).parent().remove();
 }
);
