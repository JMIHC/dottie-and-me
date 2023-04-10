import type { V2_MetaFunction } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Dottie and Me" }];
};

export default function Index() {
  return (
    <div className="flex flex-col h-screen container mx-auto">
      <header>
      <h1 className="text-3xl bg-primary font-bold">
        Dottie page
      </h1>
      <p>Log line</p>
      </header>
      <main className="grid grid-cols-2 grid-rows-2 gap-4">
        <div className="p-10 bg-primary text-center font-bold">1</div>
        <div className="p-10 bg-primary text-center font-bold">2</div>
        <div className="p-10 bg-primary text-center font-bold">3</div>
        <div className="p-10 bg-primary text-center font-bold">4</div>
      </main>
      <footer className="flex justify-center">
        <p>Copyright © {(new Date().getFullYear())} - All rights reserved</p>
      </footer>
    </div>
  );
}
