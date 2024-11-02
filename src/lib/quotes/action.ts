"use server";

import type { QuoteResponse } from "./type";

export async function getQuotes() {
  const res = await fetch("http://api.quotable.io/quotes/random?limit=100", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch quotes");
  return res.json() as Promise<QuoteResponse[]>;
}
