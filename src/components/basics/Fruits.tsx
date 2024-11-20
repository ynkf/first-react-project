import Fruit from './Fruit';

export default function Fruits() {
  //   const fruits = ['apple', 'banana', 'orange', 'grapes', 'mango'];
  const fruits = [
    {
      name: 'apple',
      color: 'red',
      price: 1.99,
      soldout: false,
    },
    {
      name: 'banana',
      color: 'yellow',
      price: 1.5,
      soldout: true,
    },
    {
      name: 'orange',
      color: 'orange',
      price: 0.95,
      soldout: false,
    },
  ];

  return (
    <div>
      <ul>
        {fruits.map((f) => (
          <Fruit
            key={f.name}
            name={f.name}
            color={f.color}
            price={f.price}
            soldout={f.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
