/* --- resources --- */
import { useState, useEffect } from "react";

/* --- hooks --- */
import { useTheme } from "Context/ThemeContext";

/* -----------  CONTRACTS ----------- */
import { SwitchProps } from "Contracts/Components";

/* --- styles --- */
import styles from "@components/Switch/styles.module.scss";

export default function Switch({ className }: SwitchProps) {
  const { theme, toggleTheme } = useTheme();
  const [checked, setChecked] = useState(() => theme === "dark");
  const themeValue = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    setChecked(theme === "dark");
    console.log(theme === "dark");
  }, []);

  function alternateTheme() {
    toggleTheme(themeValue);
    setChecked(theme === "dark");
  }

  return (
    <button
      type="button"
      className={`${styles.button} btn remove-bg-image remove-focus border-0 ${className}`}
      onClick={alternateTheme}
    >
      <div className={styles.toggle_switch}>
        <input
          type="checkbox"
          className={styles.input_check}
          defaultChecked={checked}
        />
        <span className={`${styles.switch} ${styles[theme]}`}></span>
      </div>
    </button>
  );
}
