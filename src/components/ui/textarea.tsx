import * as React from "react";
import clsx from "clsx";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={clsx(
          "flex w-full bg-white px-4 py-3 text-base font-sans font-light placeholder:text-brown focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 resize-none",
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };