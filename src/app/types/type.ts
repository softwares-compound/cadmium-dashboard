export type ProjectCardData = {
    name: string
    value: number | string
    variant?: "default" | "destructive" | "outline" | "secondary" | "success" | null | undefined
}
export type Path = string
export type ProjectCardProps = {
    src: Path
    alt: string
    title: string
    description: string
    data: ProjectCardData[]
    href: string
}

export type ErrorLogTableData = {
    timestamp: string
    apiEndpoint: string
    method: "default" | "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | null | undefined
    errorMessage: string
    action: string
}

export type ErrorLogData = {
    timestamp: string;
    apiEndpoint: string;
    method: string;
    errorMessage: string;
    resolutionSteps: string[];
}