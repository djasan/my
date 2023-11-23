import  React  from 'react'; 
import './App.css';
import { menuentries } from './menuentries.js';
import Menu from './components/Menu/Menu';
import Article from './components/Article/Article'
import Slider from './components/Slider/Slider';
const App = () => {
  const [state,setState]=React.useState(
    {
   'displayArticle' : false
  }
  )
  
  
    const handleDisplayArticle = () =>{
    setState({'displayArticle':!state.displayArticle})
  }
  
    {
     
      console.log(state.displayArticle)
    };
    return (
      <>
        <header>
          <Menu
            sendEntries={menuentries}
            handleDisplayArticle={handleDisplayArticle}
          ></Menu>
        </header>
        <main>
          <Slider></Slider>
          {state.displayArticle ? <Article></Article> : <></>}
        </main>
        <footer></footer>
      </>
    );
  };

  export default App;
