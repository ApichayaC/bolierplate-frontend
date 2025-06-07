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
    value: "sofeware",
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

// Project Table Data
const PROJECTS = [
  {
    name: "Boilerplate",
    key: "ECS",
    type: "Team-managed software",
    lead: "Apichaya Chuenjit",
    projectUrl: null, // Replace with actual URL if known
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

export { statuses, menus, product_types, PROJECTS, DASHBOARDS };
