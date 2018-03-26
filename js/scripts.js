

$(document).ready(function(event) {
  $("form#wordplay-form").submit(function(event){

    event.preventDefault();
    var local= $("#sentence").val();
    var resultsArray = [];


    var newInput = local.split(" ");

    console.log(newInput);

    newInput.forEach(function(word) {
      console.log(word);
      if ( word.length >= 3 ) {
        resultsArray.push(word);
      };
    });

console.log(resultsArray);

    resultsArray.reverse();

    resultsArray.join();

    $("#results").text(resultsArray);

    $("#results").show();

  });
});
