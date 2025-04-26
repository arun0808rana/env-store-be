import { z } from "zod";
import { handleDTOerrors } from "../utils/ErrorHandler";

export class EnvDTO {
  static createSchema = z
    .object({
      name: z.string().max(255, {
        message: "Env name cannot be longer than 255 characters",
      }),
      project_id: z.number(),
      env_type_id: z.number(),
      key: z.string(),
      value: z.string(),
    })
    .describe("Hello from world");

  static updateSchema = z
    .object({
      name: z.string().max(255, {
        message: "Env name cannot be longer than 255 characters",
      }),
      project_id: z.number(),
      env_type_id: z.number(),
      key: z.string(),
      value: z.string(),
    })
    .describe("Hello from world");

  static validateCreate(data: unknown) {
    try {
      return EnvDTO.createSchema.parse(data);
    } catch (error) {
      handleDTOerrors(error);
    }
  }

  static validateUpdate(data: unknown) {
    try {
      return EnvDTO.updateSchema.partial().parse(data);
    } catch (error) {
      handleDTOerrors(error);
    }
  }
}

export type CreateEnvDTOType = z.infer<typeof EnvDTO.createSchema>;
export type UpdateEnvDTOType = z.infer<typeof EnvDTO.updateSchema>;
