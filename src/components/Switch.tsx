import '../style/Switch.css'

type Props = {
    onClick: React.Dispatch<React.SetStateAction<any>>;
};

export function Switch({onClick}: Props) {

    return (<div className='flex justify-center items-center'>
        <p>Recevoir</p>
        <label className='m-2 switch'>

            <input type="checkbox" onClick={(e) => onClick(e.currentTarget.checked)}></input>
            <span className='slider'></span>

        </label>
        <p>Envoyer </p>
    </div>)
}