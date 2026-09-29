import PropertyShowCase from "@/components/activity/PropertyShowCase";

export default async function Properties() {
  return (
    <main className="font-poppins bg-off-white flex flex-col gap-20">
      <div className="md:max-w-[1440px] xl:max-w-[1920px] mx-auto pt-24">
        <PropertyShowCase />
      </div>
    </main>
  );
}
