import React from "react";
import { Card, Col, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const Recommendations = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Box display={"flex"} border={"1px solid black"} width={"250px"}>
      {/* <Row gutter={16}>
        <Col span={8}> */}
      <Card
        style={{ margin: "10px", border: "1px solid black" }}
        title={item.title}
        bordered={false}
      >
        <img
          style={{ width: "200px", height: "18rem", marginTop: "10px" }}
          src={item.photo}
        />
      </Card>
      {/* </Col>
      </Row> */}
    </Box>
  );
};

export default Recommendations;
