import React from 'react'

interface Props {
    title: string;
}

export const Group = ({ title }: Props) => {

    return (
        <div>
            <h3>{title}</h3>
        </div>
    )
}
