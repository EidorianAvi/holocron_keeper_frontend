import './App.css';
import NovelForm from './components/NovelForm.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/NavBar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route exact path="/" component={NovelForm}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
