import {file, file1, file2, file3} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    link: "/",
  },
  {
    id: "about-us",
    title: "About Us",
    link: "/aboutus",
  },
  {
    id: "service",
    title: "Service",
    link: "service",
  },
  {
    id: "contact",
    title: "Contacts",
    link: "contact",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: file,
    title: "React Note App",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
      link : "/service/notesapp"
  },
  {
    id: "feature-2",
    icon: file1,
    title: "Acoordion",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
      link : "/service/accordion"
  },
  {
    id: "feature-3",
    icon: file2,
    title: "Pokemon Api",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
      link: "/service/pokemongame"
  },
  {
    id: "feature-3",
    icon: file3,
    title: "React Speed Typometer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
      link : "/service/typechecker"
  }
];