import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl, user } from './Parameters';
import styled from 'styled-components';
import BarLoader from "react-spinners/BarLoader";

const Container = styled.div`
    width: 390px;
    height: 450px;
    margin: auto;
    margin-top: 10px;
    
`

const Img = styled.img`
    width: 370px;
    height: 430px;
    top: 0;
    z-index: 1;
    border-radius: 10px;

`

const TextBox = styled.div`
    position: absolute;
    bottom: 100px;
    width: 380px;

    :hover {
        opacity: 70%;
    }

    p {
      padding: 0 10px;
      font-weight: 100;
      color: white;
      text-shadow: 1px 1px 2px #000;
      
    }

    p:nth-child(1) {
      font-size: 1.5rem;
      padding-bottom: 5px;
    }
    p:nth-child(2) {
      font-size: 1rem;
      padding-bottom: 15px;
      text-align: center;
      word-break: break-word;
    }

`

const ButtonMatch = styled.img` 
    height: 60px;
    width: 60px;
    cursor: pointer;
    :hover {
      transform: scale(1.2);
      transition: linear 0.3s;
    }

`
const ButtonRemove = styled.img` 
    margin-top: 5px;
    height: 50px;
    width: 50px;
    cursor: pointer;

    :hover {
      transform: scale(1.2);
      transition: linear 0.3s;
    }
`

const MatchBox = styled.div` 
    padding: 5px;
    display: flex;
    justify-content: space-around;
`

const Load = styled.div ` 
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
`

function Card() {

    const [profile, setProfile] = useState({});
    const [isMatch, setIsMatch] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    })

    useEffect(() => {
    if (loading === false) {
        {GetProfile()}
    }
    }, [loading])


    const GetProfile = async () => {
        try {
            const res = await axios.get(`${baseUrl}/${user}/person`);
            setProfile(res.data.profile)

        } catch (err) {
            console.log(err)
        }
    };

    const Match = () => {
        const body = {
            id: profile.id,
            choice: true,
        };
        axios
            .post(`${baseUrl}/${user}/choose-person`, body)
            .then((res) => {
                setIsMatch(res.data.isMatch);
                GetProfile();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const Remove = () => {
        const body = {
            id: profile.id,
            choice: false,
        };
        axios
            .post(`${baseUrl}/${user}/choose-person`, body)
            .then((res) => {
                setIsMatch(res.data.isMatch);
                GetProfile();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            {
                loading ?
                    <Load>
                        <BarLoader color={'#ccf5fc'} loading={loading} size={20} />
                    </Load>
                    :

                    <Container>
                        <TextBox>
                            <p>
                                <span>{profile.name},</span> {profile.age}
                            </p>
                            <p>{profile.bio}</p>
                        </TextBox>
                        <Img
                            src={profile.photo}
                            alt="photo"
                        />
                        <MatchBox>
                            <ButtonRemove onClick={Remove} src='https://i.imgur.com/PNKxRgb.png' />
                            <ButtonMatch onClick={Match} src='https://i.imgur.com/kMR0WiL.png' />
                        </MatchBox>
                    </Container>
            }

        </div>
    )
}

export default Card;