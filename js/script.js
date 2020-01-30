// Griglia 6x6, ad ogni click sul quadrato parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.

$(document).ready(function() {
  $('.square').click(function() {
    $.ajax ({
      'url' : 'https://flynn.boolean.careers/exercises/api/random/int',
      'method' : 'GET',
      'success' : function (data, stato) {
        var response = data.response;
        console.log(response);
      },
      'error' : function (richiesta, stato, errori) {
        alert("C'è stato un errore" + errori);
      }
    });
  });
});
