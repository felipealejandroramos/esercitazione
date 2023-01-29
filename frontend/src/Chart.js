import { prendilista } from "./getdata";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer } from 'recharts';
let lista = [ ]


export function Chart(){
    creachart()
    console.log( lista)
    return(
      <ResponsiveContainer width="100%" aspect={3}>

        <LineChart width={400} height={400} data={lista}>
          <CartesianGrid  />
            <XAxis  />
            <YAxis  />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="humidithy" stroke="#8884d8"  />
            <Line type="monotone" dataKey="temperature" stroke="#82ca9d" />

        </LineChart>
      </ResponsiveContainer >

    )
    
}


 function creachart(){
    prendilista()
}


export function aggiornaDati(dati){
   
    dati.forEach((element,index) => {
        lista[index]=element
    });
}