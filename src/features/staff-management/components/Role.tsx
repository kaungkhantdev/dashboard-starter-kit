import { ReusableDataTable } from "@/components/data-table/ReusableDataTable"
import { createColumns } from "@/components/data-table/ReusableDataTableColumns" 
import data from "../../../utils/data.json"
import { Button } from "@/components/ui/button"
import { CheckCircle2Icon, LoaderIcon } from "lucide-react"
import type { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"

interface RequestData {
  id: number
  header: string
  type: string
  status: string
  target: string
  limit: string
  reviewer: string
}

export const Role = () => {
  const reqColumns: ColumnDef<RequestData>[] = [
  {
    accessorKey: "header",
    header: "Name",
    cell: ({ row }) => {
      return <Button variant="link" className="w-fit px-0 text-left text-foreground">
                {row.original.reviewer}
              </Button>
    },
    enableHiding: false,
  },
  {
    accessorKey: "type",
    header: "Section Type",
    cell: ({ row }) => (
      <div className="w-32">
        <Badge variant="outline" className="px-1.5 text-muted-foreground">
          {row.original.type}
        </Badge>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        variant="outline"
        className="flex gap-1 px-1.5 text-muted-foreground [&_svg]:size-3"
      >
        {row.original.status === "Done" ? (
          <CheckCircle2Icon className="text-green-500 dark:text-green-400" />
        ) : (
          <LoaderIcon />
        )}
        {row.original.status}
      </Badge>
    ),
  },
  {
    accessorKey: "target",
    header: "Target",
    cell: ({ row }) => {
      return <Button variant="link" className="w-fit px-0 text-left text-foreground">
                {row.original.target}
              </Button>
    },
    enableHiding: false,
  },
  {
    accessorKey: "limit",
    header: "Limit",
    cell: ({ row }) => {
      return <Button variant="link" className="w-fit px-0 text-left text-foreground">
                {row.original.limit}
              </Button>
    },
    enableHiding: false,
  },
  ]

  const columns = createColumns<RequestData>(reqColumns)

  return (
     <ReusableDataTable<RequestData> columns={columns} data={data} />
  )
}

