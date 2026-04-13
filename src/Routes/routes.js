import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

import diceImg from "../assets/images/dice.png";
import doubleImg from "../assets/images/double-dice.png";
import numberImg from "../assets/images/number.png";
import { Container, Drawer, SPA } from "./style";

import Dice from "../views/Dice";
import Double from "../views/Double";
import Generator from "../views/NumberG";

const routes = [
  {
    path: "/",
    exact: true,
    main: Dice,
  },
  {
    path: "/double-dice",
    exact: true,
    main: Double,
  },
  {
    path: "/number-generator",
    exact: true,
    main: Generator,
  },
];

function Gonna({ label, to, active }) {
  let match = useRouteMatch({
    path: to,
    exact: active,
  });

  return (
    <div className={match ? "active" : ""}>
      <Link to={to}>{label}</Link>
    </div>
  );
}

const Routes = () => {
  return (
    <Router>
      <Container>
        <Drawer>
          <ul>
            <li>
              <img src={diceImg} alt="Dice" height="130px" width="130px" />
              <Gonna to="/" label="Dice" active={true} />
            </li>
            <li>
              <img
                src={doubleImg}
                alt="Double Dice"
                height="120px"
                width="120px"
              />
              <Gonna to="/double-dice" label="Double Dice" active={true} />
            </li>
            <li>
              <img
                src={numberImg}
                alt="Number Generator"
                height="90px"
                width="90px"
              />
              <Gonna
                to="/number-generator"
                label="Number Generator"
                active={true}
              />
            </li>
          </ul>
          <div id="copy-box">
            <a
              href="https://scriptcamilo.dev"
              target="blank"
              id="copyright"
            >
              &copy; scriptcamilo
            </a>
          </div>
        </Drawer>

        <SPA>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </SPA>
      </Container>
    </Router>
  );
};

export default Routes;
