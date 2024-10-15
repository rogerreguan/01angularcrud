export interface IAlbum {
    id: string;
    nom: string;
    artista: string;
    any: number;
    genere: string;
    actiu: boolean;
    tracklist: string[];
    valoracio: number;
    opinio: string;
    user?: string;
}