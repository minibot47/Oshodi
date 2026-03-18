import { Suspense } from "react";
import Shop from "../components/shop";

export default function Page(){
    return(
        <Suspense>
            <Shop/>
        </Suspense>
        
    )
}