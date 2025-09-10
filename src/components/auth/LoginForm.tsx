import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginInput } from "@schemas/auth.schema";
import { toast } from "react-toastify";
import styles from "@css/Auth.module.scss";
import { useAuth } from "contexts/AuthContext";

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<LoginInput>({ resolver: zodResolver(loginSchema) });

  const { login } = useAuth();

  const onSubmit = async (input: LoginInput) => {
    try {
      await login(input);
      toast.success("Logged in!")
    } catch {
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
