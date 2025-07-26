"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { useAuth } from "@/context/AuthContext";
import { SpinnerMini } from "@/ui/Spinner";

const schema = yup
  .object({
    email: yup.string().email("ایمیل نا معتبر است").required("ایمیل الزامی است"),
    password: yup.string().required("رمز عبور الزامی است"),
  })
  .required();

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { signin } = useAuth();
  const onSubmit = async (values) => {
    await signin(values);
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">ورود به حساب</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
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
        <div className="">
          {isLoading ? (
            <div>
              <SpinnerMini />
            </div>
          ) : (
            <Button type="submit" className="py-3 px-4 btn btn--primary rounded-xl w-full">
              ورود
            </Button>
          )}
        </div>
      </form>
      <Link href={"/signup"} className="text-secondary-500 mt-6 text-center">
        ثبت نام
      </Link>
    </div>
  );
}
