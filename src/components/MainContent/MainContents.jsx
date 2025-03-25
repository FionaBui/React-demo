import MainContent from "./MainContent.jsx";
import {myData,} from "../../../data.js"
import Section from "./Section.jsx";

export default function Maincontents (){
    return(
        <Section title="Key Concepts in React" id="core-concepts">
            <ul>
                {myData.map((item)=> (
                    <MainContent key={item.title} {...item}/>
                ))}
            </ul>
        </Section>
    )
}