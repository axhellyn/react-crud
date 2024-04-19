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
    // <FontAwesomeIcon
    //   onClick={handleClick}
    //   icon={dark ? faToggleOn : faToggleOff}
    //   className="mx-10 my-5 h-12 cursor-pointer dark:text-gray-100"
    // />
    <button onClick={handleClick} className="text-xl text-white dark:text-purple-900">{dark? <MdLightMode /> : <MdDarkMode />}</button>
  );
}
