import Recipes from './Recipes';
import '../styles/index.scss';
import drink from "../images/01.jpg";




const App = () => {
    return (
        <>
            <section className="hero">
                <main>
                    <section>
                        <h1>hi React, react</h1>
                    </section>
                    <img src={drink} alt="drink" width="250" />
                </main>
                <Recipes />
            </section>

        </>
    )
}

export default App
