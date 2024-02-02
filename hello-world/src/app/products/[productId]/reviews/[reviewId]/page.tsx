'use client'
import getRandomInt from "@/app/_lib/getRandomInt";
import { notFound } from "next/navigation"

export default function ReviewDetails({ params }: {
    params: {
        productId: string,
        reviewId: string
    }
}) {
    // let randomInt = getRandomInt(3);

    // if (randomInt === 1) {
    //     throw new Error("Error Loading Review")
    // }

    if (parseInt(params.reviewId) > 1000) {
        notFound();
    }

    return <>
        <h1>ReviewId {params.reviewId} for Product {params.productId}</h1>
    </>
}