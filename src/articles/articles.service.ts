import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateArticleDto } from './dto/create-article.dto'
import { UpdateArticleDto } from './dto/update-article.dto'

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}
  create(createArticleDto: CreateArticleDto) {
    return this.prisma.article.create({ data: createArticleDto })
  }

  findDrafts() {
    return this.prisma.article.findMany({ where: { published: false } })
  }
  findAll() {
    return this.prisma.article.findMany({ where: { published: true } })
  }

  findOne(id: number) {
    return this.prisma.article.findUnique({ where: { id } })
  }

  update(id: number, UpdateArticleDto: UpdateArticleDto) {
    return this.prisma.article.update({
      where: { id },
      data: UpdateArticleDto,
    })
  }

  remove(id: number) {
    return this.prisma.article.delete({ where: { id } })
  }
}
