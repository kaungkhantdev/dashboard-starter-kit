import { PlateEditor } from "@/components/editor/plate-editor"

const Editor = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 pb-2 md:gap-6 md:pb-4">
          <div className="px-4 lg:px-6">
            <PlateEditor />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editor
