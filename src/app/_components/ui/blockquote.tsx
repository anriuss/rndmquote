import { QuoteIcon } from "@radix-ui/react-icons";
import type { PropsWithChildren } from "react";
import { cn } from "~/lib/utils/cn";

interface BlockquoteProps extends PropsWithChildren {
  className?: string;
}

const Blockquote = ({ children, className }: BlockquoteProps) => {
  return (
    <blockquote
      className={cn(
        "relative rounded-xl border p-4 md:p-6 shadow-xl italic leading-relaxed",
        className,
      )}
    >
      <QuoteIcon className="mb-2 size-6" />
      {children}
    </blockquote>
  );
};

const BlockquoteAuthor = ({ children, className }: BlockquoteProps) => {
  return (
    <p
      className={cn(
        "mt-4 text-right font-bold not-italic text-foreground/80",
        className,
      )}
    >
      {children}
    </p>
  );
};

export { Blockquote, BlockquoteAuthor };
