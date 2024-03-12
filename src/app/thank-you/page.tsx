import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ThankYouPageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const orderId = searchParams?.orderId as string | undefined;

  return (
    <Container>
      <Badge variant="outline" className="mx-auto mb-6 w-fit">
        Order ID: #{orderId}
      </Badge>

      <h1 className="text-center font-display text-5xl font-bold uppercase tracking-wider">
        Thank you for choosing us!
      </h1>

      <p className="mb-10 mt-4 text-center text-lg">
        We will send you a confirmation email shortly.
      </p>

      <Button asChild className="mx-auto w-fit" size="lg">
        <Link href="/">Start Over</Link>
      </Button>
    </Container>
  );
}
