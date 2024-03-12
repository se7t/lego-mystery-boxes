"use client";

import Container from "@/components/container";
import { MinifigCard, MinifigCardPlaceholder } from "@/components/minifig-card";
import { Button } from "@/components/ui/button";
import { Minifig } from "@/schemas/minifigs-schema";
import Link from "next/link";
import { useEffect, useState, useTransition } from "react";
import { getMinifigs } from "../actions";
import { cn } from "@/lib/utils";

export default function StartPage() {
  const [minifigs, setMinifigs] = useState<Minifig[]>([]);
  const [selectedMinifig, setSelectedMinifig] = useState<Minifig | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchMinifigs = async () => {
      const results = await getMinifigs();

      const randomMinifigs = results
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      setMinifigs(randomMinifigs);
    };

    startTransition(() => {
      fetchMinifigs();
    });
  }, []);

  const handleSelectMinifig = (minifig: Minifig) => {
    setSelectedMinifig(minifig);
  };

  return (
    <Container>
      <h1 className="font-display mb-12 text-center text-5xl font-bold uppercase tracking-wider">
        Choose Your Minifig
      </h1>
      <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {isPending ? (
          <>
            <MinifigCardPlaceholder />
            <MinifigCardPlaceholder />
            <MinifigCardPlaceholder />
          </>
        ) : (
          minifigs.map((minifig) => (
            <div
              key={minifig.set_num}
              onClick={() => handleSelectMinifig(minifig)}
            >
              <MinifigCard
                minifig={minifig}
                className="h-full"
                active={minifig === selectedMinifig}
              />
            </div>
          ))
        )}
      </div>

      {/* disabled doesn't work with asChild so we use a conditional */}
      <Button
        asChild
        className={cn(
          `mx-auto`,
          !selectedMinifig && "pointer-events-none opacity-50",
        )}
        size="lg"
      >
        <Link
          href={{
            pathname: "/submit-order",
            query: {
              set_num: selectedMinifig?.set_num,
            },
          }}
        >
          Order Minifig
        </Link>
      </Button>
    </Container>
  );
}
