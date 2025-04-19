import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function IconTextLink({ label, icon, href = "/", className }) {
  return (
    <Link
      href={href}
      className={`flex items-center text-orange font-semibold gap-1 ${className}`}
    >
      {label} {icon ? icon : <ChevronRight size={14} />}
    </Link>
  );
}
