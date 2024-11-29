"use client";
import React from "react";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { HttpMethodBadge } from "./http-methods";
import ActionButton from "./action";
import { LogTableEntry } from "@/types/type";
import addEllipsis from "@/lib/ellipsis";

type Props = {
    tableData: LogTableEntry[] | null;
    onRowClick?: (data: LogTableEntry) => void;
};

const TBody: React.FC<Props> = ({ tableData, onRowClick }) => {
    const handleRowClick = (data: LogTableEntry) => {
        console.log("Row clicked:", data);
        if (onRowClick) {
            onRowClick(data);
        }
    };

    return (
        <TableBody>
            {tableData && tableData.map((data, index) => (
                <TableRow
                    key={index}
                    className="cursor-pointer dark:hover:bg-muted-foreground hover:bg-accent"
                    onClick={() => handleRowClick(data)}
                >
                    <TableCell className="font-medium">{new Date(data.createdAt).toLocaleString()}</TableCell>
                    <TableCell>{data.url}</TableCell>
                    <TableCell>
                        <HttpMethodBadge variant={data.method}>{data.method}</HttpMethodBadge>
                    </TableCell>
                    <TableCell className="text-left">{addEllipsis(data.error, 200)}</TableCell>
                    <TableCell
                        className="text-right"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ActionButton />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};

export default TBody;

