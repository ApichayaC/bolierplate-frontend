interface IStatus {
  lable: string;
  value: string;
}

interface IProject {
  name: string;
  key: string;
  type: string;
  lead: string;
  projectUrl: string | null;
}

export type { IStatus, IProject };
