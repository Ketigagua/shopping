// export const sortProducts = async (page = 1, limit = 5, order = "asc") => {
//   const response = await fetch(
//     `http://localhost:8000/products?_page=${page}&_limit=${limit}&price_gte=100&price_lte=300&_sort=price&_order=${order}`,
//     {
//       headers: {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvbkB0ZXN0LmNvbSIsImlhdCI6MTY3Mzk3Njc3MywiZXhwIjoxNjczOTgwMzczLCJzdWIiOiIxIn0.7H2nmQTIrYEXEW6dLjqKNkFMHE_fIdLYximOJVnG4Zg",
//       },
//     }
//   );

//   const data = await response.json();
//   console.log(data);
//   return data;
// };
