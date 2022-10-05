import React, { useEffect, useState } from "react";
import { Table, Input } from "antd";

function TableComponent({ child = [], loading = true }) {
  const [products, setProduct] = useState(child);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "id",
    },
    {
      title: "Company Name",
      dataIndex: "company",
      key: "id",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "id",
    },
  ];
  useEffect(() => {
    setProduct(child);
  }, [child]);

  const handlingFilterName = (name) => {
    if (name) {
      setProduct(
        products.filter((pro) => {
          return pro?.name?.indexOf(name) > -1;
        }),
      );
    } else {
      setProduct(child);
    }
  };

  return (
    <div>
      <Input
        placeholder={`Search Name`}
        style={{ marginBottom: 8, display: "block" }}
        onChange={(e) => handlingFilterName(e.target.value)}
      />
      <Table
        columns={columns}
        dataSource={products}
        rowKey="id"
        loading={loading}
      />
    </div>
  );
}

export default TableComponent;
