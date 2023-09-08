import { useEffect, useState } from "react";
import "./HomeRoute.css";
import Shoutout from "../models/Shoutout";
import {
  addShoutout,
  deleteShoutout,
  getAllShoutouts,
} from "../services/shoutoutService";
import ShoutoutList from "./ShoutoutList";
import ShoutoutForm from "./ShoutoutForm";

const HomeRoute = () => {
  const [shoutouts, setShoutouts] = useState<Shoutout[]>([]);

  const loadShoutouts = async (): Promise<void> => {
    setShoutouts(await getAllShoutouts());
  };

  const addShoutoutHandler = async (shoutout: Shoutout): Promise<void> => {
    await addShoutout(shoutout);
    loadShoutouts();
  };

  const deleteShoutoutHandler = async (id: string): Promise<void> => {
    await deleteShoutout(id);
    loadShoutouts();
  };

  useEffect(() => {
    (async () => {
      loadShoutouts();
    })();
  }, []);
  return (
    <div className="HomeRoute">
      <h1>All Shoutouts</h1>
      <ShoutoutList
        shoutouts={shoutouts}
        deleteShoutoutHandler={deleteShoutoutHandler}
      />
      <ShoutoutForm addShoutoutHandler={addShoutoutHandler} />
    </div>
  );
};

export default HomeRoute;
