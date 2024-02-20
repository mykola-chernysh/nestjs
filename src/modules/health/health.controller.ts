import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('health')
export class HealthController {
  @ApiTags('health')
  @Get()
  getHello(): string {
    return 'health';
  }
}
