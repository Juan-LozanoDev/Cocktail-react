import React, { useContext, useCallback, useEffect, useState } from "react";


const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('a');
    const [loading, setLoading] = useState(false);
    const [cocktails, setCocktails] = useState([]);

    const fetchData = useCallback( async () => {
        setLoading(true);
        try {
            const response = await fetch(`${url}${searchTerm}`);
            const data = await response.json();
            const { drinks } = data;
            if(drinks) {
                const newCocktails = drinks.map(item => {
                const {
                    idDrink,
                    strDrink,
                    strAlcoholic,
                    strDrinkThumb,
                    strGlass,
                } = item;



                return {
                    id: idDrink,
                    name: strDrink,
                    info: strAlcoholic,
                    image: strDrinkThumb,
                    glass: strGlass,
                }
            })
            setCocktails(newCocktails)
            } else {
                setCocktails([]);
            } 
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

    }, [searchTerm]);

    useEffect(() => {
        fetchData()
    }, [searchTerm])

    return (
        <AppContext.Provider value={{loading, cocktails, searchTerm, setSearchTerm}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }