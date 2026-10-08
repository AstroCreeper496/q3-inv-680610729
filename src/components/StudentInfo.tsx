import { Drawer, DrawerDescription, DrawerTitle, DrawerTrigger, DrawerContent, DrawerClose, DrawerFooter, DrawerHeader } from "./ui/drawer";
import { Button } from "./ui/button";

export function StudentInfo() {
  return (
    // Use Drawer component to display student information
    <div className="flex-1 p-4">
      <Drawer swipeDirection="right">
        <DrawerTrigger render={<Button className="bg-sky-500" />}>สุธนกิจ วงษ์ศรีจันทร์</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-xl font-semibold">ข้อมูลนักศึกษา</DrawerTitle>
            <DrawerDescription>Student Information</DrawerDescription>
            <img src="public/avatar.svg"></img>
          </DrawerHeader>
          <div className="p-4">{/* Content here */}</div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      
    </div>
  );
}
