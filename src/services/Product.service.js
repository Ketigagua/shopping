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

  const response = await fetch(url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvbkB0ZXN0LmNvbSIsImlhdCI6MTY3NDA1ODM5NCwiZXhwIjoxNjc0MDYxOTk0LCJzdWIiOiIxIn0.CJMeli61mL6KmvmGcJPj_3qZ9J072vcPqleb_NzGwb4",
    },
  });

  return await response.json();
};
