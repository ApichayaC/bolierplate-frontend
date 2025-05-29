import React from "react";
import { cn } from "@/lib/utils";
import { LogOut, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSignInStore } from "@/stores/signIn/signIn.model";
import { useRouter } from "next/navigation";

const Account = () => {
  const router = useRouter();
  const { reset } = useSignInStore();
  const handleLogout = () => {
    reset();
    router.push("/");
  };
  return (
    <div>
      <div className="flex flex-row items-center gap-2 border-b p-3">
        <Avatar className="w-10 h-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-base font-semibold text-gray-500">Chalie Ngo</p>
      </div>
      <div className="p-3">
        <div
          className={cn(
            "flex flex-row items-center gap-2",
            "hover:bg-gray-100 rounded-md w-full p-2 cursor-pointer text-sm font-normal"
          )}
        >
          <Users width={16} height={16} strokeWidth={2.5} />
          Switch account
        </div>
        <div
          className={cn(
            "flex flex-row items-center gap-2",
            "hover:bg-gray-100 rounded-md w-full p-2 cursor-pointer text-sm font-normal"
          )}
          onClick={handleLogout}
        >
          <LogOut width={16} height={16} strokeWidth={2.5} />
          Log out
        </div>
      </div>
    </div>
  );
};

export default Account;
