import Header from './components/Header';
import Todo from './components/Todo';

import './app.css';

export default function TodoApp() {
  return (
    <div className='App'>
      <Header />
      <Todo />
    </div>
  );
}
