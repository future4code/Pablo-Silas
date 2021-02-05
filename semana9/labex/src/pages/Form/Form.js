import React from 'react';
import HeaderUser from '../../components/HeaderUser';
import { Box, H1, Inputs, SelectPais, Botao } from './Form-styled';
import { useTripsList } from '../../hooks/useTripList';
import axios from 'axios';

import useForm from '../../hooks/useForm';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';

const Form = () => {
    const { id } = useParams();
    const trips = useTripsList();
    const [form, onChange, clearInput] = useForm({
        name: '',
        age: 0,
        profession: '',
        country: null,
        applicationText: '',
        trip: null
    });

    const onSubmitApplication = (e) => {
        e.preventDefault()
        console.log(form)
        console.log(trips)
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country,
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/pablo-silas-epps/trips/${id}/apply`, body)
            .then((res) => {
                clearInput();
                alert(res.data.message)
                console.log(res)
            })
            .catch((err) => {
                alert('Erro ao enviar aplicação')
            })
    }

    return (
        <div>
            <div>
                <HeaderUser />
            </div>
            <Box>
                <H1>Inscrever na Viagem</H1>
                <form onSubmit={onSubmitApplication}>
                    <Inputs
                        name='name'
                        value={form.name}
                        placeholder='Nome do Candidato'
                        onChange={onChange}
                        required
                    />
                    <Inputs
                        name='age'
                        value={form.age}
                        placeholder='Idade'
                        type='number'
                        onChange={onChange}
                        required
                    />
                    <Inputs
                        name='profession'
                        value={form.profession}
                        placeholder='Profissão'
                        onChange={onChange}
                        required
                    />
                    <SelectPais
                        name="country"
                        value={form.country}
                        onChange={onChange}
                        required
                    >
                        <option disabled selected value>País</option>
                        <option value="brasil">Brasil</option>
                        <option value="argentina">Argentina</option>
                        <option value="eua">Estados Unidos</option>
                        <option value="espanha">Espanha</option>
                    </SelectPais>
                    <Inputs
                        name='applicationText'
                        value={form.applicationText}
                        onChange={onChange}
                        required
                        placeholder='Por que você é um bom candidato?'
                    />
                    <Botao>Inscrever</Botao>
                </form>
            </Box>
            <Footer />
        </div>
    )
}

export default Form;
