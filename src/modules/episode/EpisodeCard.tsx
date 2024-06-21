import Tag from "../../components/Tag";
import { Episode } from "../../models/episode";

interface EpisodeCardProps {
  episode: Episode;
}

function EpisodeCard(props: EpisodeCardProps) {
  const { episode } = props;
  return (
    <div className="flex items-center gap-4 text-sm">
      <div className="flex items-center justify-center object-contain w-24 h-24">
        <img
          src="https://dev-artworks.360.audion.fm/31661c58-c91b-4467-8b68-5611fcc2a7bd.jpg"
          alt=""
          width="100%"
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col object-none w-full gap-2">
        <div className="font-semibold line-clamp-2">{episode.title}</div>
        <div className="flex gap-2">
          <Tag>{episode.publicationDate}</Tag>
          <Tag>{`${Math.floor(episode.durationInSeconds / 60)} MIN`}</Tag>
        </div>
      </div>
    </div>
  );
}

export default EpisodeCard;
