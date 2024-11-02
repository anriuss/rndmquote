import { Suspense } from "react";
import { getQuotes } from "~/lib/quotes/action";
import { QuoteClient } from "~/lib/quotes/client";
import ThemeToggle from "~components/theme-toggle";

export default async function QuoteDisplay() {
  const quotes = await getQuotes();

  return (
    <main className="relative flex h-[100dvh] items-center justify-center">
      <Suspense
        fallback={
          <div className="max-w-2xl min-w-96 animate-pulse">
            <div className="h-24 bg-background/20 rounded dark:bg-foreground/80 mb-4"></div>
            <div className="h-6 w-32 bg-background/20 rounded dark:bg-foreground/80"></div>
          </div>
        }
      >
        <QuoteClient initialQuotes={quotes} />
      </Suspense>
      <ThemeToggle className="absolute bottom-4 left-4" />
    </main>
  );
}
