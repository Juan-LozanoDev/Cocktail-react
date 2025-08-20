import { useEffect, useState } from "react";
import { useParams, Link} from 'react-router-dom';
import Loading from '../components/Loading';
import '../styles/CocktailDetail.css'

function CocktailDetail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [cocktail, setCocktail] = useState(null);
    const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

    useEffect(() => {
        setLoading(true);
        async function getCocktail() {
            try {
                const response = await fetch(`${url}${id}`);
                const data = await response.json();
                const drink = data.drinks[0];
                if (drink) {
                    const {
                        strDrink: name,
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    } = drink;

                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    ];

                    const newCocktail = {
                        name,
                        image,
                        info,
                        category,
                        glass,
                        instructions,
                        ingredients
                    };
                    setCocktail(newCocktail);
                } else {
                    setCocktail(null);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        } getCocktail()
    }, [id]);

    console.log(cocktail);
    if(loading) {
      return <Loading />
    }

    if (!cocktail) {
      return (<div className="not-found-cocktail"><h2>No cocktail to display</h2></div>)
    } else {
      const {
        name,
        image,
        info,
        category,
        glass,
        instructions,
        ingredients
      } = cocktail

      return (
        <section className="cocktail-section">
          <Link to='/' className="btn-back-home">Back Home</Link>
          <h2>{name}</h2>
          <div className="cocktail-drink">
            <img src={image} alt={name} />
            <div className="cocktail-information">
              <p>
                <span className="drink-data">Name:</span>{name}
              </p>
              <p>
                <span className="drink-data">Category:</span>{category}
              </p>
              <p>
                <span className="drink-data">Info:</span>{info}
              </p>
              <p>
                <span className="drink-data">Glass:</span>{glass}
              </p>
              <p>
                <span className="drink-data">Ingredients:</span>{ingredients.map((ingredient, index) => {
                  return ingredient ? <span key={index} className="drink-ingredients">{ingredient} </span> : null
                })}
              </p>
              <p>
                <span className="drink-data">Instructions:</span>{instructions}
              </p>
            </div>
          </div>
        </section>
      )
    }
}

export default CocktailDetail;
