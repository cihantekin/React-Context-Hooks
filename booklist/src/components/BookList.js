import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails'

const BookList = () => {
    const {books, dispatch} = useContext(BookContext)

    return books.length ? ( 
        <div className="book-list">
            <ul>
                {books.map(book => {
                    return (<BookDetails book={book} key={book.id} />)
                })}
            </ul>
        </div>
     ) : (
         <div className="empty">
            Okunacak kitap bulunamadı !
         </div>
     );
}
 
export default BookList;