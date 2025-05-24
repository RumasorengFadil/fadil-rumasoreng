"use client"
import Image from "next/image"
import { FigCaption } from "./FigCaption"
import { useState } from "react"


export const Figure = ({ src, figCaption = "", className, children, alt = "" }: { src: string, figCaption?: string, className?: string, children?: React.ReactNode, rounded?: string, alt?: string}) => {
    const [isScale, setIsScale] = useState(false);

    return (
        <figure className={`flex flex-col space-y-2 ${className}`}>
            <div onClick={() => setIsScale(!isScale)} className={`transition-all hover:opacity-40 cursor-pointer ${isScale ? "relative w-96 h-96" : "relative w-44 h-44"}`}>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                    className="h-full w-full rounded-full border-4 border-black"
                />
            </div>
            {children ? children : <FigCaption caption={figCaption} />}
        </figure>
    )
}