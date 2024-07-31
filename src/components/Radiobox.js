import { prices } from "./fixedPrices";

const Radiobox = () => {

    return prices.map(p => (
        `<div>
            <input
                onchange="handlePrice([${p.array}])"
                name="price"
                type="radio"
                class="mr-2 ml-4"
            />
            <label class="form-check-label">${p.name}</label>
        </div>`
    )).join('');
};



export default Radiobox;
