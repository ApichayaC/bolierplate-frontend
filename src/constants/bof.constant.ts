const statuses = [
  {
    lable: "Todo",
    value: "todo",
  },
  {
    lable: "In Progress",
    value: "inprogress",
  },
  {
    lable: "Done",
    value: "done",
  },
];

import {
  Home,
  PanelsTopLeft,
  Presentation,
  Settings,
  SquareKanban,
} from "lucide-react";

const menus = [
  {
    title: "Home",
    content: "home",
    icon: Home,
  },
  {
    title: "Plans",
    content: "plans",
    icon: SquareKanban,
  },
  {
    title: "Projects",
    content: "projects",
    icon: Presentation,
  },
  {
    title: "Dashboards",
    content: "dashboards",
    icon: PanelsTopLeft,
  },

  {
    title: "Settings",
    content: "settings",
    icon: Settings,
  },
];

const product_types = [
  {
    lable: "Business Projects",
    value: "business",
  },
  {
    lable: "Software Projects",
    value: "software",
  },
  {
    lable: "Product Discovery",
    value: "discovery",
  },
  {
    lable: "Service Mangement",
    value: "service",
  },
];

const types = [
  {
    lable: "Team-managed business",
    value: "business",
  },
  {
    lable: "Team Managed Project",
    value: "software",
  },
  {
    lable: "Product Discovery",
    value: "discovery",
  },
  {
    lable: "Service management",
    value: "service",
  },
];

// Project Table Data
const PROJECTS = [
  {
    name: "Boilerplate",
    key: "BOI",
    type: "software",
    lead: "Apichaya Chuenjit",
    projectUrl: null, // Replace with actual URL if known
  },
  {
    name: "My Discovery Project",
    key: "MDP",
    type: "discovery",
    lead: "Apichaya Chuenjit",
    projectUrl: null,
  },
];

// Dashboard Table Data
const DASHBOARDS = [
  {
    name: "Default dashboard",
    owner: null, // Owner name not shown in the image
    viewers: "Public",
    editors: "Private",
    starredBy: "0 people",
  },
];

export { statuses, menus, product_types, types, PROJECTS, DASHBOARDS };
