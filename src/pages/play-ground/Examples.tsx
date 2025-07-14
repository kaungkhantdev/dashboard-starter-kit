import { CardsDemo } from "@/components/cards"

const Examples = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 pb-2 md:gap-6 md:pb-4">
            <div className="px-4 lg:px-6">
               <div className="flex flex-col gap-1">
                    <h1 className="text-lg font-medium">Examples</h1>
                    <div className=" text-sm">
                        A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code.
                    </div>
                </div>
           </div>
           <div className="px-4 lg:px-6">
             <CardsDemo />
           </div>
        </div>
      </div>
    </div>
  )
}

export default Examples
