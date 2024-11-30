"use client"
import React from 'react'
import { Table } from "@/components/ui/table"
import THead from './t-head';
import TBody from './t-body';
import { LogTableEntry } from '@/types/type';
import { ErrorLogSlideOver } from './slide-over';
import { useLogStore } from '@/stores/useLogStore';
type Props = {
    tableData: LogTableEntry[] | null
}

const ErrorLogTable = ({ tableData }: Props) => {
    const { openSlideOver, setOpenSlideOver, selectedLog, setSelectedLog } = useLogStore();
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

    const handleRowClick = async (data: LogTableEntry) => {
        setOpenSlideOver(true);
        setSelectedLog(data);
    }
    return (
        <div>
            <Table>
                <THead />
                <TBody tableData={tableData} onRowClick={handleRowClick} />
            </Table>
            <ErrorLogSlideOver open={openSlideOver} onOpenChange={setOpenSlideOver} errorLog={selectedLog} onMarkResolved={() => setOpenSlideOver(false)} />
        </div>
    )
}

export default ErrorLogTable