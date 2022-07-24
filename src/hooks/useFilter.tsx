import React, { useState, useContext, createContext, useEffect } from "react";
import data from "../data.json";
type Context = {
  filter: string[];
  updateFilter: (item: string) => void;
  removeFilter: (item: string) => void;
  clearFilter: () => void;
  newData: {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
  }[];
};

export const FilterContex = createContext<Context>({
  filter: [],
  updateFilter: () => {},
  removeFilter: () => {},
  clearFilter: () => {},
  newData: data,
});
type Props = {
  children: React.ReactNode;
};
export const FilterProvider = ({ children }: Props) => {
  const [filter, setFilter] = useState<string[]>([]);
  const [newData, setNewData] = useState(data);
  useEffect(() => {
    const filted = data.filter((item) => {
      const newArr = Object.values(item);
      const flat = newArr.flatMap((item) => item);
      return filter.every((r) => flat.includes(r));
    });
    setNewData(filted);
  }, [filter]);
  const updateFilter = (item: string) => {
    if (!filter.includes(item)) {
      setFilter([...filter, item]);
    }
  };
  const removeFilter = (item: string) => {
    if (filter.includes(item)) {
      const newArry = filter.filter((items) => items !== item);
      setFilter(newArry);
    }
  };
  const clearFilter = () => {
    setFilter([]);
  };
  return (
    <FilterContex.Provider
      value={{ filter, updateFilter, removeFilter, newData, clearFilter }}>
      {children}
    </FilterContex.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContex);
};

export default FilterProvider;
