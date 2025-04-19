import Image from "next/image";

export default function Avatar({ src, alt = "User Image", size = "md" }) {
  const getSizeHeightWidth = () => {
    switch (size) {
      case "xs":
        return {
          height: 32,
          width: 32,
        };
      case "sm":
        return {
          height: 72,
          width: 72,
        };
      case "md":
        return {
          height: 89,
          width: 89,
        };
      case "lg":
        return {
          height: 120,
          width: 120,
        };

      default:
        return {
          height: 89,
          width: 89,
        };
    }
  };
  return (
    <div
      style={{
        height: getSizeHeightWidth().height,
        width: getSizeHeightWidth().width,
      }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          className="rounded-full"
          style={{
            height: getSizeHeightWidth().height,
            width: getSizeHeightWidth().width,
          }}
          height={getSizeHeightWidth().height}
          width={getSizeHeightWidth().width}
        />
      ) : (
        <div
          className="bg-[#F955061A] rounded-full flex items-center justify-center"
          style={{
            height: getSizeHeightWidth().height,
            width: getSizeHeightWidth().width,
          }}
        >
          <Image
            src="/assets/icons/orange-user-icon.svg"
            alt={alt}
            className="rounded-full"
            style={{
              height: getSizeHeightWidth().height - 29,
              width: getSizeHeightWidth().width - 29,
            }}
            height={getSizeHeightWidth().height - 29}
            width={getSizeHeightWidth().width - 29}
          />
        </div>
      )}
    </div>
  );
}
