"use client"
export default function ProjectLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    localStorage.clear()
    return (
        <>
            {children}
        </>
    );
}
