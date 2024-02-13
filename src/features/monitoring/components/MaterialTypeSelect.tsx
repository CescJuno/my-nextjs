import useGetTodosQuery from "@/hooks/queries/useGetTodosQuery";
import { FormControl, MenuItem, Select, Stack, Typography } from "@mui/material";
import { useCallback, useMemo } from "react";
import { useFilter } from "../contexts/useFilter";

const MaterialTypeSelect = () => {
  const { data, isFetching } = useGetTodosQuery();
  const { filter, setFilter } = useFilter();
  const options = useMemo(() => {
    if (isFetching) return [];
    return data?.map((item) => ({ value: item.id, label: item.title }) || []);
  }, [data, isFetching]);

  const handleChangeMaterialType = useCallback(
    (value: string) => {
      setFilter({
        warehouse: filter?.warehouse || `all`,
        materialType: value,
        material: filter?.material || `all`,
      });
    },
    [filter?.material, filter?.warehouse, setFilter]
  );
  return (
    <Stack flexDirection='row' alignItems='center' sx={{ width: `90%` }}>
      <Typography noWrap width='100px'>
        MaterialType
      </Typography>
      <FormControl sx={{ flex: 1 }}>
        <Select
          size='small'
          value={filter?.materialType}
          onChange={(event) => handleChangeMaterialType(event.target.value)}
        >
          {options?.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
          <MenuItem value='all'>All</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};
export default MaterialTypeSelect;
