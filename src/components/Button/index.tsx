/* --- resources --- */
import { forwardRef, Ref } from 'react'

/* --- components --- */
import { ButtonProps } from 'react-bootstrap'
import ButtonBST from 'react-bootstrap/Button'

/* --- styles --- */
import styles from '@components/Button/styles.module.scss'


function Button(
    { children, className, ...props }: ButtonProps,
    ref?: Ref<any>
) {

    return (
        <ButtonBST ref={ref} className={`${styles.button} ${className}`} {...props} >
            {children}
        </ButtonBST>
    )
}

export default forwardRef(Button)