/* --- resources --- */
import { useState } from "react";
import Head from "next/head";

/* --- hooks --- */
import { useTheme } from "Context/ThemeContext";

/* ----------- CONTRACTS ----------- */
import { LayoutProps } from "Contracts/PageProps";

/* --- components --- */
import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import { Col } from "react-bootstrap";

/* --- styles --- */
import styles from "Layouts/MainLayout/styles.module.scss";

export default function MainLayout({ children, title }: LayoutProps) {
  const [showSidebar, setShowSidebar] = useState(false);
  const { theme } = useTheme();

  return (
    <div className={`${styles.layout_container} ${styles[theme]}`}>
      <Head>
        <title>{title ? `${title} - Civil Cultural` : "Civil cultural"}</title>
      </Head>

      <Header
        isActive={showSidebar}
        setIsActive={() => setShowSidebar((x) => !x)}
      />
      <div className={styles.div_header} />

      <main className={styles.main}>
        <Col as="section" className="row p-0 m-0">
          <Sidebar
            active={showSidebar}
            handleClose={() => setShowSidebar(false)}
          />

          {children}
        </Col>
      </main>
    </div>
  );
}
