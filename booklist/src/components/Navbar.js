import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext);
    return (
        <div className="navbar">
            <h1>Cihan'ın Okuma Listesi</h1>
            <p>Okunacak {books.length} adet kitap bulunmakta !</p>
        </div>
    );
}

export default Navbar;