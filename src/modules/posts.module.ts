import { Module } from '@nestjs/common';
import { PostResolvers } from '../resolvers/posts.resolvers';
import { PostService } from '../services/posts.service';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  providers: [PostResolvers, PostService, PrismaService],
})
export class PostModule { }
