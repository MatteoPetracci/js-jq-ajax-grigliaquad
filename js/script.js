// Griglia 6x6, ad ogni click sul quadrato parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.

$(document).ready(function() {
  $('.square').click(function() {
    var element = $(this)
    $.ajax ({
      'url' : 'https://flynn.boolean.careers/exercises/api/random/int',
      'method' : 'GET',
      'success' : function (data, stato) {
        var response = data.response;
        console.log(response);
        // numFive(response);
        if (response <= 5) {
          $(element).addClass('yellow');
          // $(element).append(response);
          $(element).html(response);
        } else {
          $(element).addClass('green');
          // $(element).append(response);
          $(element).html(response);
          
        }
      },
      'error' : function (richiesta, stato, errori) {
        alert("C'è stato un errore " + errori);
      }
    });
  });
});

// function numFive (number) {
//   if (number <= 5) {
//     console.log('minore o uguale di 5');
//   } else {
//     console.log('maggiore di 5');
//   }
// }
