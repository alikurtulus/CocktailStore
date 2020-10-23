import * as actionTypes from "./actionTypes"

export function addCocktail(cocktail: ICocktail) {
  const action: CoctailAction = {
    type: actionTypes.ADD_COCKTAIL,
    article,
  }

  return simulateHttpRequest(action)
}

export function removeArticle(article: IArticle) {
  const action: CoctailAction = {
    type: actionTypes.REMOVE_ARTICLE,
    article,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: CoctailAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}