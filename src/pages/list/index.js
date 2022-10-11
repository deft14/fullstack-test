import React, { useEffect, useState } from "react";
import { useApi } from "../../hooks";
import { Input, Select } from "antd";

// Components
import { MenuOutlined, SearchOutlined, StarFilled } from "@ant-design/icons";
const { Option } = Select;

function ListComponent() {
  const filter = [
    {
      name: "Food",
    },
    {
      name: "Beverage",
    },
    {
      name: "Desserts",
    },
    {
      name: "Wine Lists",
    },
    {
      name: "Pizza",
    },
    {
      name: "Burger",
    },
  ];
  const [products, setProducts] = useState([]);
  const { response, loading } = useApi(fetch);

  useEffect(() => {
    handlingResponse();
  }, [response]);

  const handlingResponse = () => {
    const products = response || [];
    setProducts(products.slice(0, 10));
  };

  const handlingFilter = (e) => {
    const name = e.target.value;
    if (name) {
      setProducts(
        products.filter((pro) => {
          return pro?.name?.indexOf(name) > -1;
        }),
      );
    } else {
      setProducts(response);
    }
  };

  return (
    <div className="container">
      <div className="filter-container">
        <div>ICON</div>
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search"
          onChange={handlingFilter}
          style={{ borderRadius: "5px" }}
        />
        <MenuOutlined />
      </div>
      <div className="flex-row mt-30 gap-10">
        <Select defaultValue="lucy" style={{ width: 120, borderRadius: "5px" }}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <div className="flex-row gap-10 " style={{ overflow: "scroll" }}>
          {filter.map((item, index) => (
            <div className="item" key={index}>
              {item.name}
            </div>
          ))}
        </div>
      </div>

      {products &&
        products.map((item, index) => (
          <div className="card-wrapper" key={index}>
            <div className="card-left-side">
              <div className="header">
                <div className="name">{item.name}</div>
                <div className="price">{"$ " + item.price}</div>
              </div>
              <div>
                <span className="mr-4">4.0</span>
                <StarFilled style={{ color: "#FF9529" }} />
              </div>
              <div>{item.description}</div>
            </div>
            <div className="card-right-side">
              <div className="plus-sign"> + </div>
              <img
                className="image"
                src={item.img}
                imag
                onError={(e) =>
                  e.target.onerror === null
                    ? (e.target.src =
                        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png")
                    : ""
                }
                alt={item.img}
              />
            </div>
          </div>
        ))}
    </div>
  );
}

export default ListComponent;
