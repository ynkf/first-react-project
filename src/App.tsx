import ConditionalComponent from './components/basics/ConditionalComponent';
import Counter from './components/basics/Counter';
import Form from './components/basics/Form';
import Fruits from './components/basics/Fruits';
import Hello from './components/basics/Hello';
import Message from './components/basics/Message';

function App() {
  const person = {
    name: 'Rob',
    message: 'Hi there!',
    seatNumbers: [1, 4, 7],
  };

  return (
    <div className='App'>
      <Form />
    </div>
  );
}

export default App;
