import getRandomInt from "@/app/_lib/getRandomInt";

export default function ProductDetailsLayout({ children }: {
    children: React.ReactNode
}) {
    let randomInt = getRandomInt(3);

    if (randomInt === 1) {
        throw new Error("Error Loading Product")
    }
    return <div>
        <h2>Features Product</h2>
        {children}</div>
}