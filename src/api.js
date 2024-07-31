import { API } from "./config";
import  showFilterResults  from './components/Products';

export const getData = async () => {
    try {
        const response = await fetch(`${API}/categories`);
        const data = await response.json();
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return { data }; // Ensure the returned data is in the expected structure
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Re-throw the error for upstream handling
    }
};


export const getShopa = async () => {
    try {
        const sendParam = {
            limit: 6,
            skip: 0,
            filters: window.globalState.filters
        };
        const url = `products/by/search?data=${encodeURIComponent(JSON.stringify(sendParam))}`;    
        const response = await fetch(`${API}/${url}`);        
        const data = await response.json();
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return data; // Ensure the returned data is in the expected structure
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Re-throw the error for upstream handling
    }
};

export const updateProducts = async () => {
    const { data } = await getShopa();
    const display = document.querySelector('#display');
    display.innerHTML = showFilterResults(data);
};



 

