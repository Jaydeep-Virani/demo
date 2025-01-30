import * as React from "react";
import { UserProvider } from "./usecontext";
import { page1, page2, page3, page4 } from "./use_con_exmp2";

function SelectPage({ v1 }) {
   const Page = [page1, page2  , page3, page4][v1];
  return <Page/>;
}

export default function UseContextExample() {
    const [page, setPage] = React.useState(0);
    return (
      <UserProvider>
        <div>
          <button onClick={() => setPage(0)} disabled = {page === 0}>Page 1</button>
          <button onClick={() => setPage(1)} disabled = {page === 1}>Page 2</button>
          <button onClick={() => setPage(2)} disabled = {page === 2}>Page 3</button>
          <button onClick={() => setPage(3)} disabled = {page === 3}>Page 4</button>
          <SelectPage v1={page} />
        </div>
      </UserProvider>
    );
}