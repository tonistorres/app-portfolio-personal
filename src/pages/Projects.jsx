import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import dbCol1 from '../components/Cards/dbCardCol1';
import dbCol2 from "../components/Cards/dbCardCol2";
import CardCol1 from "../components/Cards/CardCol1";
import CardCol2 from "../components/Cards/CardCol2";

// https://www.digitalocean.com/community/tutorials/how-to-customize-react-components-with-props-pt

function Projects() {
    return (<>
        <NavBar />
        <div className="container-fluid  mt-1 mb-5 pb-2">
            <div className="row"> {/*linha*/}
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    {
                        dbCol1.map((item, index) => (
                            <CardCol1
                                key={index}
                                project={item.project}
                                img={item.img}
                                linkedin = {item.linkLikedin}
                                youtube = {item.linkYoutube}
                                gitHub = {item.gitHub}
                                arrHab = {item.arrHabilidades.map((habilidade)=>habilidade)}
                            />
                        ))
                    }
                </div>

                 <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                {
                        dbCol2.map((item, index) => (
                            <CardCol2
                                key={index}
                                project={item.project}
                                img={item.img}
                                linkedin = {item.linkLikedin}
                                youtube = {item.linkYoutube}
                                gitHub = {item.gitHub}
                                arrHab = {item.arrHabilidades.map((habilidade)=>habilidade)}
                            />
                        ))
                    }
                </div> 
            </div>
        </div>
        <Footer />
    </>);
}

export default Projects;