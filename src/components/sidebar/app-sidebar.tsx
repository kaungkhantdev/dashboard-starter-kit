import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  LayoutDashboard,
  Map,
  PieChart,
  Settings2,
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


// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navDashboard:{
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
    isActive: true,
  },
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      // isActive: true,
      items: [
        {
          title: "History",
          url: "/history",
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
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "/genesis",
        },
        {
          title: "Explorer",
          url: "/explorer",
        },
        {
          title: "Quantum",
          url: "/quantum",
        },
      ],
    },
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
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/general",
        },
        {
          title: "Team",
          url: "/team",
        },
        {
          title: "Billing",
          url: "/billing",
        },
        {
          title: "Limits",
          url: "/limits",
        },
      ],
    },
  ],
  navSetting: [
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
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/general",
        },
        {
          title: "Team",
          url: "/team",
        },
        {
          title: "Billing",
          url: "/billing",
        },
        {
          title: "Limits",
          url: "/limits",
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
        <NavMain items={data.navSetting} subTitle="SETTINGS" />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
