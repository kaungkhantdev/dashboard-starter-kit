import { AccountContent, AppearanceContent, GeneralContent, SettingTabs } from "@/features/setting";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  tabs: [
    {
      trigger: "general",
      contentData: GeneralContent,
    },
    {
      trigger: "account",
      contentData: AccountContent,
    },
    {
      trigger: "appearance",
      contentData: AppearanceContent,
    },
  ],
}

export default function Setting() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 pb-2 md:gap-6 md:pb-4">
            <div className="px-4 lg:px-6">
               <div className="flex flex-col gap-1">
                    <h1 className="text-lg font-medium">Setting Management</h1>
                    <div className=" text-sm">
                        Manage your details and personal perferences here.
                    </div>
                </div>
           </div>
           <div className="px-4 lg:px-6">
              <SettingTabs tabs={data.tabs} />
           </div>
        </div>
      </div>
    </div>
  )
}
