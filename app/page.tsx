import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Deekup — Fine Dining. Your Price.",
};

export default function HomePage() {
  return <HomeClient />;
}
