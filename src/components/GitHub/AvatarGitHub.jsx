import React, { useContext } from 'react';
import { FaSearchLocation, FaBuilding } from 'react-icons/fa';
import { BsFillPersonFill, BsPersonCircle } from "react-icons/bs";
import MyContext from '../MyContext/MyContext';
import './AvatarGitHub.css';
import loadLogoGitHub from '../../assets/img/loading.gif';

function AvatarGitHub() {
    const value = useContext(MyContext);
    return (
        <>
            {
                value.load ? (

                    <div className='container-fluid d-flex  justify-content-center align-items-center'>
                        <img className='img-rad-50' src={loadLogoGitHub} alt="Foto Perfil" />                        
                    </div>

                ) : (

                    <section className='section-main'>
                        <>
                        <div className='container-fluid'></div>
                            <img className='p-6 img-rad-50' src={value.avatarGitHub} alt="Foto Perfil" />
                            <h4 className='style-user-git-hub'>{value.userGitHub}</h4>
                            <h5 className='text-monospace style-login-git-hub'>{value.userLoginGitHub}</h5>
                            <div>
                                <p className='style-bio-git-hub text-justify'>{value.userBioGitHub}</p>
                            </div>
                        </>
                        <div className='section-location-jobs'>
                            <span className='text-monospace'><FaSearchLocation size={28} />{value.userLocation}</span>
                            <span className='text-monospace'><FaBuilding size={28} /> Remoto</span>

                        </div>

                        <div className='section-location-jobs'>
                            <span class="text-monospace font-weight-bold"> <BsFillPersonFill size={28} />followers: {value.userFollowers} </span>
                            <span class="text-monospace font-weight-bold"><BsPersonCircle size={28} /> following: {value.userFollowing} </span>
                        </div>

                        <h4>SOBRE:</h4>
                        <div className='section-sobre'>
                            <span class="text-monospace text-justify">Tecnólogo por definição, sou apaixonado por linguagens de máquinas e busco constantemente me reciclar, fazendo cursos, me relacionando com profissionais experientes, colegas de faculdade, amigos desenvolvedores, professores, etc. Aprender a aprender, esse é o meu lema, e me esforço sempre a melhorar como profissional e pessoa desenvolvedora que sou.</span>
                            <span class="text-monospace text-justify">Atualmente resolvi me desafiar ingressando no curso de Desenvolvimento Web, onde estou aprendendo uma nova stack, que contempla tecnologias como: Type Script, Node Js, React entre outras. O curso é muito intenso dado a robustez curricular, mais o comprometimento genuíno de ambas as partes são o diferencial nessa jornada de sucesso.</span>
                            <span class="text-monospace font-weight-bold text-justify">Tecnologias: HTML (HyperText Markup Language), CSS (Cascading Style Sheets), JS ES6 (Java Script), Unix & Bash, Git, GitHub, DOM, Redux, Contex API, Styled-Components, MYSQL(Sistema Gerenciador de Banco de Dados Relacional), Testes Unitários (Jest), Higher-order function, Docker, Noje, Mocha, Sinon, Chai e Express.</span>
                        </div>

                        <div className='container-fluid bg-color-01'>
                            <img className='img-teck-size p-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                            <img className='img-teck-size p-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                            <img className='img-teck-size p-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                            <img className='img-teck-size p-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            <img className='img-teck-size p-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                            <img className='img-teck-size p-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
                            <img className='img-teck-size p-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" />
                            <img className='img-teck-size p-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                            <img className='img-teck-size p-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                            <img className='img-teck-size p-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                            <img className='img-teck-size p-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" />
                            <img className='img-teck-size p-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                            <img className='img-teck-size p-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" />
                            <img className='img-teck-size p-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />
                            <img className='img-teck-size p-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" />
                            <img className='img-teck-size p-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                            <img className='img-teck-size p-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                        </div>
                    </section>

                )
            }
        </>
    );
}

export default AvatarGitHub;