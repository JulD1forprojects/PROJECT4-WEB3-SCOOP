import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom"; // useparam to get order id from url and usenaviagate to redirect between pages
import Header from "../components/Header";
import axios from "axios"; // axios for api calls
const OrderDetail = ({ user }) => {
  let { orderid } = useParams(); // get order id

  const navigate = useNavigate();
  const [order, setOrder] = useState({}); // order object
  const [loading, setLoading] = useState(true); // loading

  // get order by api
  const getData = async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/order/${id}`);
      if (data.success === true) {
        // set order in state
        setOrder(data.order);
        setLoading(false);
      } else {
        navigate("/myorders");
      }
    } catch (e) {
      console.log(e);
      navigate("/myorders");
    }
  };

  // first run
  useEffect(() => {
    getData(orderid);
  }, [orderid]);

  // rendering ui
  if (loading) {
    return (
      <div className="loadingscreen">
        <h2 className="mt-2" style={{ fontSize: "45px", color: "white" }}>
          Loading...
        </h2>
      </div>
    );
  } else {
    return (
      <>
        <Header user={user} />
        <br />
        <h2 className="text-center"> Order Detail</h2>

        <br />
        <br />
        <Container>
          <Table bordered striped responsive>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {order.orderItems.map((v, i) => {
                return (
                  <tr key={i}>
                    <td>{v.name}</td>
                    <td>${v.price}</td>
                    <td>{v.quantity}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </>
    );
  }
};

export default OrderDetail;
