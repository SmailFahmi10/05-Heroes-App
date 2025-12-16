import { Badge } from "@/components/ui/badge";

import { HeroGridCard } from "./HeroGridCard";

export const HeroGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {/* Hero Card 1 - Superman */}

      <HeroGridCard
        name="Superman"
        imageSrc="/placeholder.svg?height=300&width=300"
        description="The Dark Knight of Gotham City, using fear as a weapon against crime
            and corruption."
        moreInfo="First appeared: 1939"
        icon={
          <>
            <Badge variant="outline" className="text-xs">
              Super Strength
            </Badge>
            <Badge variant="outline" className="text-xs">
              Flight
            </Badge>
            <Badge variant="outline" className="text-xs bg-gray-100">
              +4 more
            </Badge>
          </>
        }
        property={{
          strength: 100,
          intelligence: 80,
          speed: 90,
          durability: 100,
        }}
        label="Hero"
        company="DC"
        state={true}
        like={true}
        team="Justice League"
      />
    </div>
  );
};
