import React from 'react'
import classes from "./ProductDetail.module.css"
import { productUrl } from "../../Api/endPoints";
import { useParams } from "react-router-dom";
import Layout from '../../Components/Layout/Layout';
import axios from 'axios';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader';
function ProductDetail() {
  const [product, setproduct] = useState({});
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  // console.log(productId);

  useEffect(() => {
     setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        // console.log(res.data);
        setproduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <Layout>
      {isLoading ? <Loader /> : <ProductCard 
      product={product} />}
    </Layout>
  );
}

export default ProductDetail


