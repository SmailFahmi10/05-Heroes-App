import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { useState } from "react";

import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { HeroStates } from "@/heroes/components/HeroStates";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadCrumbs } from "@/components/custom/CustomBreadCrumbs";

export default function HomePage() {
  const [activeTab, setactiveTab] = useState<
    "all" | "favorites" | "heroes" | "villains"
  >("all");

  return (
    <>
      <>
        <CustomJumbotron
          title="Universo de SuperHéroes"
          description="Descubre, explora y administra heroes"
        />
        <CustomBreadCrumbs currentPage={"Super Héroes"} />
        <HeroStates />

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setactiveTab("all")}>
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              onClick={() => setactiveTab("favorites")}
              className="flex items-center gap-2"
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setactiveTab("heroes")}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setactiveTab("villains")}
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <HeroGrid />
          </TabsContent>
          <TabsContent value="favorites">
            <HeroGrid />
          </TabsContent>
          <TabsContent value="heroes">
            <HeroGrid />
          </TabsContent>
          <TabsContent value="villains">
            <HeroGrid />
          </TabsContent>
        </Tabs>

        {/* Character Grid */}

        {/* Pagination */}
        <CustomPagination totalPages={8} />
      </>
    </>
  );
}
