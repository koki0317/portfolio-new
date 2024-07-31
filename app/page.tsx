import ClientSideWrapper from "@/components/ClientSideWrapper";

export default function Home() {
  return (
    <main className="mt-[56px]">
      <div className="max-w-[1400px] mx-auto">
        <ClientSideWrapper />
      </div>
    </main>
  );
}

export const dynamic = "force-static";
