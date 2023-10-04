import { useEffect, useState } from "react";

export default function Filters(params) {
  const [categoryOption, setCategoryOption] = useState(`--select--`);

  const [priceOption, setPriceOption] = useState(`--select--`);

  const handleChange = (event) => {
    setPriceOption((prev) => event.target.value);
    setCategoryOption((prev) => event.target.value);
  };

  useEffect(() => {
    console.log(categoryOption);
    console.log(priceOption);
  }, [categoryOption, priceOption]);
  return (
    <div className="filters">
      <label htmlFor="select">select category</label>
      <select onChange={handleChange}>
        <option value="select">--select--</option>
        <option value="men">men</option>
        <option value="women">women</option>
        <option value="children">children</option>
        <option value="misc">misc</option>
      </select>

      <label htmlFor="select">price range</label>
      <select onChange={handleChange}>
        <option value="select">--select--</option>
        <option value="100--200">100--200</option>
        <option value="200-400">200--400</option>
        <option value="400--800">400--800</option>
        <option value="800--1100">800--1100</option>
      </select>
    </div>
  );
}
