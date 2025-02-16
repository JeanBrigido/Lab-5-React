import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";


const App = () => {
    const name = "Jean";

    return (
        <>
            <Header name = {name} />
            <Section />
            <Footer />

        </>
    );
};

export default App;