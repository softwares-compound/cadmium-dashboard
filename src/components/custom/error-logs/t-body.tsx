"use client";
import React from "react";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { HttpMethodBadge } from "./http-methods";
import ActionButton from "./action";
import { ErrorLogTableData } from "@/types/type";

type Props = {
    tableData: ErrorLogTableData[];
    onRowClick?: (data: ErrorLogTableData) => void;
};

const TBody: React.FC<Props> = ({ tableData, onRowClick }) => {
    const handleRowClick = (data: ErrorLogTableData) => {
        console.log("Row clicked:", data);
        if (onRowClick) {
            onRowClick(data); // Call the parent-provided click handler
        }
    };

    return (
        <TableBody>
            {tableData.map((data, index) => (
                <TableRow
                    key={index}
                    className="cursor-pointer dark:hover:bg-muted-foreground hover:bg-accent"
                    onClick={() => handleRowClick(data)}
                >
                    <TableCell className="font-medium">{data.timestamp}</TableCell>
                    <TableCell>{data.apiEndpoint}</TableCell>
                    <TableCell>
                        <HttpMethodBadge variant={data.method}>{data.method}</HttpMethodBadge>
                    </TableCell>
                    <TableCell className="text-right">{data.errorMessage}</TableCell>
                    <TableCell
                        className="text-right"
                        onClick={(e) => e.stopPropagation()} // Prevent click event propagation
                    >
                        <ActionButton />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};

export default TBody;
