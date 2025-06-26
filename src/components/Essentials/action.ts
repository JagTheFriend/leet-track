"use server";

import { db } from "@lib/db";
import { actionClient } from "@lib/safe-action";
import { z } from "zod";

export const addFeedback = actionClient
  .schema(
    z.object({
      name: z.string(),
      email: z.string(),
      subject: z.string(),
      message: z.string(),
    }),
  )
  .action(async ({ parsedInput }) => {
    return await db.feedback.create({
      data: {
        name: parsedInput.name,
        email: parsedInput.email,
        subject: parsedInput.subject,
        message: parsedInput.message,
      },
    });
  });
