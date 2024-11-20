import ConditionalComponent from './basics/components/ConditionalComponent';
import Counter from './basics/components/Counter';
import Form from './basics/components/Form';
import Fruits from './basics/components/Fruits';
import Hello from './basics/components/Hello';
import Message from './basics/components/Message';
import InlineComponent from './todo-app/components/InlineComponent';
import Todo from './todo-app/components/Todo';

function App() {
  const person = {
    name: 'Rob',
    message: 'Hi there!',
    seatNumbers: [1, 4, 7],
  };

  return (
    <div className='App'>
      {/* <Todo /> */}
      <InlineComponent />
    </div>
  );
}

export default App;
