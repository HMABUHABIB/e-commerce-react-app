import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";

const HomePage = (props) => (
  <div className="homepage">
    <Directory></Directory>
    <button onClick={() => props.history.push("/shop")}>Go to shop</button>
  </div>
);

export default HomePage;
