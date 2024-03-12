import { Minifig } from "@/schemas/minifigs-schema";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";

interface MinifigCardProps {
  minifig: Minifig;
  active: boolean;
  className?: string;
}

export const MinifigCard = ({
  minifig,
  active,
  className,
}: MinifigCardProps) => {
  return (
    <Card
      className={cn(
        "bg-white text-black",
        className,
        active && "outline outline-4 outline-violet-400 transition-all",
      )}
    >
      <CardHeader>
        <h2 className="text-center text-lg font-bold">{minifig.name}</h2>
      </CardHeader>
      <CardContent>
        <Image
          src={minifig.set_img_url || "/placeholder.png"}
          alt={minifig.name}
          width={160}
          height={160}
          className="mx-auto block h-40 w-auto"
        />
      </CardContent>
    </Card>
  );
};

interface MinifigCardPlaceholderProps {
  className?: string;
}

export const MinifigCardPlaceholder = ({
  className,
}: MinifigCardPlaceholderProps) => {
  return (
    <Card className={cn("w-full bg-gray-200", className)}>
      <CardHeader>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-32" />
      </CardHeader>
      <CardContent>
        <Skeleton className="mx-auto size-40" />
      </CardContent>
    </Card>
  );
};
