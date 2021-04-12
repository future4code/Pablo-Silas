import React, { useEffect, useState } from 'react';
import { useProtectedPage } from '../../hooks/useProtectPage';
import { BoxFeed, BoxPost, Logo, BoxUser, Input, BotaoHeader, Center, BoxCriarPost, Header, BoxLike, Title, BotaoCriar, ImgLike } from './styled';
import axios from 'axios';
import useForm from '../../hooks/useForm';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import { goToFeed, goToHome, goToPost } from '../../routes/Coordinators';
import Footer from '../../components/Footer';
import { CircularProgress } from '@material-ui/core';

const Feed = () => {
    
    useProtectedPage();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [post, setPost] = useState([]);
    const [create, setCreate] = useState(false);
    const [logout, setLogout] = useState(false);
    
    const [form, onChange, clearInput] = useForm({
        text: '',
        title: '',
    });

    useEffect(() => {
        setIsLoading(true)
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts',
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then((res) => {
                setPost(res.data.posts)
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
            })

    }, [])

    const votePositive = (id) => {
        const body = {
            direction: 1,
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/vote`, body,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then((res) => {
                document.location.reload(true);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const voteNegative = (id) => {

        const body = {
            direction: -1,
        }

        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/vote`, body,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then((res) => {
                document.location.reload(true);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const createPost = () => {
        setIsLoading(true)
        const body = {
            text: form.text,
            title: form.title,
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts', body,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then((res) => {
                document.location.reload(true);
                setIsLoading(false)
                clearInput();
                swal({
                    title: "Novo Post Criado!",
                    icon: "success",
                });
            })
            .catch((err) => {
                setIsLoading(false)
                swal({
                    title: "Erro ao criar post!",
                    icon: "warning",
                });
            })
    }

    const onClickPost = (id) => {
        goToPost(history, id)
    }

    const handleCreatePost = () => {
        setCreate(true)
    }

    const Logout = () => {
        if (!logout) {
            setLogout(localStorage.removeItem('token'))
            history.push('/');

        }
    }

    return (
        <div>
            {!create ?
                <div>
                    <Header>
                        <BotaoHeader onClick={handleCreatePost}>Criar Novo Post</BotaoHeader>
                        <BotaoHeader onClick={Logout}>Logout</BotaoHeader>
                    </Header>
                    <Logo onClick={() => goToFeed(history)}>labEddit</Logo>
                    {isLoading ? <Center><CircularProgress size={200}/></Center> : <BoxFeed>
                        {post.map((post) => {
                            return (
                                <BoxPost>
                                    <div onClick={() => onClickPost(post.id)}>
                                        <h4>{post.username}</h4>
                                        <br />
                                        <hr />
                                        <h4>{post.title}</h4>
                                        <br />
                                        <p>{post.text}</p>
                                        <br />
                                        <hr />
                                    </div>
                                    <BoxUser>
                                        <BoxLike>
                                            <ImgLike onClick={() => votePositive(post.id)} width='30px' src='https://image.flaticon.com/icons/png/512/3/3892.png' />
                                            <p>{post.votesCount}</p>
                                            <ImgLike onClick={() => voteNegative(post.id)} width='30px' src='https://image.flaticon.com/icons/png/512/25/25623.png' />
                                        </BoxLike>
                                        <p onClick={() => onClickPost(post.id)}>{post.commentsCount} comentarios</p>
                                    </BoxUser>
                                </BoxPost>
                            )
                        })}
                    </BoxFeed>}
                </div>
                :
                <div>
                    <Header>
                        <BotaoHeader onClick={() => goToHome(history)}>Feed</BotaoHeader>
                        <BotaoHeader onClick={Logout}>Logout</BotaoHeader>
                    </Header>
                    <Logo onClick={() => goToFeed(history)}>labbEddit</Logo>
                    <BoxFeed>
                        <BoxCriarPost>
                            <Title>Criar Nova Postagem</Title>
                            <Input
                                name='title'
                                placeholder='Titulo da postagem'
                                value={form.title}
                                onChange={onChange}
                                required
                            />
                            <Input
                                name='text'
                                placeholder='Conteúdo'
                                value={form.text}
                                onChange={onChange}
                                required
                            />
                            <BotaoCriar onClick={createPost}>{isLoading? <CircularProgress color={'inherit'} size={24}/> : <>Criar Post</>}</BotaoCriar>
                        </BoxCriarPost>
                        <br />
                        <br />
                        {post.map((post) => {
                            return (
                                <BoxPost>
                                    <div onClick={() => onClickPost(post.id)}>
                                        <h4>{post.username}</h4>
                                        <br />
                                        <hr />
                                        <h4>{post.title}</h4>
                                        <br />
                                        <p>{post.text}</p>
                                        <br />
                                        <hr />
                                    </div>
                                    <BoxUser>
                                        <BoxLike>
                                            <ImgLike onClick={() => votePositive(post.id)} width='30px' src='https://image.flaticon.com/icons/png/512/3/3892.png' />
                                            <p>{post.votesCount}</p>
                                            <ImgLike onClick={() => voteNegative(post.id)} width='30px' src='https://image.flaticon.com/icons/png/512/25/25623.png' />
                                        </BoxLike>
                                        <p onClick={() => onClickPost(post.id)}>{post.commentsCount} comentarios</p>
                                    </BoxUser>
                                </BoxPost>
                            )
                        })}
                    </BoxFeed>
                </div>
            }
            {isLoading? <></> : <Footer />}
        </div>
    )
}
export default Feed;