import './App.css';
import NovelForm from './components/NovelForm.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import GraphicNovelForm from './components/GraphicNovelForm';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Route exact path="/" component={Home} />
        <Route exact path="/Novel-Form" component={NovelForm} />
        <Route exact path="/Graphic-Novel-Form" component={GraphicNovelForm} />
      </div>
    </BrowserRouter>                   

  );
}

export default App;
