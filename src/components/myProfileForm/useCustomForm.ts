import { 
  useForm, 
  type FieldErrors, 
  type UseFormRegister, 
  type UseFormHandleSubmit 
} from "react-hook-form";

export type FormValues = {
  name: string;
  gender: string;
};

type UseCustomFormReturn = {
  register: UseFormRegister<FormValues>;
  handleSubmit: UseFormHandleSubmit<FormValues>;
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
};