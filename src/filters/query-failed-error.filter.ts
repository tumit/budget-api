import { ArgumentsHost, Catch, ConflictException, ExceptionFilter } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class QueryFailedErrorFilter extends BaseExceptionFilter {

  catch(exception: QueryFailedError, host: ArgumentsHost) {

    const message: string = exception.message;
    console.log(exception)

    if (this.isDuplicateKeyValue(message)) {
      // return 409 Conflict
      const detail = (exception.driverError as any).detail
      super.catch(new ConflictException('มีข้อมูลแล้ว'), host)
      return;
    }

  }

  private isDuplicateKeyValue(message?: string): boolean {
    return message && message.includes('duplicate key value')
  }

}
