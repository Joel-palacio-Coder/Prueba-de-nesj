import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Product } from '../../products/entities/product.entity';
import { ApiProperty } from '@nestjs/swagger';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

@Entity('users')
export class User {
  @ApiProperty({ description: 'ID único del usuario' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Nombre completo del usuario' })
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @ApiProperty({ description: 'Email único del usuario' })
  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @ApiProperty({ description: 'Contraseña encriptada' })
  @Column({ type: 'varchar' })
  @Exclude()
  password: string;

  @ApiProperty({ description: 'Rol del usuario', enum: UserRole, default: UserRole.USER })
  @Column({ 
    type: 'enum', 
    enum: UserRole, 
    default: UserRole.USER 
  })
  role: UserRole;

  @ApiProperty({ description: 'Fecha de creación' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de actualización' })
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Product, product => product.user)
  products: Product[];

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}