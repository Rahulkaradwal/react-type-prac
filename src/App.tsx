import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Todo items={['LEarn React', 'Learn TypeScript']} />
    </div>
  );
}

export default App;
