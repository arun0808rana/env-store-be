import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { EnvType } from "./EnvType";
import { Env } from "./Env";

@Entity("project")
export class Project {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;

  @Column({ name: "name", length: 255 })
  name: string;

  @CreateDateColumn({ name: "created_at" })
  created_at: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updated_at: Date;

  @OneToMany(() => EnvType, (envType) => envType.project)
  env_types: EnvType[];

  @OneToMany(() => Env, (env) => env.project)
  envs: Env[];
}
