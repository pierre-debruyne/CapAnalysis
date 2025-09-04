import * as React from "react";
import { cn } from "@/lib/cn";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <label className="inline-flex items-center gap-2 cursor-pointer select-none">
        <input
          type="checkbox"
          ref={ref}
          className={cn(
            "h-[15px] w-[15px] cursor-pointer appearance-none  bg-white transition-colors focus:ring-2 focus:ring-offset-1 focus:ring-[#806863] disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...props}
        />
        {label && (
          <span className="text-sm font-sans font-light text-[#806863]">
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };