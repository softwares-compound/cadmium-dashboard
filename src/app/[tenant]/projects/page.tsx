import * as React from "react"
import { ProjectCardProps } from "@/types/type";
import ProjectCard from "@/components/custom/project-card";
import AddProject from "@/components/custom/app-project";



const projects: ProjectCardProps[] = [
    {
        src: "/rosterly.png",
        alt: "project logo",
        title: "Rosterly.io",
        description: "A collection of popular software built with Next.js",
        href: "/rdx/rosterly/dashboard",
        data: [
            {
                name: "New Error",
                value: "03",
                variant: "destructive",
            },
            {
                name: "Code Suggestion",
                value: "07",
                variant: "default",
            },
            {
                name: "Total Error Resolved",
                value: "281",
                variant: "success",
            },
        ],
    },
    {
        src: "/software_compound_logo.png",
        alt: "project logo",
        title: "Softwares compound",
        description: "A collection of popular software built with Next.js",
        href: "/rdx/software-compound/dashboard",
        data: [
            {
                name: "New Error",
                value: "None",
                variant: "success",
            },
            {
                name: "Code Suggestion",
                value: "12",
                variant: "default",
            },
            {
                name: "Total Error Resolved",
                value: "322",
                variant: "success",
            },
        ],
    },
]

export default function Projects() {
    return (
        <div className="mt-[10vh]">
            <div className="flex flex-1 flex-col justify-center gap-4 p-4 pt-0">
                <div className="grid auto-rows-min gap-4 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            src={project.src}
                            alt={project.alt}
                            href={`/rosterly/673d6733caa30090be5b410d/dashboard`}
                            data={project.data}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-4 p-4 ">
                <AddProject />
            </div>
        </div>
    );
}

