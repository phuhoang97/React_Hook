import React, { useContext } from "react";
import { themeText } from "./UseContext";
export default function CompD() {
  const theme = useContext(themeText);
  return (
    <div>
      <p className={theme}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
        quod sint temporibus tenetur provident, placeat enim consectetur harum
        vel, reiciendis deserunt commodi aspernatur in dolorem alias dicta
        accusamus corrupti! Ipsam.
      </p>
    </div>
  );
}
