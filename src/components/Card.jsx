export default function Card({ id, name, price, category }) {
  return (
    <div className="product-card" key={{}}>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{category}</p>
    </div>
  );
}
