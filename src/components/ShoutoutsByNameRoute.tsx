import { Link, useParams } from "react-router-dom";
import "./ShoutoutsByNameRoute.css";
import { useEffect, useState } from "react";
import Shoutout from "../models/Shoutout";
import {
  addShoutout,
  deleteShoutout,
  getShoutoutsByName,
} from "../services/shoutoutService";
import ShoutoutList from "./ShoutoutList";
import ShoutoutForm from "./ShoutoutForm";

const ShoutoutsByNameRoute = () => {
  const [shoutouts, setShoutouts] = useState<Shoutout[]>([]);
  const name: string | undefined = useParams().name;

  const loadShoutouts = async () => {
    setShoutouts(await getShoutoutsByName(name!));
  };

  const addShoutoutHandler = async (shoutout: Shoutout): Promise<void> => {
    await addShoutout(shoutout);
    loadShoutouts();
  };

  const deleteShoutoutHandler = async (id: string): Promise<void> => {
    await deleteShoutout(id);
    loadShoutouts();
  };

  // i need to call a function that gets back shoutouts by name
  useEffect(() => {
    (async () => {
      loadShoutouts();
    })();
  }, [name]);

  return (
    <div className="ShoutoutsByNameRoute">
      <h1>Shoutouts for {name}</h1>
      <Link to="/">Back to homepage</Link>
      <ShoutoutList
        shoutouts={shoutouts}
        deleteShoutoutHandler={deleteShoutoutHandler}
      />
      <ShoutoutForm addShoutoutHandler={addShoutoutHandler} name={name} />
    </div>
  );
};

export default ShoutoutsByNameRoute;
