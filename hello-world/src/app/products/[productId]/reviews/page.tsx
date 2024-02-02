export default function Reviews({ params }: { params: { productId: string } }) {
    return <>
        <h1>Reviews for {params.productId}</h1>
    </>
}