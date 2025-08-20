import { Display, Body, Button } from "@build-stack/md3-tailwind";

export default function Page() {
  return (
    <main className="p-6">
      <Display size="large">MD3 Tailwind</Display>
      <Body size="medium" className="text-gray-600">
        Minimal Material Design 3 primitives for React 19 + Tailwind v4.
      </Body>
      <div className="mt-6">
        <Button variant="filled">Get Started</Button>
      </div>
    </main>
  );
}


