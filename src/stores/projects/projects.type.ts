import { IProject } from "@/interface/bof.interface";

export interface IProjectState {
  projects: IProject[];
  project: string;
  type: string;
  isOpenDialog: boolean;
}

export interface IProjectStore extends IProjectState {
  addProject: (projects: IProject) => void;
  setProject: (project: string) => void;
  setType: (type: string) => void;
  setIsOpenDialog: (isOpenDialog: boolean) => void;
  reset: () => void;
}
