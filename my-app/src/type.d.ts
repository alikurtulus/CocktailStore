interface Ingredient{
    id:number,
    name:string,
    image:string,
    measure:string
}

interface ICocktail{
    id:number,
    title:string,
    description:string, 
    imageUrl:string, 
    category:string, 
    glassType:string, 
    isAlcoholic:boolean,
    ingredients:Ingredient[]

}

type CocktailState = {
    cocktails: ICocktail[]
}
type CoctailAction = {
    type:string, 
    cocktail:ICocktail
}

type DispatchType = (args: CoctailAction) => CoctailAction