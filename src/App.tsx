import './App.css'
import SlideShow from "./components/SlideShow.tsx";
import Footer from "./components/Footer.tsx";

function App() {
    return (
        <>
            <h1 className={'text-4xl pb-8 pt-4'}>Welcome to the Display Room of Art Institute of Chicago</h1>

            <main className={"font-sans "}>
                <div
                    className={"h-28 bg-yellow-600 bg-opacity-50 text-white text-lg text-center uppercase tracking-widest py-2"}>
                    <p className={'my-2'}>What piece of artwork you would like to study today?</p>
                    <input type="text" placeholder="Start by Searching Artist Name"
                           className="input text-gray-600 bg-yellow-50 input-ghost w-1/3"/>
                </div>
                <div className="divider"></div>

                <SlideShow/>
            </main>

            <Footer/>


        </>
    )
}

export default App
