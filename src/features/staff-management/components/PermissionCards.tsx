import { Button } from "@/components/ui/button"
import { PenLine, ShieldCheck, ShieldMinus, ShieldPlus, ShieldX, Trash2 } from "lucide-react"

const data = [
    {
        id: 1,
        name: "Create",
        icon: <ShieldPlus className=" size-4.5 text-primary" />,
        description: "Full admin access, including financials, reports, payouts, and disputes.",
    },
    {
        id: 2,
        name: "Update",
        icon: <ShieldCheck className=" size-4.5 text-primary" />,
        description: "Full admin access, including financials, reports, payouts, and disputes.",
    },
    {
        id: 3,
        name: "Delete",
        icon: <ShieldX className=" size-4.5 text-primary" />,
        description: "Full admin access, including financials, reports, payouts, and disputes.",
    },
    {
        id: 4,
        name: "Read",
        icon: <ShieldMinus className=" size-4.5 text-primary" />,
        description: "Full admin access, including financials, reports, payouts, and disputes.",
    },
    {
        id: 5,
        name: "Read & Create",
        icon: <ShieldMinus className=" size-4.5 text-primary" />,
        description: "Full admin access, including financials, reports, payouts, and disputes.",
    },
    {
        id: 6,
        name: "Read & Update",
        icon: <ShieldMinus className=" size-4.5 text-primary" />,
        description: "Full admin access, including financials, reports, payouts, and disputes.",
    },
]

export function PermissionCards() {
  return (
    <div>
      <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    data.map((item) => (
                        <div key={item.id} className="mx-1 lg:mx-3 flex items-start gap-3 transition cursor-pointer hover:bg-sidebar-accent rounded-lg p-3">
                            <div className="p-2 rounded-md bg-primary/5">
                                {item.icon}
                            </div>
                            <div>
                                <h2 className="text-md font-medium tabular-nums text-primary mb-0.5">
                                    {item.name}
                                </h2>
                                
                                {/* text  */}
                                <p className="text-sm font-normal">
                                    {item.description}
                                </p>

                                <div className="flex items-center gap-1 mt-3">
                                    <Button variant="ghost"
                                            className="h-6 w-6 p-0">
                                        <PenLine className="text-primary" />
                                    </Button>
                                    <Button variant="ghost"
                                            className="h-6 w-6 p-0">
                                        <Trash2 className=" text-red-500 " />
                                    </Button>
                                </div>
                            </div>
                            
                        </div>
                    ))
                }
            </div>
          </div>
    </div>
  )
}
