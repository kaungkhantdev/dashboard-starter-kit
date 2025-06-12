import { ShieldCheck } from "lucide-react"
const data = [
    {
        title: 'Admin Roles',
        roles: [
            {
                id: 1,
                name: "Super Administrator",
                totalUser: "23",
                icon: <ShieldCheck className=" size-4.5 text-primary" />,
                roleList: "Full admin access, including financials, reports, payouts, and disputes.",
            },
            {
                id: 2,
                name: "Administrator",
                totalUser: "20",
                icon: <ShieldCheck className=" size-4.5 text-primary" />,
                roleList: "Full admin access, including financials, reports, payouts, and disputes.",
            },
            {
                id: 3,
                name: "Secondary Administrator",
                totalUser: "12",
                icon: <ShieldCheck className=" size-4.5 text-primary" />,
                roleList: "Full admin access, including financials, reports, payouts, and disputes.",
            },
        ]

    },
    {
        title: 'Developer Roles',
        roles: [
            {
                id: 4,
                name: "Team Lead",
                totalUser: "10",
                icon: <ShieldCheck className=" size-4.5 text-primary" />,
                roleList: "Full admin access, including financials, reports, payouts, and disputes.",
            },
            {
                id: 5,
                name: "Developer",
                totalUser: "10",
                icon: <ShieldCheck className=" size-4.5 text-primary" />,
                roleList: "Granting them access to all admin controls, financial summaries, bulk reports, payouts, and disputes with view and edit permissions.",
            },
            {
                id: 6,
                name: "DevOps",
                totalUser: "10",
                icon: <ShieldCheck className=" size-4.5 text-primary" />,
                roleList: "Full admin access, including financials, reports, payouts, and disputes.",
            },
            {
                id: 7,
                name: "Ui/Ux",
                totalUser: "10",
                icon: <ShieldCheck className=" size-4.5 text-primary" />,
                roleList: "Full admin access, including financials, reports, payouts, and disputes.",
            },
        ]
    },
    {
        title: 'Support Roles',
        roles: [
            {
                id: 4,
                name: "Tester",
                totalUser: "10",
                icon: <ShieldCheck className=" size-4.5 text-primary" />,
                roleList: "Full admin access, including financials, reports, payouts, and disputes.",
            },
            {
                id: 5,
                name: "Support",
                totalUser: "10",
                icon: <ShieldCheck className=" size-4.5 text-primary" />,
                roleList: "Full admin access, including financials, reports, payouts, and disputes.",
            },
            {
                id: 6,
                name: "Content Writer",
                totalUser: "10",
                icon: <ShieldCheck className=" size-4.5 text-primary" />,
                roleList: "Granting them access to all admin controls, financial summaries, bulk reports, payouts, and disputes with view and edit permissions.",
            },
        ]
    }
]

export function RoleCards() {
  return (
    <div className="gap-4">
      {
        data.map((item) => (
          <div className=" mb-10 ">
            <div className=" mb-3 px-4 lg:px-6 ">
                <h1 className=" text-md font-medium ">{item.title}</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {item.roles.map((i) => (
                    <div className="mx-2 lg:mx-4 flex items-start gap-3 transition cursor-pointer hover:bg-primary/5 rounded-lg p-2">
                        <div className="p-2 rounded-md bg-primary/5">
                            {i.icon}
                        </div>
                        <div>
                            <h2 className="text-md font-medium tabular-nums text-primary mb-0.5">
                                    {i.name} : {i.totalUser}
                            </h2>
                            
                            {/* text  */}
                            <p className="text-sm font-normal">
                                {i.roleList}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        ))
      }
    </div>
  )
}
