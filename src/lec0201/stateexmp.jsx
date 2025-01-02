import { useState } from "react";
function Stateexmps(){
    const [name] = useState("Rku");
    const [age] = useState("45");
    return (
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </div>
    );
}
export default Stateexmps;