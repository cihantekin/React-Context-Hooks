import React, {createContext, useReducer, useEffect} from 'react'
import { BookReducer } from '../reducers/bookReducer';


export const BookContext = createContext();

const BookContextProvider = (props) => {
    //use reducer için üçüncü değer init
    const [books, dispatch] = useReducer(BookReducer,[], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : []; 
    });

    //state her değiştiğinde localstorage da 'books' keyi ile tutulan liste güncellenir
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books])
    return ( 
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;
