
export function fetchCountries(searchname) {
    return fetch(`https://restcountries.com/v3.1/name/${searchname}`)
        .then(response => {
            if (response.ok) { return response.json() } else new Error(response.status)})
        .catch( error => console.log(`${error.name}: ${error.message}`));
    


}



