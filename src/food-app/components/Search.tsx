import { useEffect, useState } from 'react';

import styles from './search.module.css';

const URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

export default function Search({
  foodData,
  setFoodData,
}: {
  foodData: any[];
  setFoodData: any;
}) {
  const [query, setQuery] = useState('pizza');

  useEffect(() => {
    async function fetchFood() {
      if (!API_KEY) {
        console.error('API key not set');
        return;
      }

      const res = await fetch(`${URL}?apiKey=${API_KEY}&query=${query}`);
      const data = await res.json();
      console.log('data :', data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
