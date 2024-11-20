export default function Fruit({ key, name, color, price, soldout }: any) {
  return (
    //use fragments "<>" to wrap multiple elements without adding extra nodes to the DOM
    <>
      {price > 1 ? (
        <li key={key}>
          {color} {name} CHF {price} {soldout ? 'Sold out' : ''}
        </li>
      ) : (
        ''
      )}
    </>
  );
}
