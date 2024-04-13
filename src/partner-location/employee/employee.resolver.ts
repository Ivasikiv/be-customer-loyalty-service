import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EmployeeEntity } from './entity/employee.entity';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { EmployeeService } from './employee.service';

@Resolver(() => EmployeeEntity)
export class EmployeeResolver {
  constructor(private readonly service: EmployeeService) {}

  @Mutation(() => EmployeeEntity)
  async createEmployee(
    @Args('data') data: CreateEmployeeInput,
  ): Promise<EmployeeEntity> {
    return this.service.create(data);
  }

  @Query(() => [EmployeeEntity])
  async employees(): Promise<EmployeeEntity[]> {
    return this.service.findAll();
  }

  @Query(() => EmployeeEntity)
  async employee(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<EmployeeEntity> {
    return this.service.findOne(id);
  }

  @Mutation(() => EmployeeEntity)
  async updateEmployee(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdateEmployeeInput,
  ): Promise<EmployeeEntity> {
    return this.service.update(id, data);
  }

  @Mutation(() => EmployeeEntity)
  async removeEmployee(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<EmployeeEntity> {
    return this.service.remove(id);
  }
}
