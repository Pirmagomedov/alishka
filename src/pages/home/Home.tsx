import React, { useRef, useState } from "react";
import maga from "./../../svg/maga.png"
import leftArrow from "./../../svg/leftArrow.svg"
import "./Home.scss";


const Home = (): React.ReactElement => {

    const [s, setS] = useState(1)
    const re = useRef(1)



    // const array3 = [[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]];
    // const merge = (arr) => {
    //     arr.sort((a, b) => a[0] - b[0])
    //     if (arr.length === 0) return []
    //     const y = [...arr[0]]
    //     const a = arr.filter((e, i) => {
    //         if (i === 0) return false
    //         if (!( e[1] < y[0] || e[0] > y[1] )) {
    //             if (e[0] < y[0]) y[0] = e[0]
    //             if (e[1] > y[1]) y[1] = e[1]
    //         } else return true
    //     })
    //     return [y, ...merge(a)]
    // }

    // console.log(merge(array3))
    console.log(s)
    function a () {
        re.current++
        setS(s+1)
    }

    return <div className="home-container">
        <div className="cubiki">
            <div className="cubiki-first">
                Стань частью добра вместе с фондом “Аль-Хайр”
            </div>
            <div className="cubiki-second">
                Быть добрым не сложно, нужно только представить
            </div>
            <div className="cubiki-third">
                Помочь
            </div>
        </div><div onClick={a}>2</div>
        <div className="infocard">
            <button onClick={a}></button>{s}
            <div className="infocard__arrow">
                <img src={leftArrow} alt="s" />
            </div>
            <div className="infocard__par">
                <div className="infocard__title">
                    15 000 250
                </div>
                <div className="infocard__info">
                    Рублей было собрано на благотворительность.
                </div>
            </div>
        </div>
        <div className="infocard">
            <div className="infocard__arrow">
                <img src={leftArrow} alt="s" />
            </div>
            <div className="infocard__par">
                <div className="infocard__title">
                    40
                </div>
                <div className="infocard__info">
                    Человек уже получили помощь.
                </div>
            </div>
        </div>
        <div className="infocard">
            <div className="infocard__arrow">
                <img src={leftArrow} alt="s" />
            </div>
            <div className="infocard__par">
                <div className="infocard__title">
                    5
                </div>
                <div className="infocard__info">
                    Человек участвуют в поддержке и развитии фонда.
                </div>
            </div>
        </div>
        <div className="person">
            <img src={maga} alt="" />
            <div className="person-title">
                Магомеду 21 год. Он ничего не видит.
            </div>
            <div className="person-info">
                <div className="person-progress"></div>
                <div className="person-info__title">
                    <div className="person-info__state">
                        Средства собраны!
                    </div>
                    <div className="person-info__amount">
                        300 000
                    </div>
                </div>
            </div>
            <div className="person-button">
                <div className="person-button__click" onClick={() => alert("Альхамдулиллагь, все супер :)")}>
                    Что сейчас с Магомедом?
                </div>
            </div>
        </div>
        <div className="watch">
            Фонд «Аль-Хайр — это организация, которая не оставляет равнодушными тех, кто нуждается в помощи. Мы стремимся поддерживать больных людей, детей, пожилых людей, инвалидов и всех, кто сталкивается с трудностями и экстренными ситуациями.
            <br />
            <img src={leftArrow} alt="s" />
        </div>
        <div className="watch">
            Наша основная задача — обеспечить доступ к качественному лечению, операциям и обследованиям в медицинских учреждениях. Мы понимаем, как важна поддержка в трудные времена, и готовы протянуть руку помощи тем, кто в ней нуждается.
            <br />
            <img src={leftArrow} alt="s" />
        </div>
    </div>
}

export default Home
