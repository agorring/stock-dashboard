import React from "react";
import { MoonIcon } from "@heroicons/react/solid";
const ThemeIcon = () => {
  return (
    <button
      className={`rounded-lg border-2 p-2 shadow-lg border-neutral-400 transition duration-300 hover:scale-125`}
    >
      <MoonIcon
        className={`h-8 w-8 cursor-pointer stroke-1 fill-yellow-500 stroke-neutral-400"
        }`}
      />
    </button>
  );
};

export default ThemeIcon;
