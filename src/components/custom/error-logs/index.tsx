"use client"
import React from 'react'
import { Table } from "@/components/ui/table"
import THead from './t-head';
import TBody from './t-body';
import { ErrorLogTableData } from '@/types/type';
import { ErrorLogSlideOver } from './slide-over';
type Props = {
    tableData: ErrorLogTableData[]
}

const ErrorLogTable = ({ tableData }: Props) => {
    const [openSlideOver, setOpenSlideOver] = React.useState(false);
    const errorLog = {
        timestamp: "2024-11-22 10:45:12",
        apiEndpoint: "/api/v1/users",
        method: "GET",
        errorMessage: "User not found",
        resolutionSteps: [
            "Check if the user ID exists in the database.",
            "Verify the API request payload for correctness.",
            "Ensure the server is connected to the database.",
            "Consult the logs for additional details.",
        ],
    };
    return (
        <div>
            <Table>
                <THead />
                <TBody tableData={tableData} onRowClick={() => setOpenSlideOver(true)} />
            </Table>
            <ErrorLogSlideOver open={openSlideOver} onOpenChange={setOpenSlideOver} errorLog={errorLog} onMarkResolved={() => setOpenSlideOver(false)} />
        </div>
    )
}

export default ErrorLogTable