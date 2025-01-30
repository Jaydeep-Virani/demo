import { createRoot } from "react-dom/client";
import MyComponent  from "./comp1";
import Stateexmp from "./lec2612/stateexmp";
import StateMani from "./lec2612/statemani";
import IterableExample from "./lec2612/objiter";
import Stateexmps from "./lec0201/stateexmp";
import Exercies1 from "./lec0601/exercies1";
import Exercies2 from "./lec0601/exercies2";
import Exercies3 from "./lec0601/exercies3";
import Exercies4 from "./lec0601/exercies4";
import ApiSimulation from "./lec1601/usereffectclass";
import ListComponent from "./lec1601/exercies1";
import Exerciess1 from "./lec2001/exercies1";
import Exerciess2 from "./lec2001/exercies2";
import UserContext from "./lec3001/use_con_exmp3";
createRoot(document.getElementById('root')).render(
  <div>
    <MyComponent />
    <Stateexmp />
    <StateMani />
    <IterableExample />
    <Stateexmps />
    <Exercies1 />
    <Exercies2 />
    <Exercies3 />
    <Exercies4 />
    <ApiSimulation />
    <ListComponent/>
    <Exerciess1 />
    <Exerciess2 />
    <UserContext />
  </div>
);