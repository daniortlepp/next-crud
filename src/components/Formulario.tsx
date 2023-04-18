import { useState } from "react"
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Input from "./Input";

interface FormularioProps {
    cliente: Cliente
    clienteChange?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id // recebe valor se o id do cliente existir, senão retorna nulo
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return (
        <div>
            {id ? (
                <Input texto="Código" valor={id} somenteLeitura className="mb-4" />
            ) : false}
            <Input texto="Nome" valor={nome} onChange={setNome} className="mb-4" />
            <Input texto="Idade" tipo="number" valor={idade} onChange={setIdade} />

            <div className="mt-3 flex justify-end">
                <Botao cor="blue" className="mr-2"
                    onClick={() => props.clienteChange?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}