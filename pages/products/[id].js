import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from '@/lib/axios';
import SizeReviewList from "@/components/SizeReviewList";

export default function Product() {
    const [product, setProduct] = useState();
    const [sizeReviews, setSizeReviews] = useState([]);
    const router = useRouter();
    const { id } = router.query;
    //리퀘스트 해서 데이터 가져오기
    async function getProduct(targetID) {
        const res = await axios.get(`/products/${targetID}`);
        const nextProduct = res.data;
        setProduct(nextProduct);
    }

    async function getSizeReviews(targetID) {
        const res = await axios.get(`/size_reviews/?product_id=${targetID}`);
        const nextSizeReviews = res.data.results ?? [];
        setSizeReviews(nextSizeReviews);
    }

    useEffect(() => {
        if (!id) return;

        getProduct(id);
        getSizeReviews(id);
    }, [id]);

    if (!product) return null;

    return (
        <div>
            <h1>{product.name}</h1>
            <img
                src={product.imgUrl}
                alt={product.name}
            />
            <SizeReviewList sizeReviews={sizeReviews} />
        </div>
    );
}