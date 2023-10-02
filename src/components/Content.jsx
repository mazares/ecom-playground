import Card from "./Card";

export default function Content(params) {
  const products = [];

  class ProductItem {
    constructor(id, name, price, category) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.category = category;
    }
  }

  // product generator

  for (let i = 0; i <= 1000; i++) {
    let prod = new ProductItem(`pr${i}`, `product${i}`, ` $ ${100 + i}`);

    if (i % 3 === 0 && i % 5 === 0) {
      prod.category = `children`;
    } else if (i % 5 === 0) {
      prod.category = "women";
    } else if (i % 3 === 0) {
      prod.category = "men";
    } else {
      prod.category = "misc";
    }
    products.push(prod);
  }

  // ./ product generator

  return (
    <main className="content">
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
          />
        );
      })}
    </main>
  );
}
