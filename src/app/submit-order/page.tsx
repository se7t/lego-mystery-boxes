import Container from "@/components/container";
import { getMinifigParts, getSingleMinifig } from "../actions";
import { redirect } from "next/navigation";
import Summary from "@/components/summary";
import SubmitForm from "@/components/submit-form";

interface SubmitPageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function SubmitPage({ searchParams }: SubmitPageProps) {
  const set_num = searchParams?.set_num as string | undefined;

  if (!set_num) {
    redirect("/");
  }

  const minifig = await getSingleMinifig(set_num);
  const minifigParts = await getMinifigParts(set_num);

  return (
    <Container className="flex flex-col-reverse gap-12 py-8 md:grid md:grid-cols-2">
      <div className="flex flex-col py-8">
        <h2 className="font-display mb-4 text-3xl uppercase tracking-wide">
          Shipping Details
        </h2>
        <SubmitForm />
      </div>
      <Summary minifig={minifig} minifigParts={minifigParts} />
    </Container>
  );
}
