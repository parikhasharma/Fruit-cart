import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { fetchProducts } from '../services/ProductService';


export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);


  useEffect(() => {
    fetchProducts(page + 1).then(response => {
      console.log(response?.products)
      setProducts(response?.products);
    });
  }, [page]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Product Name', width: 450 },
    { field: 'category_level_1', headerName: 'Category', width: 200 },
    // { field: 'mrp.currency', headerName: 'Price', type: 'number', width: 190 },
    {
      field: 'images',
      headerName: 'Image',
      width: 160,
      renderCell: (params) => (
        <img src={"https://m.media-amazon.com/images/I/61rBHWmBw2L.jpg"} alt="Product" style={{ height: '50px', width: '50px' }} />
      ),
    },
  ];

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={products.map((product, index) => ({ ...product, id: index }))} 
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        pagination
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
}
