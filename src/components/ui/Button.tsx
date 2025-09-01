import clsx from "clsx"
import { ChevronRight, Plus } from "lucide-react"
import { ReactNode } from "react"

type ButtonProps = {
  className?: string
  children: ReactNode
}

export default function Button({ className, children }: ButtonProps) {
  return (
    <button
      className={clsx(
        "flex cursor-pointer items-center text-[11px] font-sans font-light px-2 py-[6px] w-[114px] h-[25px] border border-[#BAACA9] text-[#806863] transition-colors duration-200",
        className
      )}
    >
      <div className="flex items-center text-[#BAACA9]">
        <Plus className="w-[10px] h-[10px]" strokeWidth={1} />
        <ChevronRight
          className="w-[14px] h-[14px] -ml-[6px]"
          strokeWidth={0.6}
        />
      </div>

      <span>{children}</span>
    </button>
  );
}