// LoginFormSmall.tsx (zod + RHF)
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginInput } from "@schemas/auth.schema";
// import { useAuth } from "@hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "@tanstack/react-router";
import styles from "@css/Auth.module.scss";

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<LoginInput>({ resolver: zodResolver(loginSchema) });

//   const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginInput) => {
    toast.success('Submitting...')
    try {
    //   await login(data.email, data.password);
    //   navigate({ to: "/dashboard" });
    } catch {
      // server error example
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <label className={styles.field}>Email:
        <input {...register("email")} placeholder="Enter your email..." />
      </label>
      {errors.email && <p>{errors.email.message}</p>}

      <label className={styles.field}>Password:
        <input type="password" {...register("password")} placeholder="Enter your password..." />
      </label>
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit" disabled={isSubmitting} className={styles.confirmBtn}>Login</button>
    </form>
  );
};
