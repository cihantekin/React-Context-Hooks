import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
    const { dispatch } = useContext(BookContext)
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_BOOK", book: { 
            title, author 
        }});
        setTitle(""); setAuthor("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="kitap adı" onChange={(e) => setTitle(e.target.value)} value={title} required />
            <input type="text" placeholder="yazar" onChange={(e) => setAuthor(e.target.value)} value={author} required />
            <input type="submit" value="Kaydet" />
        </form>
    );
}

export default NewBookForm;