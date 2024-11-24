import { Badge } from "lucide-react";
interface DetailSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export function DetailSection({ title, icon, children }: DetailSectionProps) {
  return (
    <div className="border-s-2 rounded-lg p-4 transition-all hover:bg-[#272a27]">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="font-medium text-[#9ab88d]">{title}</h3>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

interface DetailItemProps {
  label: string;
  value: string | number | undefined;
  icon?: React.ReactNode;
}

export function DetailItem({ label, value, icon }: DetailItemProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-[#9ab88d]">{label}</span>
      <div className="flex items-center gap-2">
        {icon}
        <Badge
          //@ts-ignore
          variant="secondary"
          className="bg-[#2a2f2a] text-[#e5e7e5] hover:bg-[#323732]"
        >
          {value || "Not specified"}
        </Badge>
      </div>
    </div>
  );
}
