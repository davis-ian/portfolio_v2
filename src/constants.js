export const themes = [
  {
    id: "bowser",
    name: "Bowser's Castle",
    colors: {
      primary: "#7f5af0",
      secondary: "#2cb67d",
      text: "#fffffe",
      border: "#383a61",
      background: "#16161a",
      primaryOffset: "#e068fd",
      textOffset: "#94a1b2",
      backgroundOffset: "#29293e",
    },
  },
  {
    id: "not bowser",
    name: "Not Bowser's Castle",
    colors: {
      primary: "red",
      secondary: "red",
      text: "#fffffe",
      border: "black",
      background: "blue",
      primaryOffset: "orange",
      textOffset: "#94a1b2",
      backgroundOffset: "#29293e",
    },
  },
];

import liftSrc from "@/assets/images/lift_login.png";
import upnextSrc from "@/assets/images/upnext.png";
import shortySrc from "@/assets/images/shorty.png";
import chirpSrc from "@/assets/images/chirp.png";

export const projects = [
  {
    label: "upnext",
    image: upnextSrc,
    link: "https://upnext.iandavis.dev",
    techStack: [
      { label: "Vue.js", color: "#3fb27f" },
      { label: "Node.js", color: "#59aa46" },
      { label: "Auth0", color: "#59aa46" },
    ],
  },
  {
    label: "lift trackr",
    // image: "https://iandavs.com/lifttrackr_pic.png",
    image: liftSrc,
    link: "https://lifttrackr.onrender.com",
    techStack: [
      { label: "Python", color: "#f7cc42" },
      { label: "Django", color: "#0c4b33" },
    ],
  },
  {
    label: "shorty",
    image: shortySrc,
    link: "https://shorty-url-app.onrender.com/",
    techStack: [
      { label: "Python", color: "#f7cc42" },
      { label: "Django", color: "#0c4b33" },
    ],
  },
  {
    label: "chirp",
    image: chirpSrc,
    link: "https://chirp-blog.onrender.com/",
    techStack: [
      { label: "Python", color: "#f7cc42" },
      { label: "Django", color: "#0c4b33" },
    ],
  },
];

export const skills = [
  { label: "Javascript", image: "javascript.svg" },
  { label: "Python", image: "python.svg" },
  { label: "Vue", image: "vuejs.svg" },
  { label: "Django", image: "django.svg" },
  { label: "HTML", image: "html5.svg" },
  { label: "CSS", image: "css3.svg" },
  { label: "Github", image: "github.svg" },
  // {label: "C#", image: ""},
];
