// import styles from styles.js

import React from 'react';
import { styles } from '../styles';

// import PropTypes
import PropTypes from 'prop-types';

// create a variable to hold images of the copycat and the quietcat
const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};

// export CopyCat
// this is the presentational component class
export class CopyCat extends React.Component {  
  render() {
    const { copying, value, toggleTape, handleChange, name } = this.props;
    
    // the render method is grabbing copying and toggleTape from the props
    
    // the component needs access to the copying state as well as the toggleTape method 
    // that now only exists in CopyCatContainer (see line 40 in CopyCatContainer.js)

    // set the <div> element’s style to divStyles. Use imgStyles for the <img/> element

    // Give <h1> a single style property: marginBottom: 80

    return (
      <div style={styles.divStyles}>

        {/* a condition is used immediately after “Copy Cat”. If a name is passed down in props, that name will be displayed. 
        If not, the name that will be displayed will default to “Tom” */}
        <h1 style= {{marginBottom: 80}}>Copy Cat {name || 'Tom'}</h1>

        {/* add a form - create an <input> element with three attributes: type, value, onChange 
        the values of value and onChange will be acquired from the props (see line 51 and 52 in CopyCatContainer.js)*/}
        <input 
            type='text'
            value={value}
            onChange={handleChange}
            />
        <img 
          style={styles.imgStyles}
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
        />

        {/* write a conditional to check the value of copying and decide whether or not to display value here. 
        If copying evaluates to true, value should show up. If copying evaluates to false, value should NOT show up */}

        <p>
        {copying && value}
        </p>
        
      </div>
    );
  };
}

{/* declare a propTypes property after the close of the component declaration. In the propTypes object, 
write one propType for each prop that CopyCat is expecting */}

//  each propType has an isRequired constraint

// a name prop is used to define the cat's name

CopyCat.propTypes = {
 copying: PropTypes.bool.isRequired,
 value: PropTypes.string.isRequired,
 toggleTape: PropTypes.func.isRequired,
 handleChange: PropTypes.func.isRequired,
 name: PropTypes.string.isRewquired
}