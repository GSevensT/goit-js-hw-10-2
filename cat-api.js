const URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_Mun86OJyVolyhej5prwmi14eFf9mkJLC73BHCBq0ywaj7gx6278yISeKZigHHd83';

//FETCHES BREEDS

export function fetchBreeds() {
  return fetch(`${URL}/breeds`, {
    headers: {
      api_key: API_KEY,
    },
  }).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

//FETCHES CAT BREED

export function fetchCatByBreed(breedId) {
  return fetch(`${URL}/images/search?breed_ids=${breedId}`, {
    headers: {
      'x-api-key': API_KEY,
    },
  }).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
