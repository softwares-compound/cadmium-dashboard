import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { Typography } from "@/components/ui/typography";
import { DialogTitle } from "@radix-ui/react-dialog";

export interface SlideOverProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    errorLog: {
        timestamp: string;
        apiEndpoint: string;
        method: string;
        errorMessage: string;
        resolutionSteps: string[];
    };
    onMarkResolved: () => void;
}

export function ErrorLogSlideOver({
    open,
    onOpenChange,
    errorLog,
    onMarkResolved,
}: SlideOverProps) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent className="w-full sm:w-3/4 lg:w-2/4">
                <SheetHeader>
                    <DialogTitle className="text-lg font-semibold">
                        Error Details
                    </DialogTitle>
                    <SheetDescription className="">
                        Review the error details and follow the resolution steps below.
                    </SheetDescription>

                </SheetHeader>
                <div className="grid gap-4 py-4">
                    {/* Error Details */}
                    <div>
                        <Typography variant="small" className="font-semibold">
                            Timestamp
                        </Typography>
                        <Typography variant="sm" className="text-muted-foreground">
                            {errorLog.timestamp}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="small" className="font-semibold">
                            API Endpoint
                        </Typography>
                        <Typography variant="sm" className="text-muted-foreground">
                            {errorLog.apiEndpoint}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="small" className="font-semibold">
                            HTTP Method
                        </Typography>
                        <Typography variant="sm" className="text-muted-foreground">
                            {errorLog.method}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="small" className="font-semibold">
                            Error Message
                        </Typography>
                        <Typography variant="sm" className="text-muted-foreground">
                            {errorLog.errorMessage}
                        </Typography>
                    </div>

                    {/* Steps to Resolve */}
                    <div>
                        <Typography variant="small" className="font-semibold">
                            Resolution Steps
                        </Typography>
                        <ul className="list-disc pl-4 space-y-2">
                            {errorLog.resolutionSteps.map((step, index) => (
                                <li key={index}>
                                    <Typography variant="sm" className="text-muted-foreground">
                                        {step}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="button" onClick={onMarkResolved}>
                            Mark as Resolved
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}