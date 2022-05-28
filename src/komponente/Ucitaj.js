import axios from "axios";
import {useState, useEffect} from 'react';
import {Link, Outlet} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const readUrl = "http://localhost/react-lv7-php/read.php";

function Ucitaj()
{
    const[artikli, setArtikli] = useState([]);
    useEffect(() => {
        getArtikli()
    }, []);

    const obrisiArtikl = (Id) => {
        if(window.confirm("Zelite li obirsati artikl s idjem:" + Id));
        deleteConfirm(Id);
    }
   

    async function getArtikli(){
        try{
            const response = await axios.get(readUrl);
            setArtikli(response.data);
        }catch(error){
            console.error(error);
        }
    }

    async function deleteConfirm(Id)
    {
        const deleteUrl ="http://localhost/react-lv7-php/delete.php";
        var params = new URLSearchParams();
        params.append('Id', Id);
        axios.post(deleteUrl, params).then(() => {getArtikli()});
    }

    return(
        <>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Naziv</th>
                        <th scope="col">Proizvodac</th>
                        <th scope="col">Model</th>
                        <th scope="col">Cijena</th>
                        <th scope="col">Kolicina</th>
                    </tr>
                </thead>
                <tbody>
                    {artikli.map((artikl)=>{
                        return(<tr key = {artikl.Id}>
                            <td>{artikl.Id}</td>
                            <td>{artikl.Naziv}</td>
                            <td>{artikl.Proizvodac}</td>
                            <td>{artikl.Model}</td>
                            <td>{artikl.Cijena}</td>
                            <td>{artikl.Kolicina}</td>
                            <td><button className="btn btn-outline-danger" onClick={()=>obrisiArtikl(artikl.Id)}>Delete</button></td>
                            <td><Link to={`Edit/${artikl.Id}`} className="btn btn-outline-secondary">Edit</Link></td>
                            </tr>
                            )
                    })}
                </tbody>
            </table>

        </>
    )
}
export function Pretrazivanje()
{
    const[query,setQuery] = useState("");
    const keys = ["first_name","last_name","email"];
    const search = (data) => {
        return data.filter((item) => 
        keys.some((key) => item[key].toLowerCase().includes(query))
        );
    };
}

export default Ucitaj;