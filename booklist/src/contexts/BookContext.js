import React, {createContext, useState} from 'react'
import uuid from 'uuid/v1'
export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: "Yüzyıllık Yalnızlık" , author: "Gabriel Garcia Marquez" , id: 1},
        {title: "İçimizdeki Şeytan", author: "Sabahattin Ali" , id: 2},
        {title: "Kuyucaklı Yusuf" , author: "Sabahattin Ali", id: 3},
        {title: "Monte Cristo Kontu" , author: "Alexandre Dumas", id: 4}
    ]);

    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: uuid()}]);
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }

    return ( 
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;
