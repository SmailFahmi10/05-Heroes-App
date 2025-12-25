import { useQuery } from "@tanstack/react-query";
import { getHero } from "../actions/get-hero";

export const useHero = (name: string) => {
  return useQuery({
    queryKey: ["heroes", { name }],
    queryFn: () => getHero(name),
    retry: false,
  });
};
