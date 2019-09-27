
function renderDogs(str) {
  $('#js-dogs').html(str);
}

function getDogs(numDogs) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numDogs}`)
    .then(response => response.json())
    .then(jsonString => getDogHtml(jsonString.message))
    .catch(e => console.log(e));
}

function getDogHtml(arrayDog) {
    
  let htmlString = '';
  for(let i = 0; i < arrayDog.length; i++) {
    console.log(arrayDog[i]);
    htmlString += `<img src="${arrayDog[i]}" class="dog-gallery" alt="Random image of dog"></img>`;
  }
  renderDogs(htmlString);
}

function handleFormSubmit() {
  $('#js-user-form').on('submit', e => {
    e.preventDefault();
    let input = $('#js-input').val();
    if (input <= 0) {
      alert('Too few dogs.');
    } else if (input > 50) {
      alert('Too many dogs');
    } else getDogs(input);
  });
}

function renderBreed(string) {
  $('#breed-pic').html(string);
}

function getBreedHtml(string, breed) {
  let imgString = '';
  console.log(string.message);
  if(string.status === 'success') {
    imgString = `<img id="#breedPic" src=${string.message} alt="Random image of ${breed}"></img>`;
    renderBreed(imgString);
  }
  else {
    throw(string);
  }
}

function getBreeds(input){
  fetch(`https://dog.ceo/api/breed/${input}/images/random`)
    .then(response => response.json())
    .then(jsonString => getBreedHtml(jsonString, input))
    .catch(e => alert(e.message));
}

function handleBreedSubmit() {
  $('#js-dog-breed').on('submit', e =>{
    e.preventDefault();
    let input = $('#breed-input').val();
    input.replace(' ', '-');
    getBreeds(input);
  });
}

function main() {
  handleFormSubmit();
  handleBreedSubmit();
}

$(main);