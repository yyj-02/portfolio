import React, { useEffect, useState } from "react";
import {
  Config,
  uniqueNamesGenerator,
  adjectives,
  animals,
} from "unique-names-generator";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { changeIdentity } from "./identitySlice";
import styles from "./inputNameTemplate.module.css";

interface props {
  next: () => void;
}

const InputNameTemplate: React.FC<props> = (props) => {
  const config: Config = {
    dictionaries: [adjectives, animals],
    separator: " ",
    style: "capital",
    seed: Math.floor(Math.random()),
  };

  const identity = useAppSelector((state) => state.identitySlice.value);
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>("");
  useEffect(() => setName(uniqueNamesGenerator(config)), []);

  const submitName: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    console.log("----------Submitting name----------");
    dispatch(changeIdentity(name));
    console.log({ name });
    console.log("----------Changed name----------");
    props.next();
  };

  return (
    <div className="flex flex-col items-center -translate-y-10">
      <p className="text-xl my-3">You will be known as</p>
      <span className="translate-x-10">
        <form>
          <input
            type="text"
            className="shadow-md m-1 text-xl rounded-xl h-12 p-5 text-center focus:outline-none focus:border-orange-500 focus:ring-orange-500 caret-orange-500 focus:ring-2"
            name="name"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoFocus
            autoSave="false"
            autoComplete="false"
          ></input>
          <button
            className={`h-12 transition ease-in-out active:scale-90 mx-5 ${styles["btn-black"]}`}
            type="submit"
            onClick={submitName}
          >
            <span className={`${styles.arrow} ${styles["arrow-black"]}`}></span>
          </button>
        </form>
      </span>
    </div>
  );
};

export default InputNameTemplate;
