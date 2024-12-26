import { createRoot } from "react-dom/client";
import MyComponent  from "./comp1";
import Stateexmp from "./lec2612/stateexmp";
import StateMani from "./lec2612/statemani";
import IterableExample from "./lec2612/objiter";
createRoot(document.getElementById('root')).render(
  <div>
    <MyComponent />
    <Stateexmp />
    <StateMani />
    <IterableExample />
  </div>
);