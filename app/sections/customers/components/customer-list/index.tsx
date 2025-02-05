"use client";

import { useEffect, useState, type FC } from "react";
import GridCell from "./grid-cell";
import Logo1 from "@/assets/logo-1.svg";
import Logo2 from "@/assets/logo-2.svg";
import Logo3 from "@/assets/logo-3.svg";
import Logo4 from "@/assets/logo-4.svg";
import Logo5 from "@/assets/logo-5.svg";
import Logo6 from "@/assets/logo-6.svg";
import Logo7 from "@/assets/logo-7.svg";
import Logo8 from "@/assets/logo-8.svg";

import styles from "./styles.module.css";

const CustomerList: FC = () => {
  const [layer, setLayer] = useState<number>(1);

  useEffect(() => {
    const changeLayer = () => setLayer((prev) => (prev % 2) + 1);
    const interval = setInterval(changeLayer, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.customer__grid}>
      <div className={styles.logo__grid}>
        <GridCell layer={layer} icon1={<Logo1 />} icon2={<Logo2 />} />
        <GridCell layer={layer} icon1={<Logo3 />} icon2={<Logo4 />} />
        <GridCell layer={layer} icon1={<Logo5 />} icon2={<Logo6 />} />
        <GridCell layer={layer} icon1={<Logo7 />} icon2={<Logo8 />} />
      </div>
    </div>
  );
};

export default CustomerList;
