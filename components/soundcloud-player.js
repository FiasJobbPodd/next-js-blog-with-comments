import ReactPlayer from 'react-player/soundcloud'

export default function SoundcloudPlayer({ url }) {
    return (
        <div class="soundcloud-player">
            <ReactPlayer url={url} width="100%" height="160px"></ReactPlayer>
        </div>
    )
}