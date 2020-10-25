import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logOut } = useAuth();
  const history = useHistory();

  async function handleLogOut() {
    setError("");

    try {
      await logOut();
      history.pushState("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/remove">
          <Button className="btn btn-danger">Delete Account</Button>
        </Link>
      </div>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogOut}>
          Log Out
        </Button>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
