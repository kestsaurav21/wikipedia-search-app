

const search = async () => {
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=json&origin=*&srsearch=${js}`;
    const response  = await fetch(url);
    const data = await response.json();

    return data.query.search;
}

export default search;