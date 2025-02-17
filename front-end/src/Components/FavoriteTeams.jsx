import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useTheme } from "../ThemeContext";

const FavoriteTeams = () => {
  const { isDarkMode } = useTheme();

  return (
    <Card className={`ms-4 p-3 shadow-sm rounded-3 border-0 ${isDarkMode ? "bg-secondary text-white" : "bg-light text-dark"}`} style={{ width: "100%", maxWidth: "300px" }}>
      <Card.Body>
        <Card.Title>Favorite Teams</Card.Title>
        <ListGroup variant="flush">
          {["India", "Australia", "England", "South Africa"].map((team, index) => (
            <ListGroup.Item key={index} className={isDarkMode ? "bg-dark text-white" : "bg-light text-dark"}>
              {team}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default FavoriteTeams;