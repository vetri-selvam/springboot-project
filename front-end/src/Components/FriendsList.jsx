import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useTheme } from "../ThemeContext";

const FriendsList = () => {
  const { isDarkMode } = useTheme();

  return (
    <Card className={`me-4 p-3 shadow-sm rounded-3 border-0 ${isDarkMode ? "bg-secondary text-white" : "bg-light text-dark"}`} style={{ width: "100%", maxWidth: "300px" }}>
      <Card.Body>
        <Card.Title>Friends List</Card.Title>
        <ListGroup variant="flush">
          {["Rahul Sharma", "Amit Singh", "Priya Verma", "Neha Gupta"].map((friend, index) => (
            <ListGroup.Item key={index} className={isDarkMode ? "bg-dark text-white" : "bg-light text-dark"}>
              {friend}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default FriendsList;