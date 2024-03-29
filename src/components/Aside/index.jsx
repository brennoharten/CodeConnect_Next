import Image from 'next/image'
import styles from './aside.module.css'
import logo from './logo.png'
import React from 'react'

export default function Aside() {
    return (
        <aside className={styles.aside}>
            {/* <img src="/logo.png" alt="Logo da Code Connect" /> */}
            <Image src={logo} alt="Logo da Code Connect" />
        </aside>
    )
}

