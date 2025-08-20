import CocktailsList from "../components/CocktailsList";
import Searchdrink from '../components/Searchdrink'

function Home() {
    return (
        <main>
            <Searchdrink></Searchdrink>
            <CocktailsList />
        </main>
    );
}

export default Home;
