// stores/useSigninFormStore.ts
import { SigninFormState } from "@/types/type";
import { create } from "zustand";

export const useSigninFormStore = create<SigninFormState>((set) => ({
    clientId: "",
    clientSecret: "",
    errors: { clientId: "", clientSecret: "" },
    loading: false,
    setClientId: (clientId) => set({ clientId }),
    setClientSecret: (clientSecret) => set({ clientSecret }),
    setErrors: (errors) => set({ errors }),
    setLoading: (loading) => set({ loading }),
}));
