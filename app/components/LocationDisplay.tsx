"use client";

import { Card, CardBody } from "@nextui-org/react";
import { MapPin } from "lucide-react";

interface LocationDisplayProps {
  location: string | null;
}

export function LocationDisplay({ location }: LocationDisplayProps) {
  if (!location) return null;

  return (
    <Card className="bg-gradient-to-br from-violet-500 to-fuchsia-500 border-none">
      <CardBody className="p-3">
        <div className="flex items-center justify-center gap-2 text-white">
          <MapPin className="w-6 h-6" />
          <span className="text-xl font-semibold">{location}</span>
        </div>
      </CardBody>
    </Card>
  );
}