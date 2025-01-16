import * as React from 'react';

function fetchUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: 'John' });
        }, 2000);
    });
}

function ApiSimulation() {
    const [user, setUsers] = React.useState("loading...");
    const [id, setId] = React.useState("loading...");

    React.useEffect(() => {
        fetchUsers().then((user) => {
            setUsers(user.name); 
            setId(user.id);
        });
    }, []);

    return (
        <div>
            <h1>Users Data with useEffect</h1>
            <table style={{border: '2px solid black'}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{id}</td>
                        <td>{user}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ApiSimulation;
