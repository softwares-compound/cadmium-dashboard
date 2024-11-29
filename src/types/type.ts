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

export interface SigninFormState {
    clientId: string;
    clientSecret: string;
    errors: { clientId: string; clientSecret: string };
    loading: boolean;
    setClientId: (clientId: string) => void;
    setClientSecret: (clientSecret: string) => void;
    setErrors: (errors: { clientId: string; clientSecret: string }) => void;
    setLoading: (loading: boolean) => void;
}

export type LogTableEntry = {
    id: string;
    organizationId: string;
    applicationId: string;
    error: string;
    url: string;
    method: "default" | "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | null | undefined
    createdAt: string;
    updatedAt: string;
};

// Example: Array of log entries
export type LogData = LogTableEntry[];
