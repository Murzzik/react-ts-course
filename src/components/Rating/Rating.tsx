import React, {useState} from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingPropsType) {

    const [rank, setRank] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)

    console.log('Rating rendering')
        return (
            <div>
                <Star selected={rank > 0} select={() => setRank(1)}/>
                <Star selected={rank > 1} select={() => setRank(2)}/>
                <Star selected={rank > 2} select={() => setRank(3)}/>
                <Star selected={rank > 3} select={() => setRank(4)}/>
                <Star selected={rank > 4} select={() => setRank(5)}/>
            </div>
        );
    }
type StarPropsType = {
    selected: boolean
    select: () => void
}

function Star(props: StarPropsType) {
    return <span onClick={props.select}>{ props.selected ? <b>star </b> : 'star '}</span>
}