import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Box, H1, Inputs, Botao } from './CreateTrip-styled';
import axios from 'axios';
import { useProtectedPage } from '../../hooks/useProtectPage';
import useForm from '../../hooks/useForm';

const CreateTrip = () => {

    const [form, onChange, clearInput] = useForm({
        name: '',
        planet: '',
        date: '',
        description: '',
        durationInDays: ''
    });

    useProtectedPage();


    const createTrip = () => {
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/pablo-silas-epps/trips', body, {
            headers: {
                auth: localStorage.getItem('token')
            }
        })
            .then((res) => {
                console.log(res)
                clearInput();
                alert('Viagem criada com sucesso!')
            })
            .catch((err) => {
                console.log(err)
                alert('Erro ao criar viagem!')
            })
    }

    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Box>
                    <H1>Criar Nova Viagem</H1>
                    <form>
                        <Inputs
                            name='name'
                            placeholder='Nome da Viagem'
                            value={form.name}
                            onChange={onChange}
                            required
                        />
                        <Inputs
                            name='planet'
                            placeholder='Planeta'
                            value={form.planet}
                            onChange={onChange}
                            required
                        />
                        <Inputs
                            name='date'
                            placeholder='Data'
                            type='date'
                            value={form.date}
                            onChange={onChange}
                            required
                        />
                        <Inputs
                            name='description'
                            placeholder='Descrição'
                            value={form.description}
                            onChange={onChange}
                            required
                        />
                        <Inputs
                            name='durationInDays'
                            placeholder='Duração em Dias'
                            type='number'
                            value={form.durationInDays}
                            onChange={onChange}
                            required
                        />
                    </form>
                    <Botao onClick={createTrip}>Criar</Botao>
                </Box>
            </div>
            <Footer/>
        </div>
    )
}

export default CreateTrip;
