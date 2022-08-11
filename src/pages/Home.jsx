import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import AvatarGitHub from "../components/GitHub/AvatarGitHub";
import TableGitHub from "../components/GitHub/TableGitHub";
import Provider from '../components/MyContext/Provider';
import './App.css'

function Home() {
    return (
        <Provider>
            <NavBar />
            <div className="container-fluid overflow-auto border-red">
                <div className="row"> {/*linha*/}
                    <div className="col-md col-lg-4 pb-5 pt-5 bg-dark"> {/*coluna 01*/}
                        <AvatarGitHub />
                    </div>
                    <div className="col-md col-lg-8 pb-5 pt-2"> {/*coluna 02*/}
                        <TableGitHub/>
                    </div>
                </div>
            </div>
            <Footer />
        </Provider>
    );
}

export default Home; 