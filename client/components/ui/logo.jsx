import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/assets/images/logo.png"
        width={230}
        height={200}
        alt="Fashion glory Logo"
      />
    </Link>
  );
}
