import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

type conta = {
    nome: string;
    cpf: number;
    nasc: string;
    saldo: number;
    transacoes: transacoes[];
}

type transacoes = {
    valor: number;
    data: string;
    descricao: string;
}

const clientes: conta[] = [
    {
        nome: "Pablo Silas",
        cpf: 12345678912,
        nasc: "11/09/1999",
        saldo: 10,
        transacoes: [],
        
    },
    {
        nome: "Jessica Gomes",
        cpf: 11122233344,
        nasc: "15/10/1998",
        saldo: 200,
        transacoes: [],
        
    },
    {
        nome: "Paulo Santos",
        cpf: 12123234354,
        nasc: "01/12/1965",
        saldo: 1000,
        transacoes: [],
        
    },
]


app.get('/clientes', (req: Request, res: Response) => {
    res.status(200).send(clientes)
});

app.post('/nova-conta', (req: Request, res: Response) => {
    
    let errorCode: number = 400;

    try {
        const reqBody: conta = {
            nome: req.body.nome,
            cpf: req.body.cpf,
            nasc: req.body.nasc,
            saldo: req.body.saldo,
            transacoes: req.body.transacoes
        };

        if(!reqBody.nome ||
            !reqBody.cpf ||
            !reqBody.nasc ||
            isNaN(reqBody.saldo) ||
            !reqBody.transacoes){
                errorCode = 422;
                throw new Error("Erro na Requisição")
        }

        clientes.push(reqBody);
        res.status(201).send({message: "Conta criada com sucesso"})

    } 
    
    catch (error) {
        res.status(errorCode).send({message: error.message})
    }
})

// app.get('/saldo', (req: Request, res: Response) => {
    
//     let errorCode: number = 400;

//     try {
//         const reqBody: string | number = {
//             nome: req.body.nome,
//             cpf: req.body.cpf
//         }
//         const saldo = clientes.map((s) => {
//             return { saldo: s.saldo}
//         });

//         res.status(200).send(saldo);
//     }
//     catch (error) {
//         res.status(errorCode).send({message: error.message})
//     }

// })

app.listen(3003, ()=> {
    console.log("Servidor rodando em http://localhost:3003")
})