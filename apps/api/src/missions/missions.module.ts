import { Module } from '@nestjs/common';
import { MissionsService } from './missions.service';
import { MissionsController } from './missions.controller';
import { PrismaModule } from '../prisma.module';
import { MissionGateway } from './mission.gateway';

@Module({
  imports: [PrismaModule],
  providers: [MissionsService, MissionGateway],
  controllers: [MissionsController],
})
export class MissionsModule {}
