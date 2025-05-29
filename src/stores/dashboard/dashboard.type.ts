export interface IDashboardState {
  dashboard: string;
  owner: string;
  project: string;
  group: string;
}

export interface IDashboardStore extends IDashboardState {
  setDashboard: (dashboard: string) => void;
  setOwner: (owner: string) => void;
  setProject: (project: string) => void;
  setGroup: (group: string) => void;
  reset: () => void;
}
