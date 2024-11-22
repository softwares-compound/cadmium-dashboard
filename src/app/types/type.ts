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
