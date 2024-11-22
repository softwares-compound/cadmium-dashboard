import { FileCode2, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Typography } from "../ui/typography";


export default function AddProject() {
    return (
        <div className="text-center">
            <FileCode2 className="mx-auto h-12 w-12 text-gray-400" />
            <Typography variant="sm" className="mt-2 font-semibold">
                New projects
            </Typography>
            <Typography variant="sm" className="mt-1 text-muted-foreground">
                Get started by creating a new project.
            </Typography>
            <div className="mt-6">
                <Button>
                    <Plus aria-hidden="true" className="-ml-0.5 mr-1.5 size-5" />
                    New Project
                </Button>
            </div>
        </div>
    );
}
