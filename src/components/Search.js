export default function Search({setInput,setIssearching,placeholder}) {


    function HandleChange(e) {
        if(e.target.value!=="") {
            setInput(e.target.value)
            setIssearching(true)
        }else(setIssearching(false))
    }
    
    return (
        <div className="search-container">
            <input onChange={HandleChange} placeholder={placeholder} /> <button style={{pointerEvents:"none"}}>Search</button>
        </div>

    )
}