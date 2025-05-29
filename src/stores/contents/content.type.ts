export interface IContentState {
  content: string;
}

export interface IContentStore extends IContentState {
  setContent: (content: string) => void;
  reset: () => void;
}
