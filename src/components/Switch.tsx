import '../style/Switch.css'

type Props = {
    onClick: React.Dispatch<React.SetStateAction<any>>;
};

export function Switch({onClick}: Props) {

    return (<div className='flex justify-center items-center'>
        <p></p>Looking for
        <label className='switch'>

            <input type="checkbox" onClick={(e) => onClick(e.currentTarget.checked)}></input>
            <span className='slider'></span>

        </label>
        <p>For trade</p>
    </div>)
}