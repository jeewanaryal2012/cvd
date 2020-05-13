import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class UsersEntity {
    @PrimaryGeneratedColumn() userId: number;
    @Column({ type: 'varchar', width: 100 }) firstName: string;
    @Column({ type: 'varchar', width: 100 }) lastName: string;
    @Column({ type: 'varchar', width: 100 }) email: string;
    @Column({ type: 'varchar', width: 100 }) phone: string;
    @Column({ type: 'varchar', width: 100 }) password: string;
}

//export default Users();