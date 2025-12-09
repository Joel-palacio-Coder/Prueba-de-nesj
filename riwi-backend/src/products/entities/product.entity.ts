import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('products')
export class Product {
  @ApiProperty({ description: 'ID único del producto' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Nombre del producto' })
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @ApiProperty({ description: 'Descripción del producto' })
  @Column({ type: 'text' })
  description: string;

  @ApiProperty({ description: 'Precio del producto' })
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @ApiProperty({ description: 'Cantidad en stock' })
  @Column({ type: 'int' })
  stock: number;

  @ApiProperty({ description: 'Fecha de creación' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de actualización' })
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty({ description: 'ID del usuario creador' })
  @Column({ name: 'user_id' })
  userId: string;

  @ManyToOne(() => User, user => user.products)
  @JoinColumn({ name: 'user_id' })
  user: User;

  constructor(partial: Partial<Product>) {
    Object.assign(this, partial);
  }
}