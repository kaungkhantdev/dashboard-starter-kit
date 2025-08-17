import { StaffDataTable } from "@/features/staff-management"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"

const Staff = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 pb-2 md:gap-6 md:pb-4">
          {/* <SectionCards /> */}
          <div className="px-4 lg:px-6 flex items-start justify-between">
            <h1 className=" text-lg font-medium ">Staff Management</h1>
            <Button variant="outline" size="sm" className="border-primary/10">
                <PlusIcon />
                <span className="hidden lg:inline">Add Staff</span>
            </Button>
          </div>
          <StaffDataTable />
        </div>
      </div>
    </div>
  )
}

export default Staff
