// RegisterForm.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterInput } from "@schemas/auth.schema";
import styles from "@css/Auth.module.scss";
// import { useAuth } from "@hooks/useAuth";
// import { toast } from "react-toastify";
// import { useNavigate } from "@tanstack/react-router";

export const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<RegisterInput>({ resolver: zodResolver(registerSchema) });

  // const { register: registerUser } = useAuth();
  // const navigate = useNavigate();

  const onSubmit = async (data: RegisterInput) => {
    try {
      // await registerUser(data.name, data.email, data.password, data.address);
      // navigate({ to: "/dashboard" });
    } catch {
      // toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <label className={styles.field}>
        Name:
        <input {...register("name")} placeholder="Your name..." />
      </label>
      {errors.name && <p>{errors.name.message}</p>}

      <label className={styles.field}>
        Email:
        <input {...register("email")} placeholder="Enter a email..." />
      </label>
      {errors.email && <p>{errors.email.message}</p>}

      <label className={styles.field}>
        Password:
        <input type="password" {...register("password")} placeholder="Create a password..." />
      </label>
      {errors.password && <p>{errors.password.message}</p>}

      <label className={styles.field}>
        Address:
        <textarea rows={1} {...register("address")} placeholder="Street, City, ZIP..." />
      </label>
      {errors.address && <p>{errors.address.message}</p>}

      <button type="submit" disabled={isSubmitting} className={styles.confirmBtn}>
        Create account
      </button>
    </form>
  );
};
