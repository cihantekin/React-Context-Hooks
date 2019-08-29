import React, { useState, useEffect } from 'react'
import uuid from 'uuid'
import NewSongForm from './NewSongForm';

const SongList = () => {
    //setSongs ile arrayi manipüle edebiliyoruz.
    const [songs, setSongs] = useState([
        { title: 'Seventh Son of a Seventh Son', id: 1 },
        { title: 'Trooper', id: 2 },
        { title: 'Run to the Hill', id: 3 },
    ]);

    const [age, setAge] = useState(10);

    //listenin üstüne direk eklemez, listenin aynısının bir kopyası alınır.
    const addSong = (title) => {
        setSongs([...songs, { title: title, id: uuid() }])
    }

    //veritabanı işlemlerinde falan kullanılıyor. Component yüklendiğinde ve yeniden render oldugunda çalışıyormuş.
    //hangi stateleri izlemek istediğimizi 2.parametre ile halledebiliyoruz
    //component içerisinde birden fazla kez kullanılabilir
    useEffect(() => {
        console.log("use effect hook", songs);
    }, [songs])

    useEffect(() => {
        console.log("use effect hook for age", age);
    }, [age])

    //Componentin propuna addSong listesini ekledik. NewSongForm Componentinde addSong metodu çalıştırılır.
    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (<li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={() => setAge(age + 1)}>Add 1 to Age: {age}</button>
        </div>
    );
}

export default SongList;