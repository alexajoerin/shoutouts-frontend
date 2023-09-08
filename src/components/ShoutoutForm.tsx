import { FormEvent, useEffect, useState } from "react";
import "./ShoutoutForm.css";
import Shoutout from "../models/Shoutout";

interface Props {
  addShoutoutHandler: (shoutout: Shoutout) => void;
  name?: string;
}

const ShoutoutForm = ({ addShoutoutHandler, name }: Props) => {
  const [to, setTo] = useState(name ? name : "");
  const [from, setFrom] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const shoutout: Shoutout = {
      to,
      from,
      text,
    };
    addShoutoutHandler(shoutout);
    setTo("");
    setFrom("");
    setText("");
  };

  useEffect(() => {
    setTo(name || "");
  }, [name]);

  return (
    <form className="ShoutoutForm" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="to">To</label>
      <input
        required
        type="text"
        name="to"
        id="to"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <label htmlFor="from">From</label>
      <input
        required
        type="text"
        name="from"
        id="from"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <label htmlFor="text">Shout Out</label>
      <textarea
        required
        rows={4}
        cols={50}
        name="text"
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Submit Shoutout!</button>
    </form>
  );
};

export default ShoutoutForm;
