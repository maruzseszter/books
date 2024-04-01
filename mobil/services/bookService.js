const host = 'http://localhost:8081/';
const endpoint = 'books';
 
export async function getBooks() {
    const url = host + endpoint;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}