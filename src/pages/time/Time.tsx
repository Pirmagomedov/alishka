import React, { useState, useEffect } from "react"
import "./Time.scss"

const Time: React.FC = () => {

    const [clocks, setClocks] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const date = new Date()
        setClocks(date.getHours())
        setMinutes(date.getMinutes())
        setSeconds(date.getSeconds())

        setInterval(() => {
            const date = new Date()
            setClocks(date.getHours())
            setMinutes(date.getMinutes())
            setSeconds(date.getSeconds())
        }, 1000)
    }, [])

    return <div className="time">
        <div className="time__wat">
            <div className="time__cloc" style={{ transform: `rotate(${(clocks * 30 + minutes / 2) % 360 + seconds * 0.01}deg)` }}>
                <div className="time__cloc_arrow"></div>
            </div>
            <div className="time__min" style={{ transform: `rotate(${minutes * 6 + seconds * 0.1}deg)` }}>
                <div className="time__min_arrow"></div>
            </div>
            <div className="time__sec" style={{ transform: `rotate(${seconds * 6}deg)` }}>
                <div className="time__sec_arrow"></div>
            </div>

            {
                [...Array(180).keys()].map((e, i) =>
                    e % 30 === 0 ?
                        <div className="time__cl" key={i} style={{ transform: `rotate(${e}deg)` }}>
                            <div className="time__cl_arr"></div>
                            <div className="time__cl_arr"></div>
                        </div>
                        : e % 6 === 0 ?
                            <div className="time__mi" key={i} style={{ transform: `rotate(${e}deg)` }}>
                                <div className="time__mi_arr"></div>
                                <div className="time__mi_arr"></div>
                            </div>
                            : null
                )
            }

            {
                [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((e, i) =>
                    <div className="time__dig" key={i} style={{ transform: `rotate(${e * 30}deg)` }}>
                        <div className="time__dig_val" style={{ transform: `rotate(${-e * 30}deg)` }}>{e}</div>
                    </div>
                )
            }

        </div>
    </div>
}

export default Time