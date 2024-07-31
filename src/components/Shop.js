import Radiobox from './Radiobox';
import Checkbox from './Checkbox';
import showFilterResults from './Products';
import {getShopa} from '../api';

const Shop = async () => {
    const check = await Checkbox();   
    const radio = Radiobox();  
    const { data } = await getShopa();
 
    return (   
        `<div class="rowShop">
            <div class="mob-shop">
                <h4>Filter by categories</h4>
                <ul>${check}</ul>
                <h4>Filter by price range</h4>
                <div>${radio}</div>
            </div>
        </div>
        <div id="display">
        ${showFilterResults(data)}                      
        </div>`
    );
};

export default Shop;
