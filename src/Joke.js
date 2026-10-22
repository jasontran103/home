import React, { useState, useEffect } from 'react';

function Joke() {
    const [joke, setJoke] = useState({});

    useEffect(() => {
        // fetch('https://official-joke-api.appspot.com/random_joke')
        fetch('https://localhost:3005/jokes/random')
        .then((response) => response.json())
        .then(json => {
            console.log('joke json',json);
            setJoke(json);
        });
    });

    return (
        <div>
            <h3>Joke</h3>
        </div>
    );
}

export default Joke;