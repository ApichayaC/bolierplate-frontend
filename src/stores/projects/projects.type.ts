export interface IProjectState {
  project: string;
  type: string;
}

export interface IProjectStore extends IProjectState {
  setProject: (project: string) => void;
  setType: (type: string) => void;
  reset: () => void;
}
