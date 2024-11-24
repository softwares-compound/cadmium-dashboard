import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const httpMethodBadgeVariants = cva(
    "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default: "border-transparent bg-primary text-primary-foreground shadow",
                GET: "border-success bg-success-light text-success dark:text-success-foreground shadow",
                POST: "border-primary-foreground bg-primary text-primary-foreground shadow",
                PUT: "border-yellow-600 bg-yellow-600/20 text-yellow-600 shadow",
                PATCH: "border-secondary-foreground bg-secondary text-secondary-foreground shadow",
                DELETE:
                    "border-destructive bg-destructive-light text-destructive dark:text-destructive-foreground shadow",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface HttpMethodBadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof httpMethodBadgeVariants> { }

function HttpMethodBadge({
    className,
    variant,
    ...props
}: HttpMethodBadgeProps) {
    return (
        <div
            className={cn(httpMethodBadgeVariants({ variant }), className)}
            {...props}
        />
    );
}

export { HttpMethodBadge, httpMethodBadgeVariants };
