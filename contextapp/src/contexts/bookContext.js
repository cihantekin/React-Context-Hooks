import React, {useState, createContext} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: "Yüzyıllık Yalnızlık" , id: 1},
        {title: "İçimizdeki Şeytan" , id: 2},
        {title: "Kuyucaklı Yusuf" , id: 3},
        {title: "Monte Cristo Kontu" , id: 4}
    ])
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;