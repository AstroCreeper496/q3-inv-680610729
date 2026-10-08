import { useItemStore } from "@/store/dataStore";
import { categoryOptions } from "@/types/datatypes";
import {
  Laptop,
  Pencil,
  Apple,
  Shirt,
  Wrench,
  MoreHorizontal,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const iconMap = {
  Electronics: <Laptop className="h-4 w-4" />,
  Stationery: <Pencil className="h-4 w-4" />,
  Grocery: <Apple className="h-4 w-4" />,
  Clothing: <Shirt className="h-4 w-4" />,
  Tools: <Wrench className="h-4 w-4" />,
  Other: <MoreHorizontal className="h-4 w-4" />,
};

export function CategoryCards() {
  const inventory = useItemStore((state) => state.inventory);

  return (
    <div className="grid gap-2 md:grid-cols-6">
      {categoryOptions.map((category) => {
        const categoryItems = inventory.filter(
          (item) => item.category === category.value,
        );
        const categoryUnits = categoryItems.reduce(
          (acc, item) => acc + item.quantity,
          0,
        );
        const categoryValue = categoryItems.reduce(
          (acc, item) => acc + item.quantity * item.price,
          0,
        );

        return (
          <Card>
            <div className="pl-3">
              {category.label === "Electronics" 
                ? <Laptop className="h-4 w-4" />
                : category.label === "Stationery" 
                ? <Pencil className="h-4 w-4" />
                : category.label === "Grocery" 
                ? <Apple className="h-4 w-4" />
                : category.label === "Clothing" 
                ? <Shirt className="h-4 w-4" />
                : category.label === "Tools" 
                ? <Wrench className="h-4 w-4" />
                : category.label === "Other" 
                ? <MoreHorizontal className="h-4 w-4" />
                : <></>
              }
            {category.label}</div>
            <div className="font-bold text-xl pl-3">฿{categoryValue.toFixed(2)}</div>
            <div className="pl-3">{categoryUnits}{" "}units</div>
          </Card>
        );
      })}
    </div>
  );
}
