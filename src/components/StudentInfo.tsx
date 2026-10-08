import { Drawer, DrawerDescription, DrawerTitle, DrawerTrigger, DrawerContent, DrawerFooter, DrawerHeader } from "./ui/drawer";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

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
            <img src="/avatar.png"></img>
          </DrawerHeader>
          <div className="pl-4">
            <DrawerTitle className="text-xl font-semibold">สุธนกิจ วงษ์ศรีจันทร์</DrawerTitle>
            <DrawerDescription>นักศึกษามหาวิทยาลัยเชียงใหม่ CPE 33</DrawerDescription>
            <div className="p-1">
              <Badge>Hobbies</Badge> Cube, Craft, Code
            </div>
            <div className="p-1">
              <Badge>Email</Badge> suthanakit_wongsrich@cmu.ac.th
            </div>
            <div className="p-1">
              <Badge>Social</Badge> fb: Suthanakit Wongsrichan
            </div>
          </div>
          <DrawerFooter>
            รหัสนักศึกษา 680610729
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      
    </div>
  );
}
