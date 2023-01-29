import { aggiornaDati } from "./Chart"
const url ="http://localhost:9000/data"
export function prendilista(){
fetch(url,{
    method: 'Get',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}).then(res=>{ res.json().then(data=>{ aggiornaDati(data)}) })

}