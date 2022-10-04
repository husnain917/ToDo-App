import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Routing from './routing/Routing';
import { FallingLines } from "react-loader-spinner";

// Actions
import { getCurrentUser } from "./store/actions/LogInAction";

export default function App() {

  // states
  const [loader, setLoader] = useState(false);

  // dispatch
  const dispatch = useDispatch();

  // get current user
  useEffect(() => {
    dispatch(getCurrentUser(setLoader));
  }, []);
  return (
    <>
      {loader ?
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "73vh" }}>
          <FallingLines width="110" color="blue" />
        </div>
        : <Routing />}
    </>
  )
}
