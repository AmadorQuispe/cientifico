const api = 'https://rickandmortyapi.com/api/character';

export const getData = async (id=null) => {
    const apiUrl = id?` ${api}/${id}` : api;    
    const res =  await fetch(apiUrl);
    const data = await res.json();
    
    return data;
}