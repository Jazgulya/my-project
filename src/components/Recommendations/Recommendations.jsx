import React from "react";
import { Card, Col, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";

const Recommendations = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Card style={{ margin: "10px" }} title={item.title} bordered={false}>
            <img
              style={{ width: "200px", marginTop: "10px" }}
              src={item.photo}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Recommendations;
