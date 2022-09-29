export let AgeGroup: Array<AgeGroups> = [
    {
        id: "1",
        name: "Kids",
      },
  {
    id: "2",
    name: "Adults",
  },
  {
    id: "3",
    name: "Senior",
  },
  {
    id: "4",
    name: "Kids and Families",
  },
];

export type AgeGroups = {
  id: string;
  name: string;
};
