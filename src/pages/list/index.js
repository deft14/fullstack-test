import React, { useEffect, useState } from "react";
import { useApi } from "../../hooks";
import { Button } from "antd";
import { Link } from "react-router-dom";

// Components
import TableComponent from "./components/index";

function ListComponent() {
  const [products, setProducts] = useState([]);
  const { response, loading } = useApi(fetch);

  useEffect(() => {
    if (response) {
      setProducts(response);
    }
  }, [loading, response]);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>List of Products</h2>
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <Button type="primary" size="small">
          <Link to="/create">Create Product</Link>
        </Button>
      </div>
      <div className="table-products">
        <TableComponent child={products} loading={loading} />
      </div>
    </div>
  );
}

export default ListComponent;
