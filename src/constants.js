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

import upnextMockup from "@/assets/images/upnext-mockup.png";
import minigamesMockup from "@/assets/images/minigames-mockup.png";
import liftMockup from "@/assets/images/lift-mockup.png";
import clipperMockup from "@/assets/images/clipper-mockup-pixeltrue.png";

export const projects = [
  {
    label: "upnext",
    image: upnextMockup,
    inProgress: false,
    link: "https://upnext.iandavis.dev",
    gh: "https://github.com/davis-ian?tab=repositories&q=upnext&type=&language=&sort=",
    desc: "A movie list app to create/share movie lists and watch history",
    techStack: [
      { label: "Vue.js", color: "#3fb27f" },
      { label: "Node.js", color: "#59aa46" },
      { label: "Auth0", color: "#59aa46" },
    ],
  },
  {
    label: "minigames",
    // image: "https://iandavs.com/lifttrackr_pic.png",
    image: minigamesMockup,
    inProgress: true,
    link: "https://minigames.iandavis.dev",
    gh: "https://github.com/davis-ian/minigame",
    desc: "A place to host minigames I've created",
    techStack: [
      { label: "Python", color: "#f7cc42" },
      { label: "Django", color: "#0c4b33" },
    ],
  },
  {
    label: "thumbnail clipper",
    // image: "https://iandavs.com/lifttrackr_pic.png",
    image: clipperMockup,
    inProgress: true,
    link: "https://thumbnail.iandavis.dev",
    gh: "https://github.com/davis-ian/ffmpeg_wa",
    desc: "Generate thumbnails from video in the browser",
    techStack: [
      { label: "Python", color: "#f7cc42" },
      { label: "Django", color: "#0c4b33" },
    ],
  },
  {
    label: "lift trackr",
    // image: "https://iandavs.com/lifttrackr_pic.png",
    image: liftMockup,
    inProgress: false,
    link: "https://lifttrackr.onrender.com",
    gh: "https://github.com/davis-ian/lift-trackr",
    desc: "A workout logging app with competition leaderboards",
    techStack: [
      { label: "Python", color: "#f7cc42" },
      { label: "Django", color: "#0c4b33" },
    ],
  },
  // {
  //   label: "shorty",
  //   image: shortySrc,
  //   link: "https://shorty-url-app.onrender.com/",
  //   desc: "A url shortener",
  //   techStack: [
  //     { label: "Python", color: "#f7cc42" },
  //     { label: "Django", color: "#0c4b33" },
  //   ],
  // },
  // {
  //   label: "chirp",
  //   image: chirpSrc,
  //   link: "https://chirp-blog.onrender.com/",
  //   gh: "",
  //   desc: "A twitter clone",
  //   techStack: [
  //     { label: "Python", color: "#f7cc42" },
  //     { label: "Django", color: "#0c4b33" },
  //   ],
  // },
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
