import React from "react";
import Header from "../../components/Header";
import { fetchData } from "../../store/operations";
import { useSelector, useDispatch } from "react-redux";

function App() {
  // const selector = useSelector(state => {
  //   console.log(state);
  // });

  // const dispatch = useDispatch();

  const fetchSomeData = () => {
    // fetchData(dispatch);
  };

  return (
    <>
      TEST
      <Header title={"Header"} />
      <button onClick={fetchSomeData}>Fetch cities</button>
    </>
  );
}

export default App;
