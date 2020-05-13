import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import UsersEntity from '../entities/users.entity';

@Entity()
export default class MembershipEntity {
    @PrimaryGeneratedColumn() membershipId: number;

    @OneToOne(type => UsersEntity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'userId' })
    userId: number;

    @Column({ type: 'varchar', width: 100 }) paidAmount: string;
    @Column({ type: 'varchar', width: 100 }) paidTimestamp: string;
    @Column({ type: 'varchar', width: 100 }) isMember: string;
}

// membershipId, userId, paidAmount, paidTimestamp, isMember