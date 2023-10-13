export const userMock = {
    name: 'GHT',
    avatar: 'https://1734811051.rsc.cdn77.org/data/images/full/359628/sea-of-thieves-logo.jpg',
    playlists: [
        {
            title: 'Músicas Relaxantes',
            creator: 'Joana Silva',
            cover: 'capa_relaxante.jpg',
            songs: 25
        },
        {
            title: 'Pop Internacional Top 40',
            creator: 'Carlos Santos',
            cover: 'capa_pop.jpg',
            songs: 40
        },
        {
            title: 'Clássicos do Rock',
            creator: 'Maria Oliveira',
            cover: 'capa_rock.jpg',
            songs: 50
        },
        {
            title: 'Hip-Hop das Antigas',
            creator: 'Paulo Almeida',
            cover: 'capa_hiphop.jpg',
            songs: 30
        },
        {
            title: 'Indie Alternativo',
            creator: 'Isabel Pereira',
            cover: 'capa_indie.jpg',
            songs: 35
        },
        {
            title: 'Sertanejo Raiz',
            creator: 'Lucas Souza',
            cover: 'capa_sertanejo.jpg',
            songs: 28
        },
        {
            title: 'Melhores do Jazz',
            creator: 'Ana Costa',
            cover: 'capa_jazz.jpg',
            songs: 20
        },
        {
            title: 'Rap Nacional',
            creator: 'Rafael Ferreira',
            cover: 'capa_rap.jpg',
            songs: 42
        },
        {
            title: 'Músicas de Verão',
            creator: 'Mariana Rocha',
            cover: 'capa_verao.jpg',
            songs: 48
        },
        {
            title: 'Eletrônica Dance Party',
            creator: 'Pedro Oliveira',
            cover: 'capa_electronica.jpg',
            songs: 55
        },
        {
            title: 'Músicas para Malhar',
            creator: 'Fernanda Santos',
            cover: 'capa_fitness.jpg',
            songs: 33
        },
        {
            title: 'Música Latina Caliente',
            creator: 'Carlos Rodriguez',
            cover: 'capa_latina.jpg',
            songs: 38
        },
        {
            title: 'Clássicos do R&B',
            creator: 'Luana Alves',
            cover: 'capa_rnb.jpg',
            songs: 27
        },
        {
            title: 'Country Americano',
            creator: 'Daniel Costa',
            cover: 'capa_country.jpg',
            songs: 22
        },
        {
            title: 'Hits dos Anos 90',
            creator: 'Cristina Silva',
            cover: 'capa_anos90.jpg',
            songs: 30
        }
    ],
    sections: []
} as {
    name: string;
    avatar: string;
    playlists: any[];
    currentlyPlaying: {
        title: string;
        singer: string;
        cover: string;
        isFavorite: boolean;
    },
    sections: any[]
}