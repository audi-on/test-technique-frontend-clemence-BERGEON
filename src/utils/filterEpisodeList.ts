import { Episode } from "../models/episode";
import { EpisodeFilters } from "../modules/episode/EpisodeFilters";
import { cleanString } from "./string";

export function filterEpisodeList(
  episodeList: Episode[],
  filters: EpisodeFilters
) {
  let filterEpisodeList: Episode[] = [];
  if (filters.title !== undefined) {
    const filterTitle = cleanString(filters.title);
    filterEpisodeList = episodeList.filter((episode) =>
      episode.cleanTitle.includes(filterTitle)
    );
  }
  return filterEpisodeList;
}
