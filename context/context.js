import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

const url = process.env.API_URL;
const AppContext = createContext();

const AppProvider = ({ Children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  // Fetch Drinks from Api
  const fetchCocktails = useCallback(async () => {
    setLoading(true);
    try {
      const request = await fetch(`${url}${searchTerm}`);
      const { drinks } = await request.json();

      if (drinks) {
        const cocktails = drinks.map((drink) => {
          const { idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } =
            drink;
          return {
            id: idDrink,
            name: strDrink,
            info: strAlcoholic,
            glass: strGlass,
            image: strDrinkThumb,
          };
        });
        setCocktails(cocktails);
      } else {
        setCocktails([]);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  //   Runs when the page loads and when a search is triggered
  useEffect(() => {
    fetchCocktails();
  }, [searchTerm, fetchCocktails]);

  return (
    <AppContext.Provider value={{ loading, setSearchTerm, cocktails }}>
      {Children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
