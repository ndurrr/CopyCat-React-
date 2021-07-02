// import CopyCat
import React from 'react';
import ReactDOM from 'react-dom';
import { CopyCat } from '../components/CopyCat';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};

// this is the container component class
class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);

    // add input to the state and set its initial value to an empty string
    this.state = { 
      copying: true,
      input: ''
    };

    this.toggleTape = this.toggleTape.bind(this);
    // bind handleChange in the constructor method
    this.handleChange = this.handleChange.bind(this);
  }

  toggleTape() {
    this.setState({copying: !this.state.copying})
  }

  /* write an event handler function called handleChange which takes the event e as an argument. 
    The function should update the state with <input>‘s value whenever it changes */
    
  handleChange(e) {
    this.setState({input: e.target.value})
  };
  

  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape;
    const value = this.state.input;
    const handleChange = this.handleChange;
    
    // pass copying and toggleTape as props to <CopyCat/>

    // also pass input and handleChange as props to <CopyCat>
    return (
    <CopyCat 
      copying={copying}
      toggleTape={toggleTape}
      value={value}
      handleChange={handleChange}
      name={"Ben"}
    />
    );
  };
}


ReactDOM.render(<CopyCatContainer />, document.getElementById('app'));