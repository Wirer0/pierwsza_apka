import './infoBox.css'

function InfoBox() {
    const name =''
    let data = new Date().toUTCString()
    var ggg =""


    return <div className="infobox">
        <p>{name}</p>
        <p>{data}</p>
        <p>13:22</p>
    </div>
}

export default InfoBox