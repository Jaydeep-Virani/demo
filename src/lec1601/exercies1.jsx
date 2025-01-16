//create a Component which will return   un ordered list passed by fetchdata() resolve promiss with list/array of strings
import { useState, useEffect } from 'react';
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Apple", "Banana", "Cherry", "Date", "Elderberry"]);
        }, 2000);
    });
}
function ListComponent() {
    const [item, setItems] = useState(["loading...", "loading...", "loading...", "loading...", "loading..."]);
    useEffect(() => {
        fetchData().then((items) => {
            setItems(items);
        });
    }, []);
    return (
        <div>
            <p>{item}</p>
        </div>
    );
}
export default ListComponent;