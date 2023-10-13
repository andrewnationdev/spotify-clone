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
    currentlyPlaying: {
        title: '',
        singer: '',
        cover: '',
        isFavorite: false
    },
    sections: [{
        title: 'Tocados recentemente',
        data: [
            {
                cover: 'https://1734811051.rsc.cdn77.org/data/images/full/359628/sea-of-thieves-logo.jpg',
                title: 'Bohemian Rhap...',
                description: 'Queen',
                isArtistCard: false
            },
            {
                cover: 'https://th.bing.com/th/id/R.6c2ec53d153c55dd2562b454b938fe2f?rik=N%2bBtv4RzQSyOoQ&pid=ImgRaw&r=0',
                title: 'Imagine',
                description: 'John Lennon',
                isArtistCard: false
            },
            {
                cover: 'https://yt3.ggpht.com/-QkqvzArFkYs/AAAAAAAAAAI/AAAAAAAAAAA/qw97foQDUbQ/s900-c-k-no/photo.jpg',
                title: 'Hotel California',
                description: 'Eagles',
                isArtistCard: false
            },
            {
                cover: 'https://th.bing.com/th/id/OIP.yYJC2UM3cB8jbgYHxs83IgHaFj?pid=ImgDet&rs=1',
                title: 'Billie Jean',
                description: 'Michael Jackson',
                isArtistCard: false
            }
        ]
    },
    {
        title: 'Seus mixes mais ouvidos',
        data: [
            {
                cover: "https://th.bing.com/th/id/OIP.W19xwCQiBIPMxIinNXfp4QHaEK?pid=ImgDet&rs=1",
                title: "Imagine",
                description: "John Lennon",
                isArtistCard: false,
            },
            {
                cover: "https://www.slashgear.com/wp-content/uploads/2017/09/Red-Dead-Redemption-2-fire-955x620.jpg",
                title: "Hey Jude",
                description: "The Beatles",
                isArtistCard: false,
            },
            {
                cover: "https://th.bing.com/th/id/OIP.WOPyTWkkh-_n4gxfGFhAOgHaHa?pid=ImgDet&rs=1",
                title: "Dancing Queen",
                description: "ABBA",
                isArtistCard: false,
            },
            {
                cover: "https://th.bing.com/th/id/OIP.KE2MWtM7o1kHxXrUKuRmAgHaE8?pid=ImgDet&rs=1",
                title: "I Will Survive",
                description: "Gloria Gaynor",
                isArtistCard: false,
            },
        ]
    },
    {
        title: 'Feitos para GHT',
        data: [
            {
                cover: "https://meups.com.br/wp-content/uploads/2022/11/Atomic-Heart-3-900x503.jpg",
                title: "Aquarela",
                description: "Toquinho",
                isArtistCard: false,
            },
            {
                cover: "https://th.bing.com/th/id/R.ee82f4fb9f9cff96317a892b7d531323?rik=0%2fdh%2fBqHU964bg&pid=ImgRaw&r=0",
                title: "O Trem das Onze",
                description: "Luiz Gonzaga",
                isArtistCard: false,
            },
            {
                cover: "https://th.bing.com/th/id/OIP.ToZ3nqwxFRTZ1Ng-Ha-UvQHaEK?pid=ImgDet&rs=1",
                title: "Samba da Benção",
                description: "Vital e Zé Canuto",
                isArtistCard: false,
            },
            {
                cover: "https://wallpapercave.com/wp/wp6359369.jpg",
                title: "Garota de Ipanema",
                description: "Tom Jobim e Vinicius de Moraes",
                isArtistCard: false,
            },
        ]
    }
    ]
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
    sections: {
        title: string;
        data: {
            cover: string;
            title: string;
            description: string;
            isArtistCard: boolean;
        }[];
    }[]
}