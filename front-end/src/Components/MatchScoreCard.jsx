import React from "react";
import { Container, Card, ListGroup, Row, Col } from "react-bootstrap";
import { useTheme } from "../ThemeContext";
import FriendsList from "./FriendsList";
import FavoriteTeams from "./FavoriteTeams";

// Cricket Icons
const batIcon = "https://cdn.vectorstock.com/i/preview-1x/89/44/cricket-bat-icon-vector-33788944.jpg";
const ballIcon = "https://cdn.vectorstock.com/i/500p/83/18/cricket-ball-vector-1468318.jpg";

const matches = [
  { type: "live", team1: "India", team1Flag: "in", team2: "England", team2Flag: "gb", score: "112/2", overs: "15.3", toss: "India chose to bat" },
  { type: "live", team1: "Australia", team1Flag: "au", team2: "Pakistan", team2Flag: "pk", score: "98/1", overs: "12.1", toss: "Pakistan chose to field" },
  { type: "upcoming", team1: "England", team1Flag: "gb", team2: "Australia", team2Flag: "au", date: "Tomorrow", venue: "Melbourne" },
  { type: "upcoming", team1: "South Africa", team1Flag: "za", team2: "India", team2Flag: "in", date: "Thursday", venue: "Cape Town" },
  { type: "upcoming", team1: "West Indies", team1Flag: "jm", team2: "Sri Lanka", team2Flag: "lk", date: "Friday", venue: "Barbados" },
];

const MatchScoreCard = () => {
  const { isDarkMode } = useTheme();

  return (
    <Container fluid className={`d-flex justify-content-center align-items-start mt-4 ${isDarkMode ? "bg-dark text-white" : "bg-light text-dark"}`} style={{ minHeight: "90vh" }}>
      
      {/* Friends List Component */}
      <FriendsList />

      {/* Main Match Score Card */}
      <Card className={`w-100 p-3 shadow-lg rounded-3 border-0 ${isDarkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
        <div style={{ maxHeight: "400px", overflowY: "auto" }}>
          <ListGroup variant="flush">
            {matches.map((match, index) => (
              <ListGroup.Item
                key={index}
                className={`border-0 ${isDarkMode ? "bg-secondary text-white" : index % 2 === 0 ? "bg-light" : "bg-white"}`}
                style={{ marginBottom: "10px" }}
              >
                <Row className="align-items-center">
                  <Col xs={4} className="d-flex align-items-center">
                    <img src={`https://flagcdn.com/w40/${match.team1Flag}.png`} alt={match.team1} width="30" className="me-2" />
                    <span className="fw-bold">{match.team1}</span>
                    {match.type === "live" && <img src={batIcon} alt="Bat Icon" width="20" className="ms-2" />}
                  </Col>
                  <Col xs={3} className="text-center fw-bold text-nowrap">
                    {match.type === "live" ? match.score : match.date}
                  </Col>
                  <Col xs={4} className="d-flex align-items-center justify-content-end">
                    {match.type === "live" && <img src={ballIcon} alt="Ball Icon" width="20" className="me-2" />}
                    <span className="fw-bold">{match.team2}</span>
                    <img src={`https://flagcdn.com/w40/${match.team2Flag}.png`} alt={match.team2} width="30" className="ms-2" />
                  </Col>
                </Row>
                <div className="text-muted small mt-1">
                  {match.type === "live" ? `Over: ${match.overs} | ${match.toss}` : `Venue: ${match.venue}`}
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </Card>

      {/* Favorite Teams Component */}
      <FavoriteTeams />
    </Container>
  );
};

export default MatchScoreCard;