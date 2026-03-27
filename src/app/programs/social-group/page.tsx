import { PROGRAMS } from "@/constants/programs";
import ProgramDetailPage from "@/components/pages/ProgramDetailPage";

export default function Page() {
  const program = PROGRAMS.find((p) => p.slug === "social-group")!;
  return <ProgramDetailPage program={program} />;
}
