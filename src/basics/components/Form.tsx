import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState({ firstName: '', lastName: '' });

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault(); // prevents the page from refreshing
    console.log(name);
  }

  return (
    <div>
      {name.firstName} {name.lastName}
      <form>
        <input
          onChange={(event) =>
            setName({ ...name, firstName: event.target.value })
          }
          type='text'
          value={name.firstName}
        />
        <input
          onChange={(event) =>
            setName({ ...name, lastName: event.target.value })
          }
          type='text'
          value={name.lastName}
        />
        {/* //button in form automatically submits the form. the data is then */}
        {/* //submitted and the page is refreshed */}
        <button onClick={(event) => handleSubmit(event)}>Add</button>
      </form>
    </div>
  );
}
