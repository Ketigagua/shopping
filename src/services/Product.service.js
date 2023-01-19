const API_URl = "http://localhost:8000/products";

export const fetchProduct = async (
  page = 1,
  limit = 5,
  order = "asc",
  maxValue = null,
  minValue = null
) => {
  let url = `${API_URl}?_page=${page}&_limit=${limit}`;
  if (order) {
    url += `&_sort=price&_order=${order}`;
  }
  if (maxValue) {
    url += `&price_lte=${maxValue}`;
  }
  if (minValue) {
    url += `&price_gte=${minValue}`;
  }
  const token = localStorage.getItem("authToken");

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
};
