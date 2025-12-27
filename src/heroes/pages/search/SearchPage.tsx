import { CustomBreadCrumbs } from "@/components/custom/CustomBreadCrumbs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { searchHeroesAction } from "@/heroes/actions/search-heros.action";
import { HeroStates } from "@/heroes/components/HeroStates";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { SearchControls } from "./ui/SearchControls";
import { HeroGrid } from "@/heroes/components/HeroGrid";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name") ?? undefined;
  const strength = searchParams.get("strength") ?? undefined;

  const { data: heroes = [] } = useQuery({
    queryKey: ["search", { name, strength }],
    queryFn: () => searchHeroesAction({ name, strength }),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });

  return (
    <>
      <CustomJumbotron
        title="Universo de SuperHéroes"
        description="Descubre, explora y administra heroes"
      />

      <CustomBreadCrumbs currentPage="Buscador de héroes" />

      {/* Stats Dashboard */}
      <HeroStates />

      {/* Filter and search */}
      <SearchControls />

      {/*  */}

      <HeroGrid heroes={heroes} />
    </>
  );
};

export default SearchPage;
