import { z } from "zod";
import { handleDTOerrors } from "../utils/ErrorHandler";

export class ProjectDTO {
  static createSchema = z
    .object({
      name: z.string().max(255, {
        message: "Project name cannot be longer than 255 characters",
      }),
    })
    .describe("Hello from world");

  static updateSchema = z
    .object({
      name: z
        .string()
        .max(255, {
          message: "Project name cannot be longer than 255 characters",
        })
        .optional(),
    })
    .describe("Hello from world");

  static getAllSchema = z
    .object({
      skip: z.number(),
      take: z.number(),
    })
    .describe("Hello from world");

  static getByIdParams = z.object({
    id: z.number(),
  });

  static updateParams = z.object({
    id: z.number(),
  });

  static validateCreate(data: unknown) {
    try {
      return ProjectDTO.createSchema.parse(data);
    } catch (error) {
      handleDTOerrors(error);
    }
  }

  static validateUpdate(data: unknown) {
    try {
      return ProjectDTO.updateSchema.partial().parse(data);
    } catch (error) {
      handleDTOerrors(error);
    }
  }

  static validateUpdateParams(data: unknown) {
    try {
      return ProjectDTO.updateParams.parse(data);
    } catch (error) {
      handleDTOerrors(error);
    }
  }

  static validateGetAll(data: unknown) {
    try {
      return ProjectDTO.getAllSchema.parse(data);
    } catch (error) {
      handleDTOerrors(error);
    }
  }

  static validateGetByIdParams(data: unknown) {
    try {
      return ProjectDTO.getByIdParams.parse(data);
    } catch (error) {
      handleDTOerrors(error);
    }
  }
}

export type CreateProjectType = z.infer<typeof ProjectDTO.createSchema>;
export type UpdateProjectType = z.infer<typeof ProjectDTO.updateSchema>;
export type GetAllProjectType = z.infer<typeof ProjectDTO.getAllSchema>;
export type GetByIdProjectParamsType = z.infer<typeof ProjectDTO.getByIdParams>;
export type UpdateProjectParamsType = z.infer<typeof ProjectDTO.updateParams>;