"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { useAuth } from "@/context/AuthContext";

const schema = yup
  .object({
    name: yup.string().min(5, "نام و نام خانوادگی نامعتبر است").max(50).required("نام و نام خانوادگی الزامی است"),
    email: yup.string().email("ایمیل نا معتبر است").required("ایمیل الزامی است"),
    password: yup.string().required("رمز عبور الزامی است"),
  })
  .required();

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { signup } = useAuth();
  const onSubmit = async (values) => {
    await signup(values);
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">ثبت نام</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <RHFTextField label={"نام و نام خانوادگی"} name={"name"} register={register} isRequired errors={errors} />
        <RHFTextField label={"ایمیل"} name={"email"} register={register} dir="ltr" errors={errors} />
        <RHFTextField
          label={"رمز عبور"}
          name={"password"}
          type="password"
          dir="ltr"
          register={register}
          isRequired
          errors={errors}
        />
        <Button type="submit" variant="primary" className="w-full">
          ثبت نام
        </Button>
      </form>
    </div>
  );
}
