import  React   from 'react';
export const UserContext = React.createContext();

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'John', age: 25 });
    }, 5000);
  });
}

export function UserProvider ({ children })  {
  const [user, setUser] = React.useState("loading...");

  React.useEffect(() => {
    fetchUser().then((user) => {
      setUser(user);
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}