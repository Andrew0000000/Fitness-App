export const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '22f673f0fbmsh121cddfc9be7a02p1d1204jsn1374689bbe43',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}