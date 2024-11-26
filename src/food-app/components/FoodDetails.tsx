import { useEffect, useState } from 'react';

export default function FoodDetails({
  selectedFoodId,
}: {
  selectedFoodId: number | null;
}) {
  interface Food {
    title: string;
    image: string;
    readyInMinutes: number;
    vegetarian: boolean;
    vegan: boolean;
    servings: number;
    pricePerServing: number;
    analyzedInstructions: any[];
  }

  const [food, setFood] = useState<Food | null>(null);

  const URL = `https://api.spoonacular.com/recipes/${selectedFoodId}/information`;
  const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

  useEffect(() => {
    async function fetchFoodDetails() {
      if (!API_KEY) {
        console.error('API key not set');
        return;
      }

      if (!selectedFoodId) {
        return;
      }

      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
      console.log('data :', data);
    }
    fetchFoodDetails();
  });

  if (!selectedFoodId) {
    return <div>Select a food item</div>;
  }

  if (!food) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <h1>{food?.title}</h1>
        <img src={food?.image} alt={food?.title + ' image'} />
        <div>
          <span>
            <strong>{food?.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>Serves {food?.servings}</strong>
          </span>
          <span>{food?.vegetarian ? 'Vegetarian' : 'Non-Vegetarian'}</span>
          <span>{food?.vegan ? 'Vegan' : 'Non-Vegan'}</span>
        </div>
        <div>
          <span>{(food?.pricePerServing / 100).toFixed(2)} Per Serving</span>
        </div>
      </div>
    </div>
  );
}
