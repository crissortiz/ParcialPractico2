
export class Season {
    name: String;
    episodes: number;

    constructor(
        name: String,
        episodes: number
    ) {
        this.name = name;
        this.episodes = episodes;
    }

}

export const seasons: Season[] = [
    new Season ("Primera Temporada", 12),
    new Season ("Segunda Temporada", 12),
    new Season ("Tercera Temporada", 12),
    new Season ("Cuarta  Temporada", 12),


]