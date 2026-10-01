import About from "@/components/homepage/About";
import Action from "@/components/homepage/Action";
import Hero from "@/components/homepage/Hero";
import Methodology from "@/components/homepage/Methodology";
import SubjectsITeach from "@/components/homepage/SubjectsITeach";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <SubjectsITeach/>
      <Methodology/>
      <About/>
      <Action/>
    </div>
  );
}
