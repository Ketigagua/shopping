import { useState, useCallback } from "react";
import debounce from "lodash/debounce";
import { useEffect } from "react";
import axios from "../../services/Api";

const apiUrl = "axios";

const UseCallback = () => {
  const [name, setName] = useState("");
  const [products, setProducts] = useState(null);

  const debouncedSearch = debounce(async (name) => {
    let query = `${apiUrl}/products`;
    if (name) {
      query += `?q=${name}`;
    }
    const response = await fetch(query);
    const data = await response.json();

    setProducts(data);
  }, 400);
  const search = useCallback(debouncedSearch, []);

  useEffect(() => {
    debouncedSearch(name);
  }, [name]);

  return <>{products?.map(item)=(
    <div key={item.id}>{item.title}</div>
  )}</>;
};
