import * as React from "react"
import { cn } from "@/lib/utils"

const BentoCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl bg-surface-container-low p-7 text-on-surface shadow-sm",
      className
    )}
    {...props}
  />
))
BentoCard.displayName = "BentoCard"

export { BentoCard }
