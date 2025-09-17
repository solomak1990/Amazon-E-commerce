import React from 'react'
import classes from "./Results.module.css";
import Layout from '../../Components/Layout/Layout';
import { useParams } from "react-router-dom";
import {productUrl} from "../../Api/endPoints";
import axios from "axios";

function Results() {
  const [results, setResults] = useState([]);
   const { categoryName } = useParams();
   useEffect(() => {
     axios
       .get(`${productUrl}/products/category/${categoryName}`)
       .then((res) => {
         setResults(res.data);
         console.log(res.data);
       })
       .catch((err) => {
         console.log(err);
         
       });
   }, []) 

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "38px" }}>Category / {categoryName}</p>
        <hr />
         
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                
              />
            ))}
          </div>
        
      </section>
    </Layout>
  )
}

export default Results