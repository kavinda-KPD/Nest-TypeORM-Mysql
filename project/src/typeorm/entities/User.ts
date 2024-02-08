import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./Profile";


@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    username: string

    @Column()
    password: string

    @Column()
    createdAt: Date

    @Column({nullable: true})
    authstrategy: string

    @OneToOne(()=>Profile)
    @JoinColumn()
    profile: Profile
}