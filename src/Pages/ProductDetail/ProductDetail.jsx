import React from 'react'
// import classes from "./ProductDetail.module.css"
import { productUrl } from "../../Api/endPoints";
import { useParams } from "react-router-dom";
import Layout from '../../Components/Layout/Layout';
import axios from 'axios';
import ProductCard from '../../Components/Product/ProductCard';
function ProductDetail() {
  const { productId } = useParams();
  // console.log(productId);
  const [product, setproduct] = useState({});
  useEffect(() => {
        axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        // console.log(res.data);
        setproduct(res.data);
        
      })
      .catch((err) => {
        console.log(err);
       
      });
  }, []);
  return (
    <Layout>
        <ProductCard
          product={product}
           />
      
    </Layout>
  );
}

export default ProductDetail


