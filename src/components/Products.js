import Card from './Card';

const showFilterResults = (a) => {         
    return (
        a ? (          
            `<div class="col-8"> 
                <h2 class="mb-4">Products</h2>
                <div class="row">
                    ${a.map((product) => (
                        `<div class="col-4 mb-3">
                            ${Card(product)}
                        </div>`
                    )).join('')}
                </div>
                <hr />           
            </div>`
        ) : 'Products not available'
    );     
};


export default showFilterResults;

