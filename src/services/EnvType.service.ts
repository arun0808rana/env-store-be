import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { EnvType } from "../entity/EnvType";
import {
  CreateEnvTypeDTOType,
  UpdateEnvTypeDTOType,
} from "../dtos/EnvType.dto";

export class EnvTypeService {
  static repo: Repository<EnvType>;

  constructor() {
    EnvTypeService.repo = AppDataSource.getRepository(EnvType);
  }

  static create(envType: CreateEnvTypeDTOType) {
    try {
      EnvTypeService.repo.create(envType);
    } catch (error) {
      console.error("Error in EnvTypeService.create", error);
    }
  }

  static async update(id: number, envType: UpdateEnvTypeDTOType) {
    try {
      await EnvTypeService.repo.update(id, envType);
    } catch (error) {
      console.error("Error in EnvTypeService.update", error);
    }
  }

  static async delete(id: number) {
    try {
      await EnvTypeService.repo.delete(id);
    } catch (error) {
      console.error("Error in EnvTypeService.delete", error);
    }
  }

  static async get(skip: number, take: number) {
    try {
      return await EnvTypeService.repo.findAndCount({
        skip,
        take,
      });
    } catch (error) {
      console.error("Error in EnvTypeService.get", error);
    }
  }

  static async getById(id: number) {
    try {
      return await EnvTypeService.repo.findOneBy({ id });
    } catch (error) {
      console.error("Error in EnvTypeService.getById", error);
    }
  }
}
