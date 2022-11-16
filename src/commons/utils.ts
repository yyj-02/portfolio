import { MouseEventHandler } from "react";

export const openInNewTab = (url: string) => {
  const eventHandler: MouseEventHandler = (event) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return eventHandler;
};
