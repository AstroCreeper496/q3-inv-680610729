interface DropdownOption {
  id: string | number;
  label: string;
  value: string | number;
}

export const categoryOptions: DropdownOption[] = [
  { id: 1, label: "Electronics", value: "Electronics" },
  { id: 2, label: "Stationery", value: "Stationery" },
  { id: 3, label: "Grocery", value: "Grocery" },
  { id: 4, label: "Clothing", value: "Clothing" },
  { id: 5, label: "Tools", value: "Tools" },
  { id: 6, label: "Other", value: "Other" },
];

export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  category: "Electronics" | "Stationery" | "Grocery" | "Clothing" | "Tools" | "Other";
  date: string;
}
