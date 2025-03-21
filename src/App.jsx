// Import the useState hook to manage component state
import { useState } from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
// Import data and example content from an external file
import {myData, EXAMPLES } from "../data"
import TabButton from "./components/TabButton";

function App() {
  // Create a state variable 'selectedTopic' and a function 'setSelectedTopic' to update it
  // Initialize with "components" as the default value
  const [selectedTopic, setSelectedTopic]= useState();

  // Initialize tabContent variable with a default value of a text paragraph
  let tabContent = <p>Please click the button to select a topic</p>;
  // Check if `selectedTopic` has a value (i.e. the user has selected a topic)
  if(selectedTopic) {
    tabContent = (
      <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].desc}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
    )
  }

  // Function to handle button clicks and update 'selectedTopic' with the selected topic
  function handleSelect (selectedButton){
    setSelectedTopic(selectedButton)
  }
  return (
    <>
      {/* Render the Header component */}
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Key Concepts in React</h2>
          <ul>
            {/* Render the MainContent component and pass data using the spread operator */}
            <MainContent {...myData[0]}/>
            <MainContent {...myData[1]}/>
            <MainContent {...myData[2]}/>
            <MainContent {...myData[3]}/>
          </ul>
        </section>
        {/* Section displaying example topics */}
        <section id="examples">
          <h2>Examples</h2>

          {/* Menu with buttons to select different topics */}
          <menu>
            {/* Each button calls the handleSelect function with the corresponding topic */}
            <TabButton onSelect={()=>{handleSelect("components")}}>Components</TabButton>
            <TabButton onSelect={()=>{handleSelect("jsx")}}>JSX</TabButton>
            <TabButton onSelect={()=>{handleSelect("props")}}>Props</TabButton>
            <TabButton onSelect={()=>{handleSelect("state")}}>State</TabButton>
          </menu>

          {/* Display content based on the selected topic */}

          {/* 1.Use truthy falsy to display content */}
          {/* {selectedTopic? (
            <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].desc}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
          ) :
          <p>Please click the button to select a topic</p>
          } */}

          {/* 2.Use ternary to display content */}
          {/* {!selectedTopic && <p>Please click the button to select a topic</p>}
          {selectedTopic && (
            <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].desc}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
          )} */}

          {/* 3.declare separate variables */}
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
