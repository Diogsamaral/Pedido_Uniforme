/*import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit
{
  usuario: any;
  async onModuleInit() {
    await this.$connect();
  }
  $connect() {
    throw new Error('Method not implemented.');
  }
}*/

import {
  Injectable,
  OnModuleInit,
} from '@nestjs/common';

import {
  PrismaClient,
} from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit
{
  async onModuleInit() {
    this.$connect();
  }
}