import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmployeeEntity } from './entity/employee.entity';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';

@Injectable()
export class EmployeeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateEmployeeInput): Promise<EmployeeEntity> {
    return this.prisma.employee.create({ data });
  }

  async findAll(): Promise<EmployeeEntity[]> {
    return this.prisma.employee.findMany();
  }

  async findOne(id: number): Promise<EmployeeEntity | null> {
    return this.prisma.employee.findUnique({ where: { EmployeeID: id } });
  }

  async update(id: number, data: UpdateEmployeeInput): Promise<EmployeeEntity> {
    return this.prisma.employee.update({ where: { EmployeeID: id }, data });
  }

  async remove(id: number): Promise<EmployeeEntity> {
    return this.prisma.employee.delete({ where: { EmployeeID: id } });
  }
}
