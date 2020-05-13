import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import UsersEntity from '../entities/users.entity';

@Entity()
export default class AccountEntity {
    @PrimaryGeneratedColumn('increment') accountId: number;

    @OneToOne(type => UsersEntity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'userId' })
    userId: number;

    @Column({ type: 'varchar', width: 100 }) headline: string;
    @Column({ type: 'varchar', width: 100 }) description: string;
    @Column({ type: 'varchar', width: 100 }) regionStates: string;
    @Column({ type: 'varchar', width: 100 }) regionCities: string;
    @Column({ type: 'varchar', width: 100 }) imageProfile: string;
    @Column({ type: 'varchar', width: 100 }) imageSlider: string;
    @Column({ type: 'varchar', width: 100 }) contactEmail: string;
    @Column({ type: 'varchar', width: 100 }) contactPhone: string;
    @Column({ type: 'varchar', width: 100 }) contactWebsite: string;
}