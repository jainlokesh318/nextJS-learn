export default function Docs({ params }: {
    params: {
        slug: string[]
    }
}) {
    return <>
        <h1>Docs {params.slug?.length}</h1>
    </>
}