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

export { statuses, menus };
