import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { UserRole } from '../users/entities/user.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto, userId: string): Promise<Product> {
    const product = this.productsRepository.create({
      ...createProductDto,
      userId,
    });
    
    return await this.productsRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return await this.productsRepository.find({
      relations: ['user'],
    });
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.productsRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    
    if (!product) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
    
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto, userId: string, userRole: UserRole): Promise<Product> {
    const product = await this.findOne(id);
    
    // Solo el dueño o un admin puede actualizar
    if (product.userId !== userId && userRole !== UserRole.ADMIN) {
      throw new ForbiddenException('No tienes permiso para actualizar este producto');
    }
    
    Object.assign(product, updateProductDto);
    return await this.productsRepository.save(product);
  }

  async remove(id: string, userId: string, userRole: UserRole): Promise<void> {
    const product = await this.findOne(id);
    
    // Solo el dueño o un admin puede eliminar
    if (product.userId !== userId && userRole !== UserRole.ADMIN) {
      throw new ForbiddenException('No tienes permiso para eliminar este producto');
    }
    
    await this.productsRepository.remove(product);
  }

  async findUserProducts(userId: string): Promise<Product[]> {
    return await this.productsRepository.find({
      where: { userId },
      relations: ['user'],
    });
  }
}