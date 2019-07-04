'use strict';

function getDogImage() {
    let userInput = $('input[type="number"]');
    let imageNumber = userInput.val();
    fetch('https://dog.ceo/api/breeds/image/random/' + imageNumber)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));
}

function displayResults(responseJson) {
  console.log(responseJson);
  for (let i = 0; i < responseJson.length; i++){
  //replace the existing image with the new one
  /*$('.results-img').replaceWith(
    `<img src="${responseJson[i]}" class="results-img">`*/
    var imageItem = document.createElement('img');
    imageItem.src = responseJson[i]; //Should add the Json image from the array pulled 
    imageItem.addClass('results-img')
    $('results-img').appendChild(imageItem);
}
  //display the results section
  console.log('Who let the dogs out?!');
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
