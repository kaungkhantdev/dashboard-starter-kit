import { ChartArea, DataTable, SectionCards } from '@/features/dashboard'
import data from "../utils/data.json"

const Dashboard = () => {
  return (
    // <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
    //     <div className="grid auto-rows-min gap-4 md:grid-cols-3">
    //       <div className="aspect-video rounded-xl bg-muted/50" />
    //       <div className="aspect-video rounded-xl bg-muted/50" />
    //       <div className="aspect-video rounded-xl bg-muted/50" />
    //     </div>
    //     <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    // </div>
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 pb-2 md:gap-6 md:pb-4">
          <SectionCards />
          <div className="px-4 lg:px-6">
            <ChartArea />
          </div>
          <DataTable data={data} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
