import { Metadata } from "next"

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`)
        }, 100)
    })
    return {
        title: `Product ${title}`,
    }
}

type Props = {
    params: {
        productId: string
    }
}

export default function ProductDetails({ params }: Props) {
    return <>
        <h1>Product Details {params.productId}</h1>
    </>
}