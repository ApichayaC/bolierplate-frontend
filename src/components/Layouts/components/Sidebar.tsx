/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { menus } from "@/constants/bof.constant";
import { cn } from "@/lib/utils";
import { useContentStore } from "@/stores/contents/content.model";

export function AppSidebar() {
  const { content, setContent, reset } = useContentStore();

  useEffect(() => {
    reset();
  }, []);
  return (
    <Sidebar className="mt-16">
      <SidebarContent className="bg-transparent">
        <SidebarGroup>
          <SidebarGroupContent className="p-2">
            <SidebarMenu>
              {menus.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "hover:bg-gray-200 py-5 cursor-pointer",
                      item.content === content && "bg-gray-200"
                    )}
                    onClick={() => setContent(item.content)}
                  >
                    <div className="flex items-center gap-2">
                      <item.icon />
                      <span className="text-base font-normal">
                        {item.title}
                      </span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
