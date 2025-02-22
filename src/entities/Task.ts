import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User"
@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    subject: string

    @Column()
    description: string

    @Column()
    completed: boolean;

    @ManyToOne(() => User, (user) => user.tasks)
    user: User
}