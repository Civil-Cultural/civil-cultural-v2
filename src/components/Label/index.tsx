/* --- resources --- */
import { ForwardedRef, forwardRef } from 'react'

/* --- hooks --- */
import { useTheme } from "Context/ThemeContext"

/* ----------- CONTRACTS ----------- */
import { LabelProps } from 'Contracts/Components'

/* --- styles --- */
import styles from '@components/Label/styles.module.scss'

import {
    FloatingLabel
} from 'react-bootstrap'

interface RefLabel {
    current: HTMLDivElement | null
}

function Label(
    { children, className = '', ...props }: LabelProps,
    ref: ForwardedRef<RefLabel>
) {
    const { theme } = useTheme()

    return (
        <FloatingLabel
            ref={ref}
            className={`${styles.float_label} ${styles[theme]} ${className}`}
            {...props}
        >
            {children}
        </FloatingLabel>
    )
}



export default forwardRef(Label)