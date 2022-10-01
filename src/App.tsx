import "./styles.css";
import IMAGE from "./Konachan.jpg";
import GOKU from "./goku.svg";
import { ClickCounter } from "./ClickCounter";

export const App = () => {
  return (
    <>
      <h1>
        React typescript webpack - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={IMAGE} alt="konachan" width="300" height="200" />
      <img src={GOKU} alt="goku" width="300" height="200" />
      <ClickCounter />
    </>
  );
};
