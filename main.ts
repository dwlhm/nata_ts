import HTML from "./HTML.ts";

export const run = () => {
  const element = HTML.element("h1").class("text-red").child("Hallo, Dunia!");

  document.getElementById("app")?.appendChild(element.getDom());
};
