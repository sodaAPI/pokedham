import Card from "./components/Card";
import BG from "../../public/image/background-poke.webp";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-10 bg-cover bg-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url(${BG.src})`,
        }}></div>
      <Card />
    </main>
  );
}
