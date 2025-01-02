import { useState } from "react";
function Stateexmps(){
    const [name, setName] = useState("Jaydeep");
    const [age, setAge] = useState("21");
    const [color, setColor] = useState("red");
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div>
            <input type="text" 
                value={name} 
                onChange={
                            (e)=> setName(e.target.value)
                        }
            />
            <p>Name of candidate is : {name}</p>
            <br/>
            <input type="number" 
                value={age} 
                onChange={
                            (e)=> setAge(e.target.value)
                        }
            />
            <p style={{background: color, height:50}}>
                Age of candidate is : {age}
            </p>
            <input type="radio" name="C1"  onChange={()=> setColor("Blue")}/>
            <input type="radio" name="C1"  onChange={()=> setColor("Yellow")}/>
            <input type="radio" name="C1"  onChange={()=> setColor("Green")}/>

            {color}
            <br/>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)} />
            <p style={{fontWeight: isChecked ? "bold" : "normal"}} > Virani Jaydeep </p>
        </div>
    );
}
export default Stateexmps;