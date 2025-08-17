import { StaffDataTable, StaffDetailInfo } from "@/features/staff-management";

export default function StaffDetail() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 pb-2 md:gap-6 md:pb-4">
           <div className="px-4 lg:px-6">
               <div className="flex flex-col gap-1">
                    <h1 className="text-lg font-medium">Staff Detail</h1>
                    <div className=" text-sm">
                        Manage details and update data here.
                    </div>
                </div>
           </div>
           <div className="px-4 lg:px-6">
              <StaffDetailInfo />
           </div>
           <div className="px-4 lg:px-6">
              <StaffDataTable />
           </div>
        </div>
      </div>
    </div>
  )
}
