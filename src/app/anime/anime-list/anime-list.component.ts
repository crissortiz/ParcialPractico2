import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  selectedBAnime!: Anime;
  selected = false;
  animes: Array<Anime> = [];
  constructor(private animeService: AnimeService) { }

  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
    });
  }

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedBAnime = anime;
  }

  ngOnInit() {
    this.getAnimes();
  }

  getPromedio(): number {
    if (!this.animes || this.animes.length == 0) return 0;
    const total = this.animes.reduce((sum, anime) => sum + Number(anime.Rating), 0);
    return total / this.animes.length;
}
  getCantidadSeason(anime: Anime): number {
  return anime.seasons ? anime.seasons.length : 0;
}
}
