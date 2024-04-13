import { Scalar } from '@nestjs/graphql';
import { Kind } from 'graphql';
import { Decimal } from '@prisma/client/runtime/library';

@Scalar('Decimal', () => Decimal)
export class DecimalScalar {
  description = 'Decimal scalar type';

  parseValue(value: string): Decimal {
    return new Decimal(value);
  }

  serialize(value: Decimal): string {
    return value.toString();
  }

  parseLiteral(ast: any): Decimal | null {
    if (ast.kind === Kind.STRING) {
      return new Decimal(ast.value);
    }
    return null;
  }
}
