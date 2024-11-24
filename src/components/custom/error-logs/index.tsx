import React from 'react'
import { Table } from "@/components/ui/table"
import THead from './t-head';
import TBody from './t-body';
import { ErrorLogTableData } from '@/app/types/type';
type Props = {
    tableData: ErrorLogTableData[]
}

const ErrorLogTable = ({ tableData }: Props) => {
    return (
        <div>
            <Table>
                <THead />
                <TBody tableData={tableData} />
            </Table>
        </div>
    )
}

export default ErrorLogTable