import '../styles/sidebar.css';

export default function PlaylistsLibraryCardComponent(props: {
    title: string
    creator: string
    cover: string
    songs: number
}){
    return(
        <div className="playlist-card-container">
            <div>
                <img src="https://www.bing.com/images/search?view=detailV2&ccid=k8VgOI80&id=F65B1065E2C45E74BAF90C304B72847B7A8AA290&thid=OIP.k8VgOI80DfmuekaKmRDY5wHaHa&mediaurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67706c0000bebbc7a9fa9edeaf172a5033f359&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.93c560388f340df9ae7a468a9910d8e7%3Frik%3DkKKKenuEckswDA%26pid%3DImgRaw%26r%3D0&exph=640&expw=640&q=imagine+dragons+best+of+image&simid=608047746254725866&FORM=IRPRST&ck=49832BF06D1FACA58A74B39717B127EF&selectedIndex=1" alt="" srcset="" />
            </div>
            <div>
                <span className="playlist-card-title">Imagine Dragons Best Of</span>
                <span>Playlist</span>
            </div>
        </div>
    );
}