import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getJoke } from "./redux/services/jokeServices";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [joke, setJoke] = useState("");

  useEffect(() => {
    refresh();
  }, []);


  const refresh = () => {
    dispatch(getJoke())
      .then((response) => {
        setJoke(response.payload.joke);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="center-wrapper">
        <button className="button" onClick={() => refresh()}>
          Refresh
        </button>
        <br />
        <p className="joke-text">{joke ? joke : ""}</p>
      </div>
    </>
  );
};

export default Dashboard;
