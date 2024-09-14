import clsx from "clsx";
import { createElement, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  variant?: "p";
  className?: string;
}

export default function Text(props: Props) {
  const { variant = "p", children, className = "", ...rest } = props;

  const styles = {
    p: { className: clsx("text-body", "tracking-wide", className), ...rest },
  };

  return createElement(variant, styles[variant], children);
}
