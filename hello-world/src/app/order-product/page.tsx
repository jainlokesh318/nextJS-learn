'use client';

import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();

    const handleClick = () => {
        console.log("Placing order")
        router.push('/')
    }

    return <button onClick={handleClick}>Place Order</button>
}