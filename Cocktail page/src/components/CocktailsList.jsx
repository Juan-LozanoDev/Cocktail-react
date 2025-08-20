import { useGlobalContext } from "../services/Context";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import '../styles/CocktailsList.css'

function CocktailsList() {
    const { cocktails, loading } = useGlobalContext();

    if (loading) {
        return <Loading />;
    }

    if (cocktails < 1) {
        return <h2 className="cocktails-title">No cocktails matched with your search</h2>;
    }

    return (
        <section className="cocktails-section">
            <h2 className="cocktails-title">Cocktails</h2>
            <div className="list-of-cocktails">
                {cocktails.map((drink) => {
                    return <Cocktail key={drink.id} {...drink} />;
                })}
            </div>
        </section>
    );
}

export default CocktailsList;
