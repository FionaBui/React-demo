import { useState } from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import {myData } from "../data"
import TabButton from "./components/TabButton";

function App() {
  const [selectedTopic, setSelectedTopic]= useState("Click a selection");
  function handleSelect (selectedButton){
    setSelectedTopic(selectedButton)
  }
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
            <TabButton onSelect={()=>{handleSelect("Components")}}>Components</TabButton>
            <TabButton onSelect={()=>{handleSelect("JSX")}}>JSX</TabButton>
            <TabButton onSelect={()=>{handleSelect("Props")}}>Props</TabButton>
            <TabButton onSelect={()=>{handleSelect("State")}}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </>
  );
}

export default App;
