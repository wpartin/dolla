import image1 from "../../images/svg-2.svg";
import image2 from "../../images/svg-1.svg";
import image3 from "../../images/svg-3.svg";
// couldn't use require() below, it resulted in a broken image??

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Premium Bank",
  headline: "Do you like throwing away your money?",
  description:
    "If you don't, then we invite you to stop wasting your money on big bank fees.",
  buttonLabel: "Get Started",
  imgStart: false,
  // tried require() here but as stated it was broken
  img: image1,
  alt: "Wallet",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Incredible Availability",
  headline: "Do you need access to cash anywhere?",
  description:
    "We partner with every major ATM to allow you access to your money when you need it.",
  buttonLabel: "See How",
  imgStart: true,
  // tried require() here but as stated it was broken
  img: image2,
  alt: "Car",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "signnup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Unrivaled Protection",
  headline: "We utilize incredible account protection",
  description:
    "Our app & website use only the latest encryption technologies to keep you, and your money, safe.",
  buttonLabel: "Let's Bank",
  imgStart: false,
  // tried require() here but as stated it was broken
  img: image3,
  alt: "Signup",
  dark: false,
  primary: false,
  darkText: true,
};
