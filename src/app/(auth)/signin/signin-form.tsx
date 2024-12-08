"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signinFormController } from "@/controller/signin-form-controller";

export function SigninForm() {
    const { clientId, clientSecret, errors, loading, handleInputChange, handleSubmit } = signinFormController();
    return (
        <Card className="mx-auto max-w-sm w-full">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                    Enter your client ID and client secret below to login.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="grid gap-4" onSubmit={handleSubmit}>
                    <div className="grid gap-2">
                        <Label htmlFor="client-id">Client ID</Label>
                        <Input
                            id="client-id"
                            type="text"
                            placeholder="5c133a93-8dd4-4958-847a-ae81a5e11743"
                            value={clientId}
                            onChange={(e) => handleInputChange("clientId", e.target.value)}
                        />
                        {errors.clientId && (
                            <span className="text-sm text-red-500">{errors.clientId}</span>
                        )}
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="client-secret">Client Secret</Label>
                            <Link
                                href="/forget-password"
                                className="ml-auto inline-block text-sm underline"
                            >
                                Lost your credentials?
                            </Link>
                        </div>
                        <Input
                            id="client-secret"
                            type="password"
                            placeholder="2fb5be09-8dba-481c-aaaf-5efad1d0a59c"
                            value={clientSecret}
                            onChange={(e) => handleInputChange("clientSecret", e.target.value)}
                        />
                        {errors.clientSecret && (
                            <span className="text-sm text-red-500">
                                {errors.clientSecret}
                            </span>
                        )}
                    </div>
                    <Button type="submit" className="w-full" loading={loading}>
                        {loading ? "Logging in..." : "Login"}
                    </Button>
                </form>
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/tenant-name/projects" className="underline">
                        Create an account
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}
