// index.js
const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/'); // Fetch data from the API
        return response.data; // Return the fetched data
    } catch (error) {
        throw new Error('Failed to fetch data: ' + error.message); // Handle errors
    }
}

async function getData() {
    try {
        const data = await fetchData(); // Wait for the promise to resolve
        console.log(data); // Log the fetched data
    } catch (error) {
        console.error(error); // Log any error that occurs
    }
}

// Call the async function
getData();
