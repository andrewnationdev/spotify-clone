import '../../styles/home.css';
import truncateText from '../../utils/Truncate';
import useSpotifyStore from '../../modules/store';
import {IAPIResponse} from '../../types/types';

export default function SectionCardComponent(props: {
    data: {
        title: string;
        isArtistCard: boolean;
        cover: string;
        description: string;
    }
}) {

    const { data, updateData } = useSpotifyStore()

    const titleLimit = 14;
    const descriptionLimit = 25;

    return (
        <div className="section-card-container">
            <div className="section-card-main">
                <img className="section-card-picture" src={props?.data?.cover} alt="" />
                <i className="material-icons card-play-button" onClick={()=>{
                    updateData((s: IAPIResponse)=>({
                        ...s,
                        currentlyPlaying: {
                            title: props?.data?.title,
                            cover: props?.data?.cover,
                            singer: props?.data?.description,
                            isFavorite: false,
                            trackLength: Math.floor(Math.random() * (150 + 1))
                        }
                    }))
                }}>play_circle_filled</i>
            </div>
            <div className="section-card-info">
                <span
                    className="section-card-title">
                    {truncateText(props?.data?.title, titleLimit)}
                </span>
                <span className="section-card-description">
                    {truncateText(props?.data?.description, titleLimit)}
                </span>
            </div>
        </div>
    )
}