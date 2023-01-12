import * as React from "react";
interface InputFieldProps {
  id: string;
  type?:
    | "text"
    | "tel"
    | "number"
    | "email"
    | "password"
    | "date"
    | "datetime-local"
    | "date";
  placeholder?: string;
  autoFocus?: boolean;
  required?: boolean;
  className?: string;
  prefix?: string;
  suffix?: string;
  label?: string;
  bgVariants?: string;
  disabled?: boolean;
  name?: string;
  value?: any;
  onChange?: any;
}

export const InputField: React.FunctionComponent<InputFieldProps> = ({
  id,
  type = "text",
  placeholder,
  autoFocus = false,
  required = false,
  value,
  name,
  onChange,
  className,
  prefix,
  suffix,
  disabled = false,
}) => {
  return (
    <>
      <div className="mt-1 flex w-full items-center space-x-2 rounded-md border-0 border-transparent px-0 transition duration-500 ease-in-out md:text-sm">
        {Boolean(prefix) && (
          <span className="bg-purple-4 rounded py-0.5 px-1.5">{prefix}</span>
        )}

        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoFocus={autoFocus}
          required={required}
          disabled={disabled}
          className={`placeholder:text-mauve-7 w-full rounded-md border border-gray-500 p-0 py-4 px-3 text-xs outline-none outline-0 ring-0 autofill:text-white focus:border-0 focus:border focus:outline-none focus:outline-0 focus:ring-0 disabled:cursor-not-allowed disabled:opacity-60 md:text-sm ${className}`}
        />

        {suffix && (
          <span className="bg-purple-4 rounded py-0.5 px-1.5">{suffix}</span>
        )}
      </div>
    </>
  );
};
