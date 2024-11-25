import { Injectable } from '@nestjs/common';
import { Episode } from './entity/episode.entity';
import { randomUUID } from 'crypto';
import { createEpisodeDto } from './dto/create-episode.dto';

@Injectable()
export class EpisodesService {
  private episodes: Episode[] = [];

  async create(createEpisodeDto: createEpisodeDto) {
    const episode = { ...createEpisodeDto, id: randomUUID() };
    this.episodes.push(episode);
    return episode;
  }

  async findAll(sort: 'asc' | 'desc', limit: number) {
    const sortAsc = (a: Episode, b: Episode) => (a.name > b.name ? 1 : -1);
    const sortDesc = (a: Episode, b: Episode) => (a.name > b.name ? 1 : -1);

    return sort === 'asc'
      ? this.episodes.sort(sortAsc).splice(0, limit)
      : this.episodes.sort(sortDesc).splice(0, limit);
  }

  async findFeatured() {
    return this.episodes.filter((episode) => episode.featured);
  }

  async findById(id: string) {
    return this.episodes.find((episode) => episode.id === id);
  }
}
