import { cn } from "@/lib/cn"
import { ChevronRight, Plus } from "lucide-react"
import { ReactNode } from "react"

type ButtonProps = {
  className?: string
  children: ReactNode
}

export default function Button({ className, children }: ButtonProps) {
  return (
    <button
      className={cn(
        "flex cursor-pointer items-center uppercase gap-2 text-[11px] font-sans font-light px-1 min-h-[25px] border border-[#BAACA9] text-[#806863] transition-colors duration-200",
        className
      )}
    >
      <div className="flex items-center text-[#BAACA9]">
        <Plus className="w-[10px] h-[10px]" strokeWidth={1} />
        <ChevronRight className="w-[14px] h-[14px] -ml-[6px]" strokeWidth={0.6} />
      </div>

      <span className="whitespace-nowrap">{children}</span>
    </button>
  )
}