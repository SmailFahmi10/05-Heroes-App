import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStates } from "@/heroes/components/HeroStates";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadCrumbs } from "@/components/custom/CustomBreadCrumbs";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Universo de SuperHéroes"
        description="Descubre, explora y administra heroes"
      />
      <CustomBreadCrumbs
        currentPage="Buscador de héroes"
        // breadcrumb={[
        //   {
        //     label: "Home1",
        //     to: "/",
        //   },
        //   {
        //     label: "Home2",
        //     to: "/",
        //   },
        //   {
        //     label: "Home3",
        //     to: "/",
        //   },
        // ]}
      />

      <HeroStates />
      {/* Controls */}
      <SearchControls />
    </>
  );
};
export default SearchPage;
