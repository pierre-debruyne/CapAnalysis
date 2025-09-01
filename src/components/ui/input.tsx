import * as React from "react";
import clsx from "clsx";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <div className="relative">
        <input
          ref={ref}
          type={type}
          className={clsx(
            "flex bg-white px-[21px] py-3 text-base font-light placeholder:text-brown transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };