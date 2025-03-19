import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import {myData } from "../data"
import TabButton from "./components/TabButton";

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </>
  );
}

export default App;
