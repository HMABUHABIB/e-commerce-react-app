import React from "react";

import "./sing-in-and-sing-up.styles.scss";
import SingIn from "../../components/sing-in/sing-in.component";
import SingUp from "../../components/sing-up/sing-up.component";

const SingInAndSingUoPage = () => (
  <div className="sing-in-sing-up">
    <SingIn />
    <SingUp></SingUp>
  </div>
);

export default SingInAndSingUoPage;
