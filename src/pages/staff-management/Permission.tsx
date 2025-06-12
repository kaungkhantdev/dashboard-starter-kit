import { Button } from "@/components/ui/button"
import { PermissionCards } from "@/features/staff-management"
import { PlusIcon } from "lucide-react"

const Permission = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 pb-2 md:gap-6 md:pb-4">
          {/* title & role */}
            <div className="px-4 lg:px-6 flex items-start justify-between">
                <h1 className=" text-lg font-medium ">Permissions Management</h1>
                <Button variant="outline" size="sm" className="border-primary/10">
                    <PlusIcon />
                    <span className="hidden lg:inline">Add Permission</span>
                </Button>
            </div>
            <PermissionCards />
          {/* <div className="px-4 lg:px-6">
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Permission
