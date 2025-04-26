import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Env } from "../entity/Env";
import { CreateEnvDTOType, UpdateEnvDTOType } from "../dtos/Env.dto";

export class EnvService {
  static repo: Repository<Env>;

  constructor() {
    EnvService.repo = AppDataSource.getRepository(Env);
  }

  static create(env: CreateEnvDTOType) {
    try {
      EnvService.repo.create(env);
    } catch (error) {
      console.error("Error in EnvService.create", error);
    }
  }

  static async update(id: number, env: UpdateEnvDTOType) {
    try {
      await EnvService.repo.update(id, env);
    } catch (error) {
      console.error("Error in EnvService.update", error);
    }
  }

  static async delete(id: number) {
    try {
      await EnvService.repo.delete(id);
    } catch (error) {
      console.error("Error in EnvService.delete", error);
    }
  }

  static async get(skip: number, take: number) {
    try {
      return await EnvService.repo.findAndCount({
        skip,
        take,
      });
    } catch (error) {
      console.error("Error in EnvService.get", error);
    }
  }

  static async getById(id: number) {
    try {
      return await EnvService.repo.findOneBy({ id });
    } catch (error) {
      console.error("Error in EnvService.getById", error);
    }
  }
}
