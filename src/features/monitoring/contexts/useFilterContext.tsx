import React, { createContext, useMemo, useCallback } from "react";

interface FilterItem {
  warehouse: string;
  materialType: string;
  material: string;
}

export type FilterContextType = {
  filter: FilterItem | null;
  setFilter: ({ warehouse, materialType, material }: FilterItem) => void;
  clearFilter?: () => void;
};

export const FilterContext = createContext<FilterContextType>({} as FilterContextType);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function FilterProvider({ children }: any) {
  const [filter, setInfoFilter] = React.useState<FilterItem>({
    warehouse: `all`,
    material: `all`,
    materialType: `all`,
  });

  const clearFilter = useCallback(() => {
    if (filter === null || filter !== undefined) {
      return;
    }
    setInfoFilter(() => ({
      warehouse: `all`,
      materialType: `all`,
      material: `all`,
    }));
  }, [filter]);

  const setFilter = useCallback((props: FilterItem) => {
    setInfoFilter(props);
  }, []);

  const value = useMemo(() => ({ filter, clearFilter, setFilter }), [filter, clearFilter, setFilter]);

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
}
