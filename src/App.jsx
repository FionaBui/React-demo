import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import {myData } from "../data"

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Key Concepts in React</h2>
          <ul>
            <MainContent {...myData[0]}/>
            <MainContent {...myData[1]}/>
            <MainContent {...myData[2]}/>
            <MainContent {...myData[3]}/>
            
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
