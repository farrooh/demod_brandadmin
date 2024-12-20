import { Box, Grid } from "@mui/material";
import CountsGrid from "./counts_component";
import { useSelector } from "../../../store";
import { selectModelsStats, selectModelsStatsStatus } from "../../../data/statistics/get_models_stats";
import { selectDownloadsCount, selectDownloadsCountStatus } from "../../../data/statistics/get_downloads_stats";
import { selectTagsCount, selectTagsCountStatus } from "../../../data/statistics/get_tags_stats";

export function CountsStats() {

  const modelsStats = useSelector(selectModelsStats)
  const downloadsStats = useSelector(selectDownloadsCount)
  const tagsStats = useSelector(selectTagsCount)

  const modelsStatsStatus = useSelector(selectModelsStatsStatus)
  const downloadsCountStatus = useSelector(selectDownloadsCountStatus)
  const tagsCountStatus = useSelector(selectTagsCountStatus)

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <CountsGrid
        fillWidth
        mainColor="#7210BE"
        loading={
          modelsStatsStatus == 'loading' ||
          downloadsCountStatus == 'loading' ||
          tagsCountStatus == 'loading'
        }
        data={[
          {
            name: 'Все модели',
            count: modelsStats?.count,
          },
          {
            name: 'Доступные модели',
            count: modelsStats?.available_count,
          },
          {
            name: 'Недоступные модели',
            count: modelsStats?.unavailable_count,
          },
          {
            name: 'Модели под заказ',
            count: modelsStats?.by_ordering_count,
          },
          {
            name: 'Загрузки',
            count: downloadsStats?.count
          },
          {
            name: 'Бирки',
            count: tagsStats?.count
          },
        ]}
      />

    </Box>
  )
}