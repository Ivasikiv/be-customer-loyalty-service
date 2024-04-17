import { EmployeeUncheckedCreateInput } from 'src/@generated/prisma-nestjs-graphql/employee/employee-unchecked-create.input';
import { JSONReader } from '../../db-data-sets/json-reader';

async function readEmployeeData() {
  const jsonReader = new JSONReader();
  const data = await jsonReader.readJSON(
    './db-data-sets/db-data/employees.json',
  );
  return data;
}

export const employee: {
  modelName: string;
  data: Promise<EmployeeUncheckedCreateInput[]>;
} = {
  modelName: 'employee',
  data: readEmployeeData(),
};
