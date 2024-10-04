import { cn } from "@/app/_utils/cn";

interface ToggleProps {
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
}

const Toggle = ({ checked, label, onChange }: ToggleProps) => {
  return (
    <label className="flex cursor-pointer items-center">
      <span className="mr-3 text-sm font-medium text-white">{label}</span>
      <div className="relative">
        <input
          checked={checked}
          className="sr-only"
          onChange={(e) => onChange(e.target.checked)}
          type="checkbox"
        />
        <div
          className={cn(
            {
              "bg-[#00DAE8]": checked,
              "bg-white/25": !checked,
            },
            "block h-8 w-14 rounded-full",
          )}
        />
        <div
          className={cn(
            "absolute left-[2px] top-[2px] h-7 w-7 rounded-full bg-white transition-transform duration-300 ease-in-out",
            {
              "translate-x-full": checked,
            },
          )}
        />
      </div>
    </label>
  );
};

export default Toggle;
