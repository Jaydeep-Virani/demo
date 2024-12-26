import * as React from "react";
class Statemani extends React.Component {
    state = {
        first: false,
        second : true,
        txt : "Initial State",
        clr: "green",
    };
    constructor() {
        super();
        setTimeout(() => {
            this.setState({
                first: false,
                second: true,
                txt : "Update State",
                clr: "red",
            });
        }, 5000);
        
    }
    render() {
        const { first, second, txt, clr} = this.state;
        return (
            <div>
                <button disabled={first}>Button 1</button>
                <button disabled={second}>Button 2</button>
                <label style={{ color: clr }}>{txt}</label>
                <input value={txt} />
            </div>
        );
    }
}
export default Statemani;