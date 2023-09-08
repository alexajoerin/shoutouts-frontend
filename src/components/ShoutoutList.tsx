import { useEffect, useState } from "react";
import Shoutout from "../models/Shoutout";
import "./ShoutoutList.css";
import ShoutoutCard from "./ShoutoutCard";
import {
  addShoutout,
  deleteShoutout,
  getAllShoutouts,
} from "../services/shoutoutService";
import ShoutoutForm from "./ShoutoutForm";

interface Props {
  shoutouts: Shoutout[];
  deleteShoutoutHandler: (id: string) => void;
}

const ShoutoutList = ({ shoutouts, deleteShoutoutHandler }: Props) => {
  return (
    <div className="ShoutoutList">
      <ul>
        {shoutouts.map((item) => (
          <ShoutoutCard
            shoutout={item}
            key={item._id}
            deleteShoutoutHandler={deleteShoutoutHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default ShoutoutList;
