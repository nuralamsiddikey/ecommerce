"use client";

export default function CircleButton({
  children,
  bgColor,
  onClick = () => {},
  disabled,
  size = "md",
}) {
  let backgroundColor = bgColor ? bgColor : "#D8D8D8";
  let heightAndWidth =
    size === "md"
      ? "36px"
      : size === "sm"
      ? "20px"
      : size === "lg"
      ? "40px"
      : "36px";

  let fontSize =
    size === "md"
      ? "13px"
      : size === "sm"
      ? "10px"
      : size === "lg"
      ? "14px"
      : "13px";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        height: heightAndWidth,
        width: heightAndWidth,
        backgroundColor: backgroundColor,
        fontSize: fontSize,
        border: `1px solid ${
          ["white", "#fff", "#ffffff", "#FFF", "#FFFFFF"].includes(
            backgroundColor
          )
            ? "#DEDEDE"
            : backgroundColor
        }`,
        borderRadius: "100%",
        opacity: disabled ? 0.5 : 1,
      }}
      className={` flex items-center justify-center text-medium-black font-bold disabled:bg-opacity-30 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}
