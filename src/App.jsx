import PropTypes from "prop-types";
import logo from "./assets/logo-tuhoc.png";

import pic1 from "./assets/pic1.png"
import pic2 from "./assets/pic2.png"
import pic3 from "./assets/pic3.png"
import pic4 from "./assets/pic4.png"

function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="Tự Học" />
        <h1>React</h1>
        <p>
        Learn React – Explore how to build flexible, modern, and creative applications!
        </p>
      </header>
    </>
  );
}

function MainContent(props){
  return(
    <li>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </li>
  )
}

MainContent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string
} 

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Key Concepts in React</h2>
          <ul>
            <MainContent
            image ={pic1}
            title = "Components"
            desc = "Basic UI building blocks – combining multiple components to create an application."
            />
            <MainContent
            image ={pic2}
            title = "JSX"
            desc = "Combine HTML and JavaScript to create dynamic and powerful user interfaces."
            />
            <MainContent
            image ={pic3}
            title = "Props"
            desc = "Basic UI building blocks – combining multiple components to create an application."
            />
            <MainContent
            image ={pic4}
            title = "Components"
            desc = "Basic UI building blocks – combining multiple components to create an application."
            />
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
