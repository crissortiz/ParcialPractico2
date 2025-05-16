import { Component, Input, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  @Input() animeDetail!: Anime;

  constructor() { }

  ngOnInit() {
  }

  @Output() back = new EventEmitter<void>();

}
