import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext';

//#region Class Component Hali
// class ThemeToggle extends Component {
//     static contextType = ThemeContext;
//     render() { 
//         const {toggleTheme} = this.context;
//         return ( <button onClick={toggleTheme}>Toggle the theme</button> );
//     }
// }
//#endregion

const ThemeToggle = () => {
    const {toggleTheme} = useContext(ThemeContext);
    return ( <button onClick={toggleTheme}>Toggle the theme</button>  );
}
 
export default ThemeToggle