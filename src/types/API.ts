export interface IPlaylist {
    title: string;
    creator: string;
    cover: string;
    songs: number;
}

export interface ICurrentlyPlaying {
    title: string;
    singer: string;
    cover: string;
    isFavorite: boolean;
}

export interface ISection {
    title: string;
    data: {
        cover: string;
        title: string;
        description: string;
        isArtistCard: boolean;
    }[];
}

export interface IAPIResponse {
    name: string;
    avatar: string;
    playlists: IPlaylist[];
    currentlyPlaying: ICurrentlyPlaying;
    sections: ISection[];
}