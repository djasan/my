
import './App.css';
import {menuentries} from './menuentries.js';
import Menu from './components/Menu/Menu';
const App = () => {
  return (
    <>
      <header>
        <Menu sendEntries ={menuentries} ></Menu>
      </header>
      <main></main>
      <footer></footer>

    </>
  );
}

export default App;
