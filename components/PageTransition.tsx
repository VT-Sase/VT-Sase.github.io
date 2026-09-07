"use client";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import styles from "./PageTransition.module.css";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className={styles.fadeUp}>
      {children}
    </div>
  );
}
