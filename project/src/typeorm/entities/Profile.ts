import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('profiles')
export class Profile{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string

    @Column()
    LastName: string

    @Column()
    age: number

    @Column()
    dob: string

}