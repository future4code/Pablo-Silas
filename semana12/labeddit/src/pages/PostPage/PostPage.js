import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProtectedPage } from '../../hooks/useProtectPage';
import axios from 'axios';
import useForm from '../../hooks/useForm';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import { Logo, BoxPost, Header, Center, BotaoHeader, BoxDetail, BoxComments, Title, BoxBotao, Input, BotaoComments } from './styled'
import { goToFeed, goToHome } from '../../routes/Coordinators';
import Footer from '../../components/Footer';
import { CircularProgress } from '@material-ui/core';


const PostPage = () => {

    useProtectedPage();
    const params = useParams();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [post, setPost] = useState([]);
    const [logout, setLogout] = useState(false);
    const [comments, setComments] = useState([]);
    const [form, onChange, clearInput] = useForm({
        text: '',
    });


    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.id}`,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then((res) => {
                setPost(res.data.post)
                setComments(res.data.post.comments)
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
            })

    }, [params.id])

    const createComment = () => {
        setIsLoading(true)
        const body = {
            text: form.text,
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.id}/comment`, body,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then((res) => {
                setIsLoading(false)
                clearInput();
                swal({
                    title: "Comentário Criado!",
                    icon: "success",
                });
            })
            .catch((err) => {
                setIsLoading(false)
                swal({
                    title: "Erro ao criar comentário!",
                    icon: "warning",
                });
            })

    }

    const Logout = () => {
        if (!logout) {
            setLogout(localStorage.removeItem('token'))
            history.push('/');

        }
    }


    return (
        <div>
            <Header>
                <BotaoHeader onClick={() => goToHome(history)}>Feed</BotaoHeader>
                <BotaoHeader onClick={Logout}>Logout</BotaoHeader>
            </Header>
            <Logo onClick={() => goToFeed(history)}>labbEddit</Logo>
            {isLoading? <Center><CircularProgress size={200}/></Center> : <BoxPost>
                <BoxDetail>
                    <h4>{post.title}</h4>
                    <br />
                    <p>{post.text}</p>
                    <br />
                    <hr />
                    <Title>Adicionar Comentário</Title>
                    <Input
                        name='text'
                        placeholder='Comentário'
                        value={form.text}
                        onChange={onChange}
                        required
                    />
                    <BoxBotao>
                        <BotaoComments onClick={createComment}>Comentar</BotaoComments>
                    </BoxBotao>
                    <br />
                    <Title>Comentários</Title>
                    {comments.map((i) => {
                        return (
                            <BoxComments>
                                <h4>{i.username} :</h4>
                                <br />
                                <p>{i.text}</p>
                            </BoxComments>
                        )
                    })}

                </BoxDetail>
            </BoxPost>}
            {isLoading? <></> : <Footer />}
        </div>
    )
}

export default PostPage;