import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/themeContext';
import { BookContext } from '../contexts/bookContext';

//#region Class Component hali
// class BookList extends Component {
//     //Functionalda kullanılamıyor bu şekilde
//     static contextType = ThemeContext;
//     render() {
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;
//         return (
//             <div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
//                 <ul>
//                     <li style={{background: theme.ui}}>the way of kings</li>
//                     <li style={{background: theme.ui}}>the name of wind</li>
//                     <li style={{background: theme.ui}}>the final empire</li>
//                 </ul>
//             </div>
//         );
//     }
// }
 //#endregion

const BookList = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark;
    const {books} = useContext(BookContext);
    
    return(
         <div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
                <ul>
                    {books.map(book => {
                        return(<li key={book.id} style={{background: theme.ui}}>{book.title}</li>)
                    })}
                </ul>
            </div>
    )
}

export default BookList;
