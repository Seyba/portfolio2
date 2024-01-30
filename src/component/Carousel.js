import React, {useState, useEffect} from "react";

export const Carousel = () => {
    const data = [
        {item: 'one'},
        {item: 'two'}
    ]
    const [index, setIndex] = useState(data.length > 3 ? data.length - 1 : 2 )
    const [right, setRight] = useState(1)
    const [current, setCurrent] = useState(0)
    const [left, setLeft] = useState(-1)

    const next = () => {
        setCurrent(current === index ? 0 : current + 1)
        setRight(right === index ? 0 : right + 1)
        setLeft(left === index ? 0 : left + 1)
    }
    const prev = () => {
        setCurrent(current === 0 ? index : current - 1)
        setRight(right === 0 ? index : right - 1)
        setLeft(left === 0? index : left - 1)
    }
    return(
        <div>

        </div>
    )
}

