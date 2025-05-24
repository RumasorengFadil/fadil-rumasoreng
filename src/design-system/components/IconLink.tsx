import Image from "next/image"
import Link from "next/link"

export const IconLink = ({ src="", className, children, alt = "icon", href, height=40, width=40, target }: { src?: string, className?: string, children?: React.ReactNode, alt?: string, href: string, height?:number, width?:number, target?:string  }) => {
    return (
        <Link target={target} href={href}>
            {children ?
                children
                : <Image
                    width={width}
                    height={height}
                    className={"w-6 " + className}
                    src={src}
                    alt={alt}
                    unoptimized
                />}
        </Link>
    )
}