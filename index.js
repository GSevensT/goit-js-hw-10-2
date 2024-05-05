import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedSeletEl = document.querySelector('.breed-select');
const catInfoEl = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');

//update

function chooseBreed() {
  fetchBreeds().then(data => {
    loaderEl.classList.replace('loader', 'is-hidden');

    let optionsMarkup = data
      .map(({ id, name }) => {
        return `<option value=${id}>${name}</option>`;
      })
      .join('');
    console.log(optionsMarkup);
    breedSeletEl.insertAdjacentHTML('beforeend', optionsMarkup);
    breedSeletEl.classList.remove('is-hidden');
  });
}

chooseBreed();

breedSeletEl.addEventListener('change', e => {
  //show loader
  loaderEl.classList.replace('is-hidden', 'loader');

  //hide select elem
  catInfoEl.classList.add('is-hidden');

  let breedId = e.target.value;

  fetchCatByBreed(breedId).then(data => {
    const { url, breeds } = data[0];
    //console.log(breeds);
    //return;
    const { name, description, temperament } = breeds[0];
    catInfoEl.innerHTML = `
    <img src=${url} alt=${name} width="400"/>
    <div>
    <h2>${name}</h2>
    <p>${description}</p>
    <p>${temperament}</p>
    </div>
    `;
    catInfoEl.classList.remove('is-hidden');
    loaderEl.classList.add('is-hidden');
    errorEl.classList.remove('is-hidden');
  });
});
