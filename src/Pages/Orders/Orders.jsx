import React, { useContext, useEffect, useState } from "react";
import Layout from "../../Component/Layout/Layout";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Component/DataProvider/DataProvider";
import classes from "./Order.module.css";
import ProductCard from "../../Component/Product/ProductCard";
function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          // console.log(snapshot)
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.order_container}>
          <h2>Your Orders</h2>
          {/* ordered items */}
          {orders?.length == 0 && (
            <div style={{ padding: "20px" }}>you don't have order yet.</div>
          )}
          <div>
            {orders?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <hr />
                  <p>Order ID: {eachOrder?.id}</p>
                  {eachOrder?.data?.basket?.map((order, i) => (
                    <ProductCard flex={true} product={order} key={order.id} />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Orders;
