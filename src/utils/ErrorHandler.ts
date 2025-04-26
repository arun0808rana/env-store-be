import { z } from "zod";

export function handleDTOerrors(error: unknown) {
  if (error instanceof z.ZodError) {
    throw new Error(
      `Validation error: ${error.errors.map((e) => e.message).join(", ")}`
    );
  }
  throw error;
}
