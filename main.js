'use strict';

function getDogImage() {
    let userInput = $('input[type="number"]');
    let imageNumber = userInput.val();
    if (imageNumber >= 1 && imageNumber <= 50) {
      fetch('https://dog.ceo/api/breeds/image/random/' + imageNumber)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson));
    } else {
        alert('Please enter a number between 1 and 50');
    }
}

function displayResults(responseJson) {
  console.log(responseJson);
  $('.results-img').empty();
  for (let i = 0; i < responseJson["message"].length; i++){
  //replace the existing image with the new one
    var imageItem = document.createElement('img');
    imageItem.setAttribute("src", responseJson["message"][i]);
    console.log(imageItem)
    $('.results-img').append(imageItem);
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