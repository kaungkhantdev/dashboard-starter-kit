import { type LucideIcon } from "lucide-react"

import {
  SidebarGroup,
//   SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link, useLocation } from "react-router"

export function NavDashboard({
  item,
}: {
  item: {
    title: string
    url: string
    icon: LucideIcon,
  },
}) {
  const { pathname } = useLocation();
  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>{subTitle}</SidebarGroupLabel> */}
      <SidebarMenu>
        <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild 
                className="data-[is-active=true]:bg-primary/10 data-[is-active=true]:text-primary"
                data-is-active={pathname === item.url}
            >
              <Link to={item.url}>
                <item.icon />
                <span>{item.title}</span>
              </Link>
             </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}
