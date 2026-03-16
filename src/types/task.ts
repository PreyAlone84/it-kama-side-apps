export type Task = {
  id: number;
  title: string;
  checked: boolean;
  createdDate: string;
  selectedId: number | null;
  setSelectedId: (id: number | null) => void;
};
