import styles from './fooditem.module.css';

export default function FoodItem({
  food,
  setSelectedFoodId,
}: {
  food: any;
  setSelectedFoodId: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  return (
    <div className={styles.itemContainer}>
      <img
        className={styles.itemImage}
        src={food.image}
        alt={food.title + ' image'}
      />

      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>

      <div className={styles.itemButtonContainer}>
        <button
          className={styles.itemButton}
          onClick={() => {
            setSelectedFoodId(food.id);
          }}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
