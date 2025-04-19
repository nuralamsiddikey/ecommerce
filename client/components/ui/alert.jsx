export default function Alert({ icon = null, message, variant = "info" }) {
  const variantClasses =
    variant === "info"
      ? "bg-[#097000] text-white"
      : variant === "warning"
      ? "bg-[#FFEAE0] text-[#A23704]"
      : variant === "error"
      ? "bg-[#FFD0D0] text-[#BB0000]"
      : variant === "success"
      ? "bg-[#E7FFE5] text-[#097000]"
      : variant === "pending"
      ? "bg-[#FFEAE0] text-[#F95506]"
      : "bg-[#FFEAE0] text-[#A23704]";

  return (
    <div
      className={`p-[10px] rounded-[4px] flex items-center gap-[8px] ${variantClasses}`}
    >
      <div className="w-7 h-7 flex items-center justify-center">
        {icon && icon}
      </div>

      {message && <p className="text-sm font-medium">{message}</p>}
    </div>
  );
}
