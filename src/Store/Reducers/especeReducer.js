const initialState = { favoritesEspeces: [] }

function toggleEspece(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'TOGGLE_ESPECE':
                const favoriteEspeceIndex = state.favoritesEspeces.findIndex(item => item.id === action.value.id)
                if (favoriteEspeceIndex !== -1) {
                  // L'espece est déjà dans les favoris, on la supprime de la liste
                  nextState = {
                    ...state,
                    favoritesEspeces: state.favoritesEspeces.filter( (item, index) => index !== favoriteEspeceIndex)
                  }
                }
                else {
                  // L'espece n'est pas dans les favoris, on l'ajoute à la liste
                  nextState = {
                    ...state,
                    favoritesEspeces: [...state.favoritesEspeces, action.value]
                  }
                }
            return nextState || state
        default:
            return state
  }
}

export default toggleEspece