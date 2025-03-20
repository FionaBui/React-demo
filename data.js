import pic1 from "./src/assets/pic1.png";
import pic2 from "./src/assets/pic2.png";
import pic3 from "./src/assets/pic3.png";
import pic4 from "./src/assets/pic4.png";

export const myData = [
  {
    image: pic1,
    title: "Components",
    desc: "Basic UI building blocks – combining multiple components to create an application.",
  },
  {
    image: pic2,
    title: "JSX",
    desc: "Combine HTML and JavaScript to create dynamic and powerful user interfaces.",
  },
  {
    image: pic3,
    title: "Props",
    desc: "Pass data into components to make them flexible and reusable.",
  },
  {
    image: pic4,
    title: "State",
    desc: "Data managed by React automatically updates the UI when changed.",
  },
];
export const EXAMPLES = {
  components: {
    title: "Components",
    desc: "Components are reusable UI blocks in React. They are designed to be independent and can be combined flexibly.",
    code: `
    function Greeting() {
      return (
        <div>
          <h1>Hello!</h1>
          <p>Welcome to React.</p>
        </div>
      );
    }
    `,
  },
  jsx: {
    title: "JSX",
    desc: "JSX allows for more readable UI code by using HTML-like syntax. It helps in building the UI quickly and efficiently.",
    code: `
    function Introduction() {
      return (
        <div>
          <h2>Introduction about React</h2>
          <p>React helps create modern and maintainable user interfaces.</p>
        </div>
      );
    }
    `,
  },
  props: {
    title: "Props",
    desc: "Props are a way to pass data between components in React. They make the UI customizable and flexible.",
    code: `
    function Profile({ name, age }) {
      return (
        <div>
          <h3>Profile</h3>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
        </div>
      );
    }
    `,
  },
  state: {
    title: "State",
    desc: "State allows components to manage dynamic data. It helps the UI respond flexibly to changes.",
    code: `
    function Switch() {
      const [on, setOn] = React.useState(false);

      function handleClick() {
        setOn((on) => !on);
      }

      return (
        <button onClick={handleClick}>
          {on ? 'On' : 'Off'}
        </button>
      );
    }
    `,
  },
};
