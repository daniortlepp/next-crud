interface InputProps {
    texto: string
    tipo?: 'text' | 'number'
    valor?: any
    somenteLeitura?: boolean
    className?: string
    onChange?: (valor: any) => void
}

export default function Input(props: InputProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2 ml-4">{props.texto}</label>
            <input 
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => props.onChange?.(e.target.value)}
                className={`
                    border border-gray-500 rounded-lg
                    focus:outline-none bg-gray-50 px-4 py-2
                    ${props.somenteLeitura ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    )
}