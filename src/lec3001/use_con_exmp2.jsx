import * as React from "react";
import { UserContext } from "./usecontext";
export function UserName() {
  const user = React.useContext(UserContext);
  return (
    <div>
      <p>Name: {user.name}</p>
    </div>
  );
}

export function page1() {
  return (
    <div>
      <h1>Page 1</h1>
      <UserName />
    </div>
  );
}

export function page2() {
    return (
      <div>
        <h1>Page 2</h1>
        <UserName />
      </div>
    );
  }

  export function page3() {
    return (
      <div>
        <h1>Page 3</h1>
        <UserName />
      </div>
    );
  }

  export function page4() {
    return (
      <div>
        <h1>Page 4</h1>
        <UserName />
      </div>
    );
  }
