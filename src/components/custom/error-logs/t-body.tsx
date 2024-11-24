import React from 'react'
import {
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { HttpMethodBadge } from './http-methods'
import ActionButton from './action'

type ErrorLogTableData = {
    timestamp: string
    apiEndpoint: string
    method: "default" | "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | null | undefined;
    errorMessage: string
    action: string
}

type Props = {
    tableData: ErrorLogTableData[]
}

const TBody: React.FC<Props> = ({ tableData }) => {
    return (
        <TableBody>
            {tableData.map((data) => (
                <TableRow key={data.timestamp}>
                    <TableCell className="font-medium">{data.timestamp}</TableCell>
                    <TableCell>{data.apiEndpoint}</TableCell>
                    <TableCell>
                        <HttpMethodBadge variant={data.method}>
                            {data.method}
                        </HttpMethodBadge>
                    </TableCell>
                    <TableCell className="text-right">{data.errorMessage}</TableCell>
                    <TableCell className="text-right"><ActionButton /></TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}

export default TBody
