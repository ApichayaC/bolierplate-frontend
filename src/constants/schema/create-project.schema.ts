import { z } from "zod";

export const createProjectSchema = z.object({
  project_name: z.string().trim().min(1, {
    message: "",
  }),
  key: z.string().trim().min(1, { message: "" }),
  type: z.string().trim().min(1, { message: "" }),
});

export type CreateProjectSchema = z.infer<typeof createProjectSchema>;
