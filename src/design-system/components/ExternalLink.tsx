import React from 'react';

export function ExternalLink({ href, children }:{href:string, children:React.ReactNode}) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
}
