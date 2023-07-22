import './App.css'
import SlideShow from "./components/SlideShow.tsx";
import Footer from "./components/Footer.tsx";
import Search from "./components/Search.tsx";

function App() {


    return (
        <>
            <h1 className={'font-mono text-3xl text-white pb-8 pt-4'}>Welcome to the Display Room of Art Institute of Chicago</h1>

            <main className={"font-sans "}>
                <div className="divider"></div>

                <Search/>
                <br/>


                <SlideShow/>
            </main>

            <Footer/>


        </>
    )
}

export default App
