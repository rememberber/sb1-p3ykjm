"use client";

import { useState } from "react";
import { Button } from "@nextui-org/react";
import { Utensils } from "lucide-react";
import { Header } from "./components/Header";
import { LocationDisplay } from "./components/LocationDisplay";
import { getRandomLocation } from "./lib/locations";

export default function Home() {
  const [location, setLocation] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-background/80 p-4">
      <div className="max-w-md mx-auto pt-10 space-y-6">
        <Header />
        <LocationDisplay location={location} />
        <Button
          size="lg"
          color="secondary"
          variant="shadow"
          fullWidth
          startContent={<Utensils className="w-5 h-5" />}
          className="h-14 text-lg font-semibold"
          onClick={() => setLocation(getRandomLocation())}
        >
          随机推荐
        </Button>
      </div>
    </main>
  );
}