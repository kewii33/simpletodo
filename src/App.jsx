import './App.css';
import TodoList from './components/TodoList/TodoList';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="appTitle">정말 간단한 TodoList</div>
      </header>
      <div>
        <TodoList />
        <Footer />
      </div>
    </div>
  );
}
