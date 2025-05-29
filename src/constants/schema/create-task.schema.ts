import { z } from "zod";

export const createTasksSchema = z.object({
  project_name: z.string().trim().min(1, {
    message: "",
  }),
  status: z.string().trim().min(1, { message: "" }),
  description: z.string().optional(),
});

export type CreateTasksSchema = z.infer<typeof createTasksSchema>;
