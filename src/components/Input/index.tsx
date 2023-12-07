/* --- resources --- */
import { forwardRef, Ref, useContext } from 'react'
/* --- hooks --- */
import { useTheme } from "Context/ThemeContext";

/* ----------- CONTRACTS ----------- */
import { FormControlProps } from 'react-bootstrap'

/* --- components --- */
import Form from 'react-bootstrap/Form'

/* --- styles --- */
import styles from '@components/Input/styles.module.scss'

function Input(
    {
        className,
        ...props
    }: FormControlProps,
    ref?: Ref<any>
) {
    const { theme } = useTheme()

    return (
        <Form.Control className={`${styles.inputCustomized} ${styles[theme]} ${className}`} ref={ref} {...props} />
    )
}

export default forwardRef(Input)