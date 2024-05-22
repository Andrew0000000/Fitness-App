const apikey = process.env.REACT_APP_API_KEY;


export const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': apikey,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}