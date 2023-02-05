import Form from "@/components/Form";
import { Summary } from "@/components/Summary";

export default function Home() {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-8">
        <div className="flex flex-wrap gap-32">
          <Form />
          <Summary />
        </div>
      </div>
    </>
  );
}
