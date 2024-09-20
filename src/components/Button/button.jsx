function button(){

    function handleClick(){
        console.log("Testowy napis")
    }
    return <button onClick={handleClick}>
        wcisnij przycisk
    </button>
}

export default button