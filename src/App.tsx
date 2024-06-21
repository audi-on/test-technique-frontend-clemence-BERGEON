import { useEffect, useState } from "react";
import { getLongData } from "./utils/utils";
import type { Episode } from "./models/episode";
import EpisodeCard from "./modules/episode/EpisodeCard";
import EpisodeDisplay from "./modules/episode/EpisodeDisplay";
import EpisodeListFilters, {
  EpisodeFilters,
} from "./modules/episode/EpisodeFilters";
import { filterEpisodeList } from "./utils/filterEpisodeList";
import { cleanString } from "./utils/string";

export const App = () => {
  const [episodeList, setEpisodeList] = useState<Episode[]>([]);
  const [filters, setFilters] = useState<EpisodeFilters | undefined>(undefined);
  const isFiltering = filters === undefined;

  const filteredEpisodeList: Episode[] = isFiltering
    ? episodeList
    : filterEpisodeList(episodeList, filters);

  useEffect(() => {
    getLongData().then((response) =>
      setEpisodeList(
        response.map((episode) => ({
          id: episode.id,
          title: episode.title,
          cleanTitle: cleanString(episode.title),
          artworkUrl: episode.artworkUrl,
          durationInSeconds: episode.durationInSeconds,
          publicationDate: episode.publicationDate,
          slug: episode.slug,
          audioUrl: episode.audioUrl,
        }))
      )
    );
  }, []);

  return (
    <div className="flex flex-col-reverse w-screen h-screen overflow-y-auto md:flex-row">
      <div className="flex flex-col w-full gap-2 p-4 overflow-y-auto md:p-8 md:w-1/2">
        <EpisodeListFilters filters={filters} setFilters={setFilters} />
        {filteredEpisodeList.slice(0, 100).map((episode: Episode, index) => (
          <EpisodeCard
            episode={episode}
            key={`episode-list-${episode.title}-${index}`}
          />
        ))}
      </div>
      <EpisodeDisplay />
    </div>
  );
};
