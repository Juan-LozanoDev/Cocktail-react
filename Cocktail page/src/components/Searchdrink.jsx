import { useRef, useState } from "react";
import { useGlobalContext } from "../services/Context";
import "../styles/Searchdrink.css";

function Searchdrink() {
    const { setSearchTerm } = useGlobalContext();
    const newSearch = useRef('');
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        newSearch.current = e.target.value;
        setSearch(newSearch.current);
    };

    const handleNewSearch = (e) => {
        e.preventDefault();
        if (newSearch.current === '') {
            return
        } else {
            setSearchTerm(newSearch.current);
        }
    };

    return (
        <div className="search-drink">
            <form className="search-form" onSubmit={handleNewSearch}>
                <input type="text" onChange={handleSearch} name="search" placeholder={search === '' ? 'Ingresa una bebida' : ''}/>
                <button className="search-btn" type="submit">
                    Search
                </button>
            </form>
        </div>
    );
}

export default Searchdrink;
