
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
        htmlString += `<img src="${arrayDog[i]}" alt="Random image of dog"></img>`;
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

function main() {
    handleFormSubmit();
}

$(main);