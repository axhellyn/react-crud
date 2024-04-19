import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export default function DarkModeButton() {
  const [dark, setDark] = useState(false);

  function handleClick() {
    if (dark) {
      setDark(false);
    } else {
      setDark(true);
    }
  }

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <button onClick={handleClick} className="text-xl text-white">{dark? <MdLightMode /> : <MdDarkMode />}</button>
  );
}
