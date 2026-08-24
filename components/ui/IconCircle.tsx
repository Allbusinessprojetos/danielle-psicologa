import {
  Brain,
  GraduationCap,
  Heart,
  HeartHandshake,
  Leaf,
  Sparkles,
  Sprout,
  Sun,
  User,
  Users,
  Wind,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Brain,
  GraduationCap,
  Heart,
  HeartHandshake,
  Leaf,
  Sparkles,
  Sprout,
  Sun,
  User,
  Users,
  Wind,
};

export function IconCircle({ name }: { name: string }) {
  const Icon = ICONS[name] ?? Heart;
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-rose/40"
    >
      <Icon className="h-6 w-6 text-rose" strokeWidth={1.5} />
    </span>
  );
}
