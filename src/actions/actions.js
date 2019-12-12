export const addProfile = profile => ({
  type: 'ADD_PROFILE',
  name: profile.name,
  birth_year: profile.birth_year,
  gender: profile.gender,
  homeworld: profile.homeworld,
  species: profile.species
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter    
})

export const fetchProfiles = (callback) => {
  let url = "https://swapi.co/api/people/?page=";
  for (let i = 1; i <= 9; i++) {
    fetch(url + i)
      .then(res => res.json())
      .then(callback)
  }
} 
