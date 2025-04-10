import { INavItems } from "@/types";
import { images } from "./images";

export const navItems: INavItems[] = [
  {
    name: "Home",
    url: "/",
    active: true,
    hasSubRoute: false,
  },
  {
    name: "About",
    url: "/about",
    active: false,
    hasSubRoute: false,
  },
  {
    name: "Service",
    url: "#",
    hasSubRoute: true,
    active: false,
    subItems: [
      {
        name: "Web Design",
        url: "/service/web-design",
      },
      {
        name: "Web Development",
        url: "/service/web-development",
      },
      {
        name: "Graphic Design",
        url: "/service/graphic-design",
      },
    ],
  },
  {
    name: "contact",
    url: "/",
    active: false,
    hasSubRoute: false,
  },
];

export const companySlides = [
  {
    name: "Lapo Logo",
    image: images.lapoLogo,
  },
  {
    name: "NPF Logo",
    image: images.npfLogo,
  },
  {
    name: "Stering Logo",
    image: images.steringLogo,
  },
  {
    name: "Crusader Logo",
    image: images.crusaderLogo,
  },
  {
    name: "Nafc Logo",
    image: images.nafcLogo,
  },
  {
    name: "Nbf Logo",
    image: images.nbfLogo,
  },
  {
    name: "Military Logo",
    image: images.militaryLogo,
  },
  {
    name: "Stanbic Logo",
    image: images.stanbicLogo,
  },
  {
    name: "Arab Logo",
    image: images.arabLogo,
  },
  {
    name: "Dhexe Logo",
    image: images.dhexeLogo,
  },
  {
    name: "Santander Logo",
    image: images.santanderLogo,
  },
];

export const offeringPebbles = [
  {
    name: "Core banking \n services",
    bgStyle: "linear-gradient(to right, #0A3440E3, #05071EA6)",
  },
  {
    name: "Digital Banking & \n financial inclusion",
    bgStyle: "linear-gradient(to right, #0A0E40E3, #05071EA6)",
  },
  {
    name: "Online/mobile lending solution",
    bgStyle: "linear-gradient(to right, #400A3AE3, #05071EA1)",
  },
  {
    name: "Staff augmentation solutions",
    bgStyle: "linear-gradient(to right, #0D400AE3, #05071EA6)",
  },
  {
    name: "Internal audit solutions",
    bgStyle: "linear-gradient(to right, #40330AE3, #05071EA6)",
  },
  {
    name: "Data Warehouse",
    bgStyle: "linear-gradient(to right, #4A8C2BE3, #05071EA6)",
  },
];

export const visionMissionData = [
  {
    title: "Our Vision",
    image: images.target,
    description:
      "To be the trusted partner for businesses seeking to leverage technology to improve decision-making, unlock new opportunities, and achieve transformative growth",
  },
  {
    title: "Our Mission",
    image: images.handlens,
    description:
      "We bridge the gap between technology and business, delivering customized ICT solutions that drive efficiency, growth, and competitive advantage.",
  },
];

export const partnersSlides = [
  {
    name: "Software Group Logo",
    image: images.softwareGroup,
  },
  {
    name: "Cognizant Logo",
    image: images.cognizant,
  },
  {
    name: "Temenos Logo",
    image: images.temenos,
  },
  {
    name: "Net Info Logo",
    image: images.netInfo,
  },
  {
    name: "Tech Mahidra Logo",
    image: images.techmahidra,
  },
];

export const services = [
  "Core refresh",
  "Staff augmentation solutions",
  "Application management services",
  "Risk management & Internal audit solutions",
  "Evolution & enhancement services",
  "Data Warehouse & Business Intelligence (BI)",
  "Solution Assurance & validation",
  "Enterprise Document Management Solutions",
  "Digital Banking & financial inclusion",
  "KeySystem software testing",
  "Online/mobile lending solution",
  "Cybersecurity Solutions",
];
