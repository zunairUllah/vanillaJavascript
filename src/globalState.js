// Define global state object
import { updateProducts} from './api';

export const globalState = {
    filters: {
      category: [],
      price: []
    }
  };
  
  window.globalState = globalState;

  
  // Define handleToggle function
  window.handleToggle = async (categoryId) => {
    const { category } = window.globalState.filters;
    const index = category.indexOf(categoryId);
    if (index === -1) {
      category.push(categoryId);
    } else {
      category.splice(index, 1);
    }
    await updateProducts();
  };
  
  // Define handlePrice function
  window.handlePrice = async (price) => {
    window.globalState.filters.price = price;
    await updateProducts();
  };
  
 
  