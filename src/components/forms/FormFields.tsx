import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { cn } from "../../lib/utils";

interface BaseFieldProps {
  label: string;
  error?: FieldError;
  className?: string;
}

interface InputFieldProps extends BaseFieldProps {
  registration: UseFormRegisterReturn;
  type?: string;
  placeholder?: string;
}

interface SelectFieldProps extends BaseFieldProps {
  registration: UseFormRegisterReturn;
  options: string[];
}

interface TextAreaFieldProps extends BaseFieldProps {
  registration: UseFormRegisterReturn;
  placeholder?: string;
}

export function InputField({ label, registration, error, type = "text", placeholder, className }: InputFieldProps) {
  return (
    <label className={cn("grid gap-2 text-sm font-semibold text-ink", className)}>
      {label}
      <input
        type={type}
        placeholder={placeholder}
        className="min-h-12 min-w-0 rounded-brand border border-ink/15 bg-white px-4 text-base font-normal text-ink shadow-sm transition placeholder:text-muted/60 focus:border-ocean"
        aria-invalid={Boolean(error)}
        {...registration}
      />
      {error ? <span className="text-sm font-medium text-clay">{error.message}</span> : null}
    </label>
  );
}

export function SelectField({ label, registration, error, options, className }: SelectFieldProps) {
  return (
    <label className={cn("grid gap-2 text-sm font-semibold text-ink", className)}>
      {label}
      <select
        className="min-h-12 min-w-0 rounded-brand border border-ink/15 bg-white px-4 text-base font-normal text-ink shadow-sm transition focus:border-ocean"
        aria-invalid={Boolean(error)}
        {...registration}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? <span className="text-sm font-medium text-clay">{error.message}</span> : null}
    </label>
  );
}

export function TextAreaField({ label, registration, error, placeholder, className }: TextAreaFieldProps) {
  return (
    <label className={cn("grid gap-2 text-sm font-semibold text-ink", className)}>
      {label}
      <textarea
        rows={5}
        placeholder={placeholder}
        className="min-w-0 rounded-brand border border-ink/15 bg-white px-4 py-3 text-base font-normal text-ink shadow-sm transition placeholder:text-muted/60 focus:border-ocean"
        aria-invalid={Boolean(error)}
        {...registration}
      />
      {error ? <span className="text-sm font-medium text-clay">{error.message}</span> : null}
    </label>
  );
}
