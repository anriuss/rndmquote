"use client";

import { useCallback, useEffect, useState } from "react";
import { Blockquote, BlockquoteAuthor } from "~components/ui/blockquote";
import { getQuotes } from "./action";
import type { QuoteResponse } from "./type";

interface Props {
  initialQuotes: QuoteResponse[];
}

export function QuoteClient({ initialQuotes }: Props) {
  const [quotes, setQuotes] = useState(initialQuotes);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const currentQuote = quotes[currentIndex];

  const fetchQuotes = useCallback(async () => {
    setIsLoading(true);
    try {
      const newQuotes = await getQuotes();
      setQuotes(newQuotes);
      setCurrentIndex(0);
    } catch (error) {
      console.error("Failed to fetch new quotes:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchQuotes();
  }, [fetchQuotes]);

  const handleClick = () => {
    void fetchQuotes();
  };

  return (
    <div
      className="absolute inset-0 flex items-center justify-center max-md:px-4"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
      aria-label="Get a new quote"
      aria-live="polite"
    >
      <section
        className={`max-w-2xl transition-opacity duration-200 ${
          isLoading ? "opacity-50" : "opacity-100"
        }`}
      >
        <h1 className="sr-only">Random Inspirational Quote</h1>
        <Blockquote>
          {currentQuote?.content ?? "Failed to load a quote"}
          <BlockquoteAuthor>
            {currentQuote?.author ?? "Unknown Author"}
          </BlockquoteAuthor>
        </Blockquote>
      </section>
    </div>
  );
}
