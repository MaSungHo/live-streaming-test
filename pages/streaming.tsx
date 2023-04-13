import VideoPlayer from '../components/video-player';

export default function Streaming() {
    const videoUrl = "http://54.180.86.15:8088/hls/marv-live.m3u8";

    return (
        <div>
            <h2>BJ 마브 첫방송 ~</h2>
            <VideoPlayer src={videoUrl}></VideoPlayer>

            <style jsx>{`
                h2 {
                    margin-left: 10px;
                    font-size: 40px;
                    font-weight: 600;
                    margin-bottom: 10px;
                }

                div {
                    margin-top: 10px;
                }
            `}</style>
        </div>
      )
}