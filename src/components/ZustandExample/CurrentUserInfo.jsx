import axios from "axios";
import React, { useEffect } from "react";
import create from "zustand";

const useStore = create((set, get) => ({
  userName: "",
  fetchUserName: async () => {
    const response = await axios.get(`https://localhost:3000/api/user-name?id=${get().id}`);
    set({ userName: response.data.name });
  },
}));

function CurrentUser() {
  const userName = useStore((state) => state.userName);

  return <div>{userName.contents}</div>;
}

export default function CurrentUserInfo() {
  const fetchUserName = useStore(state => state.fetchUserName)

  return (
    <>
      <CurrentUser />
      <input onChange={(e) => fetchUserName(e.target.value)} />
    </>
  );
}
