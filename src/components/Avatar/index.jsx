import React from 'react'
import Image from 'next/image'
import styles from './avatar.module.css'

export default function Avatar({name ,imageSrc}) {
    return (<ul className={styles.avatar}>
        <li>
            <Image src={imageSrc} width={32} height={32} alt={`Avatar do(a) ${name}`}/>
        </li>
        <li>
            @{name}
        </li>
    </ul>)
}
