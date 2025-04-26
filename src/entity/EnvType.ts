import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Project } from "./Project";
import { Env } from "./Env";

@Entity("env_type")
export class EnvType {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;

  @Column({ name: "name", length: 255 })
  name: string;

  @Column({ name: "project_id" })
  project_id: number;

  @ManyToOne(() => Project, (project) => project.env_types, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "project_id" })
  project: Project;

  @OneToMany(() => Env, (env) => env.env_type)
  envs: Env[];

  @CreateDateColumn({ name: "created_at" })
  created_at: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updated_at: Date;
}
