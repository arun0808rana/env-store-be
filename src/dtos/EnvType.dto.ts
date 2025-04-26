import { z } from "zod";
import { handleDTOerrors } from "../utils/ErrorHandler";

export class EnvTypeDTO {
  static createSchema = z
    .object({
      name: z.string().max(255, {
        message: "EnvType name cannot be longer than 255 characters",
      }),
      project_id: z.number(),
    })
    .describe("Hello from world");

  static updateSchema = z
    .object({
      name: z
        .string()
        .max(255, {
          message: "EnvType name cannot be longer than 255 characters",
        }),
        project_id: z.number(),
    })
    .describe("Hello from world");

  static validateCreate(data: unknown) {
    try {
      return EnvTypeDTO.createSchema.parse(data);
    } catch (error) {
      handleDTOerrors(error);
    }
  }

  static validateUpdate(data: unknown) {
    try {
      return EnvTypeDTO.updateSchema.partial().parse(data);
    } catch (error) {
      handleDTOerrors(error);
    }
  }
}

export type CreateEnvTypeDTOType = z.infer<typeof EnvTypeDTO.createSchema>;
export type UpdateEnvTypeDTOType = z.infer<typeof EnvTypeDTO.updateSchema>;
