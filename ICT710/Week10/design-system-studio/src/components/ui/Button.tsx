import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "tertiary" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  children: ReactNode;
};

const variantClasses = {
  primary: "btn btn-primary",
  secondary: "btn btn-outline-primary",
  tertiary: "btn btn-link text-decoration-none",
  danger: "btn btn-danger",
};

const sizeClasses = {
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button className={`${variantClasses[variant]} ${sizeClasses[size]}`} disabled={disabled || loading} {...props}>
      {loading ? "Loading..." : children}
    </button>
  );
}
