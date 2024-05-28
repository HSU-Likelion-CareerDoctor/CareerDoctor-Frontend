import { useState } from "react";
import SpecCard from "./SpecCard";

function SpecCardList(){
    const tempNumCard = 4;
    const [numCards, setNumCards] = useState(tempNumCard);
    return <>
        <div>
            <div>
                {Array.from({ length: numCards }).map((_, index) => (
                    <SpecCard key={index} />
                ))}
            </div>
        </div>
        <div>
            <button onClick={() => setNumCards(numCards + 4)}>더보기</button>
        </div>
    </>;
}
export default SpecCardList;