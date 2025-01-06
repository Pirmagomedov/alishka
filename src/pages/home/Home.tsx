import React, { useState } from "react";
import maga from "./../../svg/maga.png"
import leftArrow from "./../../svg/leftArrow.svg"
import "./Home.scss";


const Home: React.FC = () => {

    const [clocks, setClocks] = useState(12)
    const [minutes, setMinutes] = useState(15)


    const setC = (e) => {
        const bool = !Number.isNaN(+e.target.value)
        if (bool && 0 <= +e.target.value && +e.target.value <= 23) setClocks(+e.target.value)

    }

    const setM = (e) => {
        const bool = !Number.isNaN(+e.target.value)
        if (bool && 0 <= +e.target.value && +e.target.value <= 59) setMinutes(+e.target.value)
    }


    return <div className="home-container">
        <div className="time">
            <div className="time__dis">
                <div className="time__clocks">
                    <input value={clocks < 10 ? "0" + clocks : "" + clocks} onChange={setC} type="text" />
                    <span>{(clocks * 30 + minutes / 2) % 360}°</span>
                </div>
                <div className="time__minutes">
                    <input value={minutes < 10 ? "0" + minutes : "" + minutes} onChange={setM} type="text" />
                    <span>{minutes * 6}°</span>
                </div>
            </div>
            <div className="time__wat">
                <div className="time__cloc" style={{ transform: `rotate(${(clocks * 30 + minutes / 2) % 360}deg)` }}>
                    <div className="time__cloc_arrow"></div>
                </div>
                <div className="time__min" style={{ transform: `rotate(${minutes * 6}deg)` }}>
                    <div className="time__min_arrow"></div>
                </div>
            </div>
        </div>

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
        </div>
        <div className="infocard">
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
