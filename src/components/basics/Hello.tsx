const name = 'Rob';

function displayMessage() {
  return 'Wow';
}

//params are readonly
function Hello({ person }: any) {
  return (
    <div>
      <h1 className='Hello'>
        {person.message} {person.name} {person.seatNumbers}
      </h1>
    </div>
  );
}

export default Hello;
