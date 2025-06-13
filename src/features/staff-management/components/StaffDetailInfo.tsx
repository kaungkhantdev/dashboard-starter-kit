import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2Icon } from "lucide-react";

export const StaffDetailInfo = () => {
    return (
    <div className="w-full">
        {/* Photo */}
        <div className="border-b border-gray-100 dark:border-gray-900 w-full pt-3 pb-5">
            <div className="flex items-start gap-4">
                <div>
                    <img 
                        src="https://github.com/shadcn.png"
                        alt="Profile" 
                        className="w-11 h-11 rounded-lg object-cover"
                    />
                </div>
                <div className="flex flex-col">
                    <div className=" flex gap-2 items-center">
                        <span className="text-md font-semibold">Sophie Chamberlain</span>
                        <div className=" flex items-center gap-1">
                            <Badge
                                variant="outline"
                                className=" border-0 rounded-full flex gap-1 px-1.5 text-muted-foreground [&_svg]:size-3"
                            >
                                <CheckCircle2Icon className="text-green-500 dark:text-green-400" />
                                Software Engineer
                            </Badge>
                        </div>
                    </div>
                    <p className="text-sm">contact@sophie.dev</p>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
            {/* <div className="">
                <Button variant={'outline'} size={'sm'}>Edit</Button>
            </div> */}
        </div>
        {/* Name */}
        <div className="grid grid-cols-6 border-b border-gray-100 dark:border-gray-900 w-full py-5">
            <div className="col-span-3 lg:col-span-2">
                <span className="text-sm font-medium">Name</span>
            </div>
            <div className="col-span-2 lg:col-span-3">
                <span className="text-sm">Sophie Chamberlain</span>
            </div>
            <div className="col-span-1 text-end">
                <Button variant={'outline'} size={'sm'}>Edit</Button>
            </div>
        </div>

        {/* Email Address */}
        <div className="grid grid-cols-6 border-b border-gray-100 dark:border-gray-900 w-full py-5">
            <div className="col-span-3 lg:col-span-2">
                <span className="text-sm font-medium">Email Address</span>
            </div>
            <div className="col-span-2 lg:col-span-3 overflow-hidden">
                <span className="text-sm text-wrap">hi@sophiehamberlain.com</span>
            </div>
            <div className="col-span-1 text-end">
                <Button variant={'outline'} size={'sm'}>Edit</Button>
            </div>
        </div>

        {/* Linked team account */}
        <div className="grid grid-cols-6 border-b border-gray-100 dark:border-gray-900 w-full py-5">
            <div className="col-span-3 lg:col-span-2">
                <span className="text-sm font-medium">Linked team account</span>
                <br />
                <span className="text-sm text-muted-foreground">
                    Easily switch between <br className="lg:hidden" /> them and access <br /> both accounts from any device.
                </span>
            </div>
            <div className="col-span-1 lg:col-span-3">
            <img 
                    src="https://github.com/shadcn.png"
                    alt="Profile" 
                    className="w-11 h-11 rounded-full object-cover"
                />
            </div>
            <div className="col-span-2 lg:col-span-1 text-end">
                <Button variant={'outline'} size={'sm'}>Manage Team</Button>
            </div>
        </div>
    </div>
    );
}