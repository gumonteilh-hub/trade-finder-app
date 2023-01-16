import '../style/Switch.css'

export function Switch() {

    return (<div className='flex justify-center items-center'>
        <p></p>Looking for
        <label className='switch'>

            <input type="checkbox"></input>
            <span className='slider'></span>

        </label>
        <p>For trade</p>
    </div>)
}