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
import { Typography } from "@/components/ui/typography";
import TablePagination from "@/components/custom/error-logs/table-pagination";
import ErrorLogTable from "@/components/custom/error-logs";
import { LogTableEntry } from "@/types/type";
import { ErrorLogChart } from "@/components/custom/error-logs/log-chart";
import NumericStats from "@/components/custom/error-logs/numeric-stats";
import ReloadWithTimestamp from "@/components/custom/last-reload";
import { fetchLogTableData } from "@/lib/fetch-log-table-data";

export default async function Dashboard() {
    const tableData: LogTableEntry[] | null = await fetchLogTableData();

    return (
        <div className="">
            {/* <ToggleTheme /> */}
            <header className="flex h-16 shrink-0 items-center gap-2">
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="/tenant/projects/">
                                        Projects
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Rosterly</BreadcrumbPage>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Log analysis</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    <div>
                        <ReloadWithTimestamp />
                    </div>
                </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="grid auto-rows-min gap-4 grid-cols-1 md:grid-cols-3">
                    <div className="rounded-xl dark:bg-card-2 bg-card-2 col-span-1 md:col-span-1">
                        <NumericStats />
                    </div>
                    <div className="rounded-xl dark:bg-card-2 bg-card-2 col-span-1 md:col-span-2  border-none ring-0">
                        <ErrorLogChart />
                    </div>
                </div>
                <div className="flex-1 py-2 rounded-xl dark:bg-card-2 bg-card-2" >
                    <Typography variant="xl" className=" px-2 py-2 ">Error logs</Typography>
                    {
                        tableData === null &&
                        <Typography variant="sm" className="text-muted-foreground px-2 py-8">No logs found.</Typography>
                    }
                    <ErrorLogTable tableData={tableData} />
                    <div className="mt-4">
                        <TablePagination />
                    </div>
                </div>
            </div>
        </div>
    );
}

