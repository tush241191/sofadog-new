import React, { useEffect } from "react";
import { useRouter } from 'next/router';

const index = () => {
    const router = useRouter();
    useEffect(() => {
        router.push('/GeneralPurchaseTerms_so.fa.dog_18Sept2020.pdf');
    }, [])
    return (
        <div>
        </div>
    );
};

export default index;