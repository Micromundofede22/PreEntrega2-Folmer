import "./Select.scss"


const Select= ({set, opcColor}) => {

    const handleSelect= (e) => {
        set(e.target.value)
    }

    return(
            <div className="select-contenedor">
                <p className="texto">Color de bordes:</p>
                <select onChange={handleSelect} className="select">
                {
                    opcColor.map((opc)=>
                    <option 
                    key={opc.value} 
                    value={opc.value} 
                    className="option"> {opc.label} 
                    </option>)
                }
            </select>
            </div>
            
    )
}

export default Select