import react from "react"
function Heroname({Heroname}){
    if(Heroname==='jay'){
        throw new Error('Not an Hero!')
    }
    return<h1>{Heroname}</h1>
}
export default Heroname;