import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Project } from "../entity/Project";
import { CreateProjectType, GetAllProjectType, GetByIdProjectParamsType, UpdateProjectType } from "../dtos/Project.dto";

export class ProjectService {
  static repo: Repository<Project> = AppDataSource.getRepository(Project);

  static create(project: CreateProjectType) {
    try {
      ProjectService.repo.create(project);
    } catch (error) {
      console.error("Error in Project.create", error);
    }
  }

  static async update(id: number, project: UpdateProjectType) {
    try {
      await ProjectService.repo.update(id, project);
    } catch (error) {
      console.error("Error in Project.update", error);
    }
  }

  static async delete(id: number) {
    try {
      await ProjectService.repo.delete(id);
    } catch (error) {
      console.error("Error in Project.delete", error);
    }
  }

  static async get(payload: GetAllProjectType) {
    try {
      return await ProjectService.repo.findAndCount(payload);
    } catch (error) {
      console.error("Error in Project.get", error);
    }
  }

  static async getById(payload: GetByIdProjectParamsType) {
    try {
      return await ProjectService.repo.findOneBy(payload);
    } catch (error) {
      console.error("Error in Project.getById", error);
    }
  }
}
