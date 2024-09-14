"use client";

import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  type: "submit" | "reset" | "button";
}

export function Button(props: Props) {
  const { children, type } = props;

  return (
    <button
      type={type}
      className="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
    >
      {children}
    </button>
  );
}
