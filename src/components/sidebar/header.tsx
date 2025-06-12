import { useLocation, useNavigate } from "react-router";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";
import { Separator } from "../ui/separator";
import { SidebarTrigger } from "../ui/sidebar";
import { formatPathToTitle } from "@/utils/format";
import { Bell, Settings2 } from "lucide-react";
import { Button } from "../ui/button";

export default function Header() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    return (
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{formatPathToTitle(pathname)}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="px-4 lg:px-6 flex items-center gap-1">
            <Button variant={'ghost'} onClick={() => navigate('/setting')} className="h-8 w-8">
              <Bell className="size-4.5"/>
            </Button>
            <Button variant={'ghost'} onClick={() => navigate('/setting')} className="h-8 w-8">
              <Settings2 className="size-4.5"/>
            </Button>
          </div>
        </header>
    )
}