const BASE_URL = 'https://catalog-management-system-dev-ak3ogf6zea-uc.a.run.app/cms/products';

export const fetchProducts = async (page = 1) => {
  const response = await fetch(`${BASE_URL}?page=${page}`).then((res)=>res.json()).then(data=>data);
  return response
};

