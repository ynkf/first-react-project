import FoodItem from './FoodItem';

export default function FoodList({
  foodData,
  setSelectedFoodId,
}: {
  foodData: any[];
  setSelectedFoodId: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem
          key={food.id}
          food={food}
          setSelectedFoodId={setSelectedFoodId}
        />
      ))}
    </div>
  );
}
