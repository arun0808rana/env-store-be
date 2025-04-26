import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Project } from "./Project";
import { EnvType } from "./EnvType";

@Entity("env")
export class Env {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;

  @Column({ name: "project_id" })
  project_id: number;

  @ManyToOne(() => Project, (project) => project.envs, { onDelete: "CASCADE" })
  @JoinColumn({ name: "project_id" })
  project: Project;

  @Column({ name: "env_type_id" })
  env_type_id: number;

  @ManyToOne(() => EnvType, (envType) => envType.envs, { onDelete: "CASCADE" })
  @JoinColumn({ name: "env_type_id" })
  env_type: EnvType;

  @Column({ name: "key", type: "varchar", length: 255 })
  key: string;

  @Column({ name: "value", type: "text" })
  value: string;

  @CreateDateColumn({ name: "created_at" })
  created_at: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updated_at: Date;
}
