import { LoaderCircle } from "lucide-react";

export default function Loader({ size = 32 }) {
  return (
    <LoaderCircle
      size={size}
      color="#161616"
      className="animate-spin transition ease-in-out"
    />
  );
}
