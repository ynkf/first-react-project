import { useState } from 'react';
import Search from './components/Search';
import FoodList from './components/FoodList';
import Nav from './components/Nav';

import './food-app.css';
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';
import FoodDetails from './components/FoodDetails';

export default function FoodApp() {
  interface Food {
    id: number;
    title: string;
  }

  const [foodData, setFoodData] = useState<Food[]>([]);
  const [selectedFoodId, setSelectedFoodId] = useState<number | null>(null);

  return (
    <div>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setSelectedFoodId={setSelectedFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails selectedFoodId={selectedFoodId ?? foodData[0]?.id} />
        </InnerContainer>
      </Container>
    </div>
  );
}
