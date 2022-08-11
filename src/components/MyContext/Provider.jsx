import React, { useState, useEffect } from 'react';
import MyContext from './MyContext';
import { apiGitHub } from "../../services/api";


function HomeProvider({ children }) {

    const [searchcDefault, setsearDefault] = useState('tonistorres');
    const [filterTable, setFilterTable] = useState('');
    const [searchFilter, setFilterSearch] = useState();
    const [avatarGitHub, setAvatarGitHub] = useState('');
    const [userGitHub, setUserGitHub] = useState('');
    const [userLoginGitHub, setLoginGitHub] = useState('');
    const [userBioGitHub, setBioGitHub] = useState('');
    const [userBlog, setBlogGithub] = useState('');
    const [userLocation, setUserLocation] = useState('');
    const [load, setLoad] = useState(false);
    const [userFollowers, setFolloers] = useState();
    const [userFollowing, setFollowing] = useState();
    const [arrayRepositories, SetArrayRepositories] = useState([])


    // Maneira correta de fazer um useEfect ComponentDidMount Utilizando o Hook
    // useEfect - callback + lista vazia []
    useEffect(() => {
        const handleSearchDefaultGitHub = async () => {
            try {
                    setLoad(true);
                    const response = await apiGitHub.get(`/${searchcDefault}`);
                    const responseRepositories = await apiGitHub.get(`/${searchcDefault}/repos`);
                    const { avatar_url, name, login, bio, blog, followers, following, location } = response.data;
                    setAvatarGitHub(avatar_url);
                    setUserGitHub(name);
                    setLoginGitHub(login);
                    setBioGitHub(bio);
                    setBlogGithub(blog);
                    setUserLocation(location);
                    setFolloers(followers);
                    setFollowing(following);
                    SetArrayRepositories(responseRepositories.data);
                    setLoad(false);    
            } catch (error) {
                console.log("Erro Provider useEffect handleSearchDefaultGitHub:", error);
            }
        }
        handleSearchDefaultGitHub();
    }, []);


    // filter
    const handleUpdateStatus = (evt) => {
        setFilterTable(evt.target.value);
    }

    const onInputChangeSearchFilter = ({ target }) => {
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setFilterSearch(value)
    }


    return (
        <MyContext.Provider value={{
            searchcDefault,
            avatarGitHub,
            userGitHub,
            userLoginGitHub,
            userBioGitHub,
            load,
            userBlog,
            userFollowers,
            userFollowing,
            arrayRepositories,
            userLocation,
            searchFilter,
            filterTable,
            onInputChangeSearchFilter,
            handleUpdateStatus
        }}>
            {children}
        </MyContext.Provider>
    );
}

export default HomeProvider;