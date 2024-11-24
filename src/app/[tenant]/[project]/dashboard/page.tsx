import { SidebarTrigger } from "@/components/ui/sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

const tableData = [
    {
        timestamp: "2024-11-22 10:45:12",
        apiEndpoint: "/api/v1/users",
        method: "GET",
        errorMessage: "User not found",
        action: "Retry",
    },
    {
        timestamp: "2024-11-22 10:50:25",
        apiEndpoint: "/api/v1/login",
        method: "POST",
        errorMessage: "Invalid credentials",
        action: "Retry",
    },
    {
        timestamp: "2024-11-22 11:05:00",
        apiEndpoint: "/api/v1/products",
        method: "GET",
        errorMessage: "Internal server error",
        action: "Report",
    },
    {
        timestamp: "2024-11-22 11:15:42",
        apiEndpoint: "/api/v1/orders",
        method: "PUT",
        errorMessage: "Unauthorized access",
        action: "Reauthenticate",
    },
    {
        timestamp: "2024-11-22 11:20:10",
        apiEndpoint: "/api/v1/cart",
        method: "DELETE",
        errorMessage: "Resource not found",
        action: "Retry",
    },
];





export default function Dashboard() {
    return (
        <div className="">
            {/* <ToggleTheme /> */}
            <header className="flex h-16 shrink-0 items-center gap-2">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="#">
                                    Building Your Application
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="aspect-video rounded-xl dark:bg-muted bg-card-2" />
                    <div className="aspect-video rounded-xl dark:bg-muted bg-card-2" />
                    <div className="aspect-video rounded-xl dark:bg-muted bg-card-2" />
                </div>
                <div className="flex-1 py-2 rounded-xl dark:bg-muted bg-card-2" >
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Timestamp</TableHead>
                                <TableHead>API endpoint</TableHead>
                                <TableHead>Method</TableHead>
                                <TableHead className="text-right">Error message</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {tableData.map((data) => (
                                <TableRow key={data.timestamp}>
                                    <TableCell className="font-medium">{data.timestamp}</TableCell>
                                    <TableCell>{data.apiEndpoint}</TableCell>
                                    <TableCell>{data.method}</TableCell>
                                    <TableCell className="text-right">{data.errorMessage}</TableCell>
                                    <TableCell className="text-right">{data.action}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className="mt-4">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" isActive>
                                        2
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">3</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </div>
        </div>
    );
}
