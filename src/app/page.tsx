import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <h1 className="font-display mb-12 text-center text-5xl font-bold uppercase tracking-wider">
        LEGO Minifigs Mystery Box
      </h1>
      <Button asChild className="mx-auto w-fit" size="lg">
        <Link href="/start">Let&apos;s Go!</Link>
      </Button>
    </Container>
  );
}
