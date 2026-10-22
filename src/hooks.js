import { useState, useEffect } from 'react';

export const useFetch = (url, initialValue) => {
    const [result, setResult] = useState(initialValue);

    useEffect(() => {
    // fetch('https://official-joke-api.appspot.com/random_joke')
    fetch(url)
        .then((response) => response.json())
        .then(json => setResult(json));
    }, []);

    return result;
}