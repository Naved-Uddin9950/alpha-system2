import React, { useEffect, useState } from "react";
import { Activity, Award, Home, Target, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";

const items = [
    { title: "Home", url: "/", icon: Home },
    { title: "Status", url: "/status", icon: Activity },
    { title: "Skills", url: "/skills", icon: Award },
    { title: "Missions", url: "/missions", icon: Target },
    { title: "Settings", url: "/settings", icon: Settings },
];

const AppSidebar = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem("theme") === "dark";
        setDarkMode(isDarkMode);
        document.documentElement.classList.toggle("dark", isDarkMode);
    }, []);

    // Toggle theme function
    const toggleTheme = () => {
        const newTheme = !darkMode;
        setDarkMode(newTheme);
        document.documentElement.classList.toggle("dark", newTheme);
        localStorage.setItem("theme", newTheme ? "dark" : "light");
    };

    return (
        <Sidebar className="border-none shadow-dark">
            <SidebarContent className="transition-colors bg-white dark:bg-gray-900 text-black dark:text-white">
                <SidebarGroup>
                    <SidebarGroupLabel className="text-gray-500 text-xl my-4 flex items-center gap-2">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        Shinigami
                        <Switch checked={darkMode} onCheckedChange={toggleTheme} />
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link to={item.url} className="flex items-center gap-2 p-2 text-black dark:text-white dark:hover:bg-gray-800 rounded-md">
                                            <item.icon className="w-5 h-5" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};

export default AppSidebar;