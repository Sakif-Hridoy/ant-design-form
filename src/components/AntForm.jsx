import React from "react";
import "./AntForm.css";
import { Button, Checkbox, Form, Input } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const AntForm = () => {
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div>
      <div className="form-style">
        <Form
          initialValues={null}
          name="name"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item  label="Username" name="username">
            <Input type="text" onBlur={handleChange} />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input.Password onBlur={handleChange} />
          </Form.Item>

          <Form.Item
            
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <h2>Please Check Browser Console for user input</h2>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AntForm;
