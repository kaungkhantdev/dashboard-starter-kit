import { Role } from "@/features/staff-management"
import { ShieldCheck } from "lucide-react"

const RoleDetail = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 pb-2 md:gap-6 md:pb-4">
          {/* title & role */}
          <div className="px-4 lg:px-6">
            <div>
              <div className=" mb-3">
                  <h1 className="text-lg font-medium ">Developer Roles</h1>
              </div>
              <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-start gap-3 transition rounded-lg py-3">
                      <div className="p-2 rounded-md bg-primary/5">
                          <ShieldCheck className=" size-4.5 text-primary" />
                      </div>
                      <div>
                          <h2 className="text-md font-medium tabular-nums text-primary mb-0.5">
                                Developer : 20
                          </h2>
                          
                          {/* text  */}
                          <p className="text-sm font-normal">
                              Full admin access, including financials, reports, payouts, and disputes.
                          </p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
          <Role />
          {/* <div className="px-4 lg:px-6">
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default RoleDetail
