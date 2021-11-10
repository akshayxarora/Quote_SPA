const quoteDisplay = document.getElementById("quotes");
let quoteArray = [];

let ctr = 0;
let ctrLength = 10;


fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
      quoteArray = data;
    printText(quoteArray);
}).then(
    document.getElementById('add-quotes').addEventListener('click',  function() { printText(quoteArray) })
)


function printText(quotes){
    for(;ctr < ctrLength; ctr++){
        quoteDisplay.innerHTML += `
        <blockquote class="blockquote shadow text-center" id="quote">
        <p class="mb-0">${quotes[ctr].text}</p>
        <footer class="blockquote-footer mt-2">${quotes[ctr].author}</footer>
      </blockquote>`;
    }
    ctrLength += ctr;
};


printText(quoteArray);