import { Background } from "@/components/Background";
import { ProfileCard } from "@/components/features/profile/ProfileCard";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
      <Background />
      <ProfileCard />
    </main>
  );
}
