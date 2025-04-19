export default function SectionTitle({
  title,
  subTitle,
  rightActionElement,
  className,
}) {
  return (
    <div className={`flex items-center justify-between py-3 ${className}`}>
      <div className="flex-1">
        <h2 className="lg:text-2xl lg:leading-[24px] text-[18px] font-bold text-secondary-gray leading-[22px]">
          {title}
        </h2>
        <p className="text-sm font-semibold text-light-black leading-[18px]">
          {subTitle}
        </p>
      </div>
      {rightActionElement && rightActionElement}
    </div>
  );
}
