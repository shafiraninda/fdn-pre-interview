import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar'})
    firstname: string;

    @Column({ type: 'varchar'})
    lastname: string;

    @Column({ type: 'varchar'})
    email: string;

    @Column({ type: 'varchar'})
    item: string;

    @Column({ type: 'int'})
    quantity: number;

    @Column({ type: 'decimal'})
    total_price: number;
}