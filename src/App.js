import Counter from "./components/Counter";
import ShowCount from "./components/ShowCount";
import Header from "./components/Header";
import Card from "./components/Card.jsx";
import "./styles/card.scss";
import "./styles/header.scss";


function App() {
  return (
    <div className="App">
      <Header/>
      <Card/>
    < Counter/>
    <ShowCount/>
    </div>
  );
}

export default App;
