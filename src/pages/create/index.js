import React, { useState } from "react";
import { Button, Form, Input } from "antd";

function CreateComponent(props) {
  const [submit, setSubmit] = useState(false);
  const onFinish = ({ description, name, price, company }) => {
    setSubmit(true);

    const body = {
      createdAt: new Date(),
      name,
      img: "http://lorempixel.com/640/480/food",
      description,
      price,
      company,
    };

    fetch("https://603c67f9f4333a0017b6786c.mockapi.io/api/v1/Products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        setSubmit(false);
        console.log(data.id);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      className="table-products"
      style={{
        marginTop: "auto",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2>Create Product</h2>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Company"
          name="company"
          rules={[{ required: true, message: "Please input Company!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please enter description!" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Pricing"
          name="price"
          rules={[{ required: true, message: "Please enter price!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={submit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default CreateComponent;
