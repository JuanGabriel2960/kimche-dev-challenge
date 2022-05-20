import React, { ReactElement } from 'react'
import './styles.css'

export interface Props {
    children: ReactElement | ReactElement[];
}

export const Container = ({ children }: Props) => {
    return (
        <div className='container-screen'>
            {children}
        </div>
    )
}
