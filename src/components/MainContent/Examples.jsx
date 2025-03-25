import { useState } from "react";
// Import data and example content from an external file
import { EXAMPLES } from "../../../data";
import TabButton from "../TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export  default function Examples (){
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
    return(
        <>
        <Section title="Examples" id="examples">
        {/* Menu with buttons to select different topics */}
        <Tabs
        ButtonContainer="menu" button={
          <>
          <TabButton
          isSelected={selectedTopic==="components"} onClick={()=>{handleSelect("components")}}>Components</TabButton>
        <TabButton
          isSelected={selectedTopic==="jsx"} onClick={()=>{handleSelect("jsx")}}>JSX</TabButton>
        <TabButton
          isSelected={selectedTopic==="props"} onClick={()=>{handleSelect("props")}}>Props</TabButton>
        <TabButton
          isSelected={selectedTopic==="state"} onClick={()=>{handleSelect("state")}}>State</TabButton></>
        }>
        {tabContent}
        </Tabs>

        {/* Display content based on the selected topic */}
        {/* 3.declare separate variables */}
        
      </Section>
        </>
    )
}