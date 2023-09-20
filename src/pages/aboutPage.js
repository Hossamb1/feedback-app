import React from "react";
import Card from "../components/shared/card";
import { Link } from "react-router-dom";

const aboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>
          <h3>Rule 2:</h3> "Treat yourself like someone you are responsible for
          helping." <br />
          how much can you force yourself to work without feeling defeat?
        </p>
        <h1 style={{ textAlign: "center" }}>aim low.</h1>

        <Link to="/">Back to home.</Link>
      </div>
    </Card>
  );
};

export default aboutPage;
