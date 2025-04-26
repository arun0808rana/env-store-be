import { NextFunction, Request, Response, Router } from "express";
import { ProjectDTO } from "../dtos/Project.dto";
import { ProjectService } from "../services/Project.service";
import ROUTES from "../utils/Routes";
const ProjectRouter = Router();
const ProjectRoutes = ROUTES.PROJECT;

export class ProjectController {
  static initializeRoutes() {
    ProjectRouter.post(
      ProjectRoutes.CREATE.PATH,
      ProjectController.create.bind(ProjectController)
    );
    ProjectRouter.get(
      ProjectRoutes.GET_ALL.PATH,
      ProjectController.getAll.bind(ProjectController)
    );
    ProjectRouter.get(
      ProjectRoutes.GET_BY_ID.PATH,
      ProjectController.getById.bind(ProjectController)
    );
    ProjectRouter.put(
      ProjectRoutes.UPDATE.PATH,
      ProjectController.update.bind(ProjectController)
    );
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const validatedData = ProjectDTO.validateCreate(req.body);
      const response = ProjectService.create(validatedData);
      return res.json(response);
    } catch (error) {
      console.error("Error in ProjectController.create", error);
      next(error);
    }
  }

  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const validatedData = ProjectDTO.validateGetAll(req.body);
      const response = await ProjectService.get(validatedData);
      return res.json(response);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const validatedData = ProjectDTO.validateGetByIdParams(req.params);
      const response = await ProjectService.getById(validatedData);
      return res.json(response);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const validatedParams = ProjectDTO.validateUpdateParams(req.params);
      const validatedData = ProjectDTO.validateUpdate(req.body);
      const response = await ProjectService.update(
        validatedParams.id,
        validatedData
      );
      return res.json(response);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}

ProjectController.initializeRoutes();
export default ProjectRouter;
