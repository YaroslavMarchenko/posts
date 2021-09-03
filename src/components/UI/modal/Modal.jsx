import React from 'react';
import styles from './Modal.module.css'

const Modal = ({children, ...props}) => {

    const rootStyles = [styles.modal]
    if (props.visible) {
        rootStyles.push(styles.active)
    }

    return (
        <div {...props} className={rootStyles.join(' ')} onClick={() => props.setVisible(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;