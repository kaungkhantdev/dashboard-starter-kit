import { CircleDollarSign, TrendingDownIcon, TrendingUpIcon, UserCheck, Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const data = [
  {
    id: 1,
    name: "Total Revenue",
    price: "$1,250.00",
    icon: <CircleDollarSign className=" size-4 text-primary" />,
    text: "Trending up this month",
    percentage: "+12.5%",
    perIcon: <TrendingUpIcon className="size-3" />
  },
   {
    id: 2,
    name: "New Customers",
    price: "250",
    icon: <Users className=" size-4 text-primary" />,
    text: "Down 20% this period",
    percentage: "-20%",
    perIcon: <TrendingDownIcon className="size-3" />
  },
   {
    id: 3,
    name: "Active Accounts",
    price: "4698",
    icon: <UserCheck className=" size-4 text-primary" />,
    text: "Strong user retention",
    percentage: "+20%",
    perIcon: <TrendingUpIcon className="size-3" />
  },
   {
    id: 4,
    name: "Growth Rate",
    price: "4.5%",
    icon: <TrendingUpIcon className=" size-4 text-primary" />,
    text: "Steady performance",
    percentage: "+4.5%",
    perIcon: <TrendingUpIcon className="size-3" />,
  }
]

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
      {
        data.map((item) => (
          <Card key={item.id} className="@container/card border-primary/10 gap-3 shadow-none">
            <CardHeader className="relative mb-1">
              <CardDescription>{item.name}</CardDescription>
              <CardTitle className="@[250px]/card:text-2xl text-xl font-semibold tabular-nums">
                {item.price}
              </CardTitle>
              <div className="absolute right-4 top-0 p-2 border rounded-md border-primary/5">
                {item.icon}
              </div>
            </CardHeader>
            <CardFooter className="flex items-center justify-between gap-1 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                {item.text}
              </div>
              <div className="">
                <Badge variant="outline" className="flex gap-1 rounded-full text-xs">
                  {item.perIcon}
                  {item.percentage}
                </Badge>
              </div>
            </CardFooter>
          </Card>
        ))
      }
    </div>
  )
}
