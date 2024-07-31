import { API } from "./config";

const showImage = (item, url) => (
    `<div class="product-img">
      <img
          src=${API}/${url}/photo/${item._id}
          alt="${item.name}"
          class="mb-3"
          style="max-height: 100%; max-width: 100%;"
/>
    </div>`
);

export default showImage;
