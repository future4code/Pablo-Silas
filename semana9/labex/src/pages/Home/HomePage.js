import React from 'react';
import { Container, HR, Botao, Logo, BoxLogo, BoxBotao, DivInfo, DivBotao, DivTrip, NameTrip, BoxTrip, H2, HeaderTrip, BotaoLink, BotaoLink2 } from './Homepage-styled';
import { useHistory } from 'react-router-dom';
import { goToLogin, goToSignup } from '../../router/Coordinator';
import { useTripsList } from '../../hooks/useTripList';


const Home = () => {
    const trips = useTripsList();
    const history = useHistory();

    const goToFormPage = (id) => {
        history.push(`/form/${id}`)
    }

    return (
        <Container>
            <BoxTrip>
                <HeaderTrip>
                    <H2>Viagens Disponiveis</H2>
                </HeaderTrip>

                {trips.map((i) => {
                    return (
                        <DivTrip>
                            <div>
                                <h3><strong>{i.name}</strong></h3>
                            </div>
                            <DivInfo>
                                <p><strong>Dia: </strong>{i.date}</p>
                                <p><strong>Indo para: </strong>{i.planet}</p>
                                <p><strong>Duração: </strong>{i.durationInDays} dias</p>
                                <p>{i.description}</p>
                                <DivBotao>
                                    <Botao onClick={() => goToFormPage(i.id)}>Candidatar</Botao>
                                </DivBotao>
                                <HR />
                            </DivInfo>
                        </DivTrip>
                    )
                })}
            </BoxTrip>
            <BoxLogo>
                <Logo>LabeX</Logo>
                <BoxBotao>
                    <BotaoLink onClick={() => goToLogin(history)}>Login</BotaoLink>
                    <BotaoLink2 onClick={() => goToSignup(history)}>Cadastrar</BotaoLink2>
                </BoxBotao>
            </BoxLogo>
        </Container>
    )
}

export default Home;
