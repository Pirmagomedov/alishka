import React from "react";
import "./Home.scss";


const Home = (): React.ReactElement => {

    return <div className="home-container">
      <header className="header">
        <h1>Фонд благотворительности Аль-Хайр</h1>
        <p className="tagline">Помогая другим, мы помогаем себе.</p>
      </header>
      
      <section className="about">
        <h2>О нас</h2>
        <p>
          Фонд "Аль-Хайр" предоставляет помощь нуждающимся и поддерживает социальные проекты
          по всему миру. Наши инициативы охватывают помощь бедным, сиротам, а также организацию
          образовательных и медицинских программ для людей с ограниченными возможностями.
        </p>
      </section>

      <section className="donate">
        <h2>Как помочь</h2>
        <p>
          Вы можете внести свой вклад в нашу работу, сделав пожертвование. Ваша помощь
          может изменить жизни людей!
        </p>
        <button className="donate-button">Пожертвовать</button>
      </section>
      
      <footer className="footer">
        <p>© 2024 Фонд Аль-Хайр. Все права защищены.</p>
      </footer>
    </div>
}

export default Home