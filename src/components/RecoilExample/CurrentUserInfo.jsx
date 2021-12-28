import axios from "axios";
import React from "react";
import { atom, selector, selectorFamily, useRecoilValue, useRecoilValueLoadable } from "recoil";
import ErrorBoundary from "./ErrorBoundary";

// const currentUserIDState = atom({
//   key: "CurrentUserID",
//   default: 1,
// });

const currentUserNameQuery = selectorFamily({
  key: "CurrentUserName",
  get: (id) => {
    return async () => {
      const response = await axios.get(`https://localhost:3000/api/user-name?id=${id}`);
      return response.data.name;
    };
  },
  cachePolicy_UNSTABLE: { eviction: "most-recent" }
});

function CurrentUser() {
  // const userName = useRecoilValue(currentUserNameQuery(1));
  // return <div>{userName}</div>;
  const userName = useRecoilValueLoadable(currentUserNameQuery(1));

  if (userName.state === 'loading') {
    return <div>loading...</div>
  }
  if (userName.state === 'hasError') {
    return <div>Something wrong...</div>
  }
  return <div>{userName.contents}</div>;
}

export default function CurrentUserInfo() {
  return (
    // <ErrorBoundary>
    //   <React.Suspense fallback={<div>Loading...</div>}>
        <CurrentUser />
      // </React.Suspense>
    // </ErrorBoundary>
  );
}
