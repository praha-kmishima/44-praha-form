import { useForm, type FieldErrors } from "react-hook-form";

export type FormValues = {
  name: string;
  gender: string;
};

type RegisterReturn = {
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  ref: (instance: HTMLInputElement | null) => void;
};

type UseCustomFormReturn = {
  register: (field: keyof FormValues, options?: any) => RegisterReturn;
  handleSubmit: (cb: (data: FormValues) => void) => (e?: React.BaseSyntheticEvent) => void;
  errors: FieldErrors<FormValues>;
};

export const useCustomForm = (): UseCustomFormReturn => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onChange" });

  return {
    register,
    handleSubmit,
    errors,
  };
}