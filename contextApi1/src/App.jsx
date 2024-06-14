import React from "react";
import UserContextProvider from "./context/userContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  return (
    <UserContextProvider>
      <div className="bg-zinc-900 h-screen w-full ">
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
};

export default App;
