
const Card = (product) => {

  const showStock = quantity => {
    return quantity > 0 ? (
      `<span class="badge badge-primary badge-pill">In Stock </span>`
    ) : (
      `<span class="badge badge-primary badge-pill">Out of Stock </span>`
    );
  };

  return (
    `<div class="card ">
      <div class="card-header card-header-1 ">${product.name}</div>
      <div class="card-body">
        <div class='mob-pad'>
        <p class="card-p  mt-2">${product.description.substring(0, 100)} </p>
        <p class="card-p black-10">$ ${product.price}</p>
        <p class="black-9">Category: ${product.category && product.category.name}</p>
        ${showStock(product.quantity)}
        <br />                
      </div>
    </div>`
  );
};

export default Card;
