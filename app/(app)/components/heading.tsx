import clsx from "clsx";
import { createElement, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  variant: "h1" | "h2" | "h3" | "h4";
  className?: string;
}

export default function Heading(props: Props) {
  const { variant = "h1", className = "", children } = props;

  const styles = {
    h1: {
      className: clsx(
        "text-primary",
        "mb-2",
        "text-xl",
        "font-bold",
        "tracking-wide",
        className,
      ),
    },
    h2: {
      className: clsx(
        "text-primary",
        "mb-2",
        "text-xl",
        "font-bold",
        "tracking-wide",
        className,
      ),
    },
    h3: {
      className: clsx(
        "text-primary",
        "mb-2",
        "text-xl",
        "font-bold",
        "tracking-wide",
        className,
      ),
    },
    h4: {
      className: clsx(
        "text-primary",
        "mb-2",
        "text-xl",
        "font-bold",
        "tracking-wide",
        className,
      ),
    },
  };

  return createElement(variant, styles[variant], children);
}
