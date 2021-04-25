import './App.css';
import { Button } from 'react-bootstrap';
import News from './Components/News/News';
import Header from './Components/Header/Header';
import TopHeadline from './Components/TopHeadline/TopHeadline';

function App() {
  return (
    <div className="app">
      <h1>React Bootstrap</h1>
      <Header></Header>
      <TopHeadline></TopHeadline>
    </div>
  );
}

export default App;
