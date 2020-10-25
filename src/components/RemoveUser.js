import React, { useState } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

function RemoveUser() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { removeUser } = useAuth();
  const history = useHistory();

  async function handleRemove(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await removeUser();
      history.push("/");
    } catch {
      setError("Failed to delete your account");
    }

    setLoading(false);
  }

  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Delete Account</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Button
            className="w-100 btn btn-danger"
            onClick={handleRemove}
            disabled={loading}
          >
            Yes
          </Button>
          <Link to="/">
            <Button className="w-100 btn btn-primary mt-3">No</Button>
          </Link>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default RemoveUser;
