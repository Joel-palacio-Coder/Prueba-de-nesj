import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GetUser } from '../auth/decorators/get-user.decorator';

@ApiTags('products')
@ApiBearerAuth()
@Controller('products')
@UseGuards(JwtAuthGuard)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo producto' })
  create(
    @Body() createProductDto: CreateProductDto,
    @GetUser('userId') userId: string,
  ) {
    return this.productsService.create(createProductDto, userId);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los productos' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  findAll(@Query('page') page = 1, @Query('limit') limit = 10) {
    return this.productsService.findAll();
  }

  @Get('my-products')
  @ApiOperation({ summary: 'Obtener productos del usuario autenticado' })
  findMyProducts(@GetUser('userId') userId: string) {
    return this.productsService.findUserProducts(userId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener producto por ID' })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar producto' })
  update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
    @GetUser('userId') userId: string,
    @GetUser('role') userRole: string,
  ) {
    return this.productsService.update(id, updateProductDto, userId, userRole);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar producto' })
  remove(
    @Param('id') id: string,
    @GetUser('userId') userId: string,
    @GetUser('role') userRole: string,
  ) {
    return this.productsService.remove(id, userId, userRole);
  }
}