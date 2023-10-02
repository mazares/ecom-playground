import { useEffect, useState } from "react";

export default function Header() {
  const [categoryOption, setCategoryOption] = useState(`--select--`);

  const handleChange = (event) => {
    setCategoryOption((prev) => event.target.value);
  };

  useEffect(() => {
    console.log(categoryOption);
  }, [categoryOption]);

  return (
    <header className="header">
      <p>header</p>

      <label htmlFor="select">select category</label>
      <select onChange={handleChange}>
        <option value="select">--select--</option>
        <option value="men">men</option>
        <option value="women">women</option>
        <option value="children">children</option>
        <option value="misc">misc</option>
      </select>
    </header>
  );
}
