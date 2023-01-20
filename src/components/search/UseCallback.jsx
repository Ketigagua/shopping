import { useState, useCallback, useMemo } from "react";
import debounce from "lodash/debounce";
import { useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import "./search.css";

const apiUrl = "http://localhost:8000";

export const SearchProduct = () => {
  const [name, setName] = useState("");
  const [products, setProducts] = useState([]);

  const memoizedProducts = useMemo(() => products, [products]);

  const search = debounce(async (name) => {
    if (!name) {
      setProducts([]);
      return;
    }

    let query = `${apiUrl}/products?q=${name}`;
    const token = localStorage.getItem("authToken");

    const response = await fetch(query, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });
    const data = await response.json();

    setProducts(data);
  }, 400);

  useEffect(() => {
    search(name);
  }, [name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    search(name);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="search"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="search__btn">
          <button type="submit" className="sub__btn">
            <SearchOutlined style={{ fontSize: "16px" }} />
          </button>
        </div>
        {memoizedProducts?.map((item) => (
          <div className="search">
            <div key={item.id} className="Searched__result">
              {item.title}
            </div>
          </div>
        ))}
      </form>
    </>
  );
};
