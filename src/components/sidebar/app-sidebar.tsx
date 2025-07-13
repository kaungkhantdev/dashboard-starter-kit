import * as React from "react"
import {
  // AudioWaveform,
  BookOpen,
  Bot,
  // Command,
  Frame,
  // GalleryVerticalEnd,
  LayoutDashboard,
  Map,
  PieChart,
  Settings2,
  Shield,
  ShoppingBag,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/sidebar/nav-main"
// import { NavProjects } from "@/components/sidebar/nav-projects"
import { NavUser } from "@/components/sidebar/nav-user"
import { TeamSwitcher } from "@/components/sidebar/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavDashboard } from "./nav-dashboard"
import { Logo } from "../common/Logo"
import { NavSetting } from "./nav-setting"


// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: Logo,
      plan: "Enterprise",
    },
    // {
    //   name: "Acme Corp.",
    //   logo: AudioWaveform,
    //   plan: "Startup",
    // },
    // {
    //   name: "Evil Corp.",
    //   logo: Command,
    //   plan: "Free",
    // },
  ],
  navDashboard: {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
    isActive: true,
  },
  navSetting: {
    title: "Setting",
    url: "/setting",
    icon: Settings2,
  },
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      // isActive: true,
      items: [
        {
          title: "Editor",
          url: "/editor",
        },
        {
          title: "Starred",
          url: "/starred",
        },
        {
          title: "Settings",
          url: "/settings",
        },
      ],
    },
    {
      title: "Staff Management",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Staff",
          url: "/staff-management",
        },
        {
          title: "Staff Detail",
          url: "/staff-detail",
        },
        {
          title: "Role",
          url: "/role",
        },
        {
          title: "Role Detail",
          url: "/role-detail",
        },
        {
          title: "Permission",
          url: "/permission",
        },
      ],
    },
    {
      title: "E-Commerce",
      url: "#",
      icon: ShoppingBag,
      items: [
        {
          title: "Overview",
          url: "/overview",
        },
        {
          title: "Setting",
          url: "/account-setting",
        },
      ],
    },
    {
      title: "Authentication",
      url: "#",
      icon: Shield,
      items: [
        {
          title: "Register",
          url: "/register",
        },
        {
          title: "Login",
          url: "/login",
        },
        {
          title: "Forgot Password",
          url: "/forgot-password",
        },
        {
          title: "New Password",
          url: "/new-password",
        },
      ],
    },
  ],
  navDocumentation: [
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "/introduction",
        },
        {
          title: "Get Started",
          url: "/get-started",
        },
        {
          title: "Tutorials",
          url: "/tutorials",
        },
        {
          title: "Changelog",
          url: "/changelog",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "/projects/design-engineering",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "/projects/sales-marketing",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "/projects/travel",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavDashboard item={data.navDashboard}/>
        <NavMain items={data.navMain} subTitle="MAIN MENU" />
        <NavMain items={data.navDocumentation} subTitle="DOCUMENTATION" />
        <NavSetting item={data.navSetting} subTitle="SETTINGS"/>
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
