import { useContext } from "react";
import { FilterContext, FilterContextType } from "./useFilterContext";

export const useFilter = () => {
  const { filter, clearFilter, setFilter } = useContext<FilterContextType>(FilterContext);

  return { filter, clearFilter, setFilter };
};
