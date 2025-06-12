import { RoleCards } from "@/features/staff-management"

const Role = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 pb-2 md:gap-6 md:pb-4">
            <RoleCards />
          {/* <div className="px-4 lg:px-6">
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Role
