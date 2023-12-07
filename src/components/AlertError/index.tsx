/* --- resources --- */

/* --- hooks --- */
import { useTheme } from "Context/ThemeContext";

/* --- components --- */
import Alert from 'react-bootstrap/Alert'

/* --- styles --- */
import styles from '@components/AlertError/styles.module.scss'

export default function AlertError({ text, ...props }: { text: string }) {

    const { theme } = useTheme()

    return (
        <Alert className={`${styles.alertCustom} ${styles[theme]} p-1 text-error float-end border-0`} {...props}> {text} </Alert>
    )
}