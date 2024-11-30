import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SigninForm } from "./signin-form";
import Link from "next/link";


export default function Signin() {
    return (
        <div className="flex flex-col h-screen w-full items-center justify-center px-4">
            <SigninForm />

            <div className="my-4 flex items-center justify-between gap-2 w-full max-w-sm">
                <div className="bg-muted h-[1px] w-full"></div>
                <span>or</span>
                <div className="bg-muted h-[1px] w-full"></div>
            </div>

            <Card className="mx-auto max-w-sm w-full">
                <CardHeader>
                    <CardDescription>
                        Choose saved organization.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div>
                        <Link href={`/rosterly/projects`}>Rosterly</Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
