import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { formatPathToTitle } from "@/utils/format"

export function SettingTabs({
    tabs,
}: {
    tabs: {
        trigger: string
        contentData: React.ElementType
    }[]
}) {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue={tabs[0].trigger}>
        <TabsList className=" bg-background ">
          {
            tabs.map((item) => (
                <TabsTrigger value={item.trigger} className=" mr-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:border-0 dark:data-[state=active]:bg-primary/10 dark:data-[state=active]:text-primary data-[state=active]:shadow-none capitalize">{formatPathToTitle(item.trigger)}</TabsTrigger>
            ))
          }
        </TabsList>
        {
            tabs.map((item) => (
            <TabsContent value={item.trigger}>
                <item.contentData />
            </TabsContent>
            ))
        }
      </Tabs>
    </div>
  )
}
