import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { useSigninFormStore } from "@/stores/useSigninFormStore";

export function signinFormController() {
    const router = useRouter();
    const {
        clientId,
        clientSecret,
        errors,
        loading,
        setClientId,
        setClientSecret,
        setErrors,
        setLoading,
    } = useSigninFormStore();

    const validateForm = () => {
        const errors = { clientId: "", clientSecret: "" };
        if (!clientId) errors.clientId = "Client ID is required.";
        if (!clientSecret) errors.clientSecret = "Client Secret is required.";
        setErrors(errors);
        return !errors.clientId && !errors.clientSecret;
    };

    const handleInputChange = (field: "clientId" | "clientSecret", value: string) => {
        if (field === "clientId") {
            setClientId(value);
            if (errors.clientId) setErrors({ ...errors, clientId: "" });
        } else {
            setClientSecret(value);
            if (errors.clientSecret) setErrors({ ...errors, clientSecret: "" });
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!validateForm()) return;
        setLoading(true);
        try {
            const resp = await axios.post("/api/signin", { clientId, clientSecret });
            if (resp.status === 200) {
                localStorage.setItem("clientId", clientId);
                localStorage.setItem("clientSecret", clientSecret);
                router.push("/rosterly/projects");
            }
        } catch (error: any) {
            console.error("[Error] ==>>", error);
            localStorage.clear();
            if (error.response?.status === 401) {
                toast({ title: "Unauthorized", description: "Invalid client ID or secret." });
            } else if (error.response?.status === 400) {
                toast({
                    title: "Client error",
                    description: "Credentials already exist. Select an organization from the list.",
                });
            } else {
                toast({ title: "Error", description: error.message || "Unknown error occurred." });
            }
        } finally {
            setLoading(false);
        }
    };

    return {
        clientId,
        clientSecret,
        errors,
        loading,
        handleInputChange,
        handleSubmit,
    };
}
