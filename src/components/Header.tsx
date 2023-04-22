import styles from "@/styles/Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src="/images/Logo.png" alt="Logo" width={60} height={60} />
        <h1 className={styles.logoTitle}>
          LegalTech
        </h1>
      </Link>
      <nav>
        <ul>
          {children}
        </ul>
      </nav>
    </header>
  );
}

export const HeaderLink = ({ href, valor }: { href: string, valor: string }) => {
  const router = useRouter();
  return (
    <li>
      <Link href={href} className={router.pathname === href ? styles.active : ""}>
        {valor}
      </Link>
    </li>
  );
};