import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import React, {useState, useEffect} from "react";


function Edit()
{
    const navigate = useNavigate();
    let params = useParams();
    let artiklId = params.EditID;

    const [naziv, setNaziv] = useState([]);
    const [id, setId] = useState([]);
    const [proizvodac, setProizvodac] = useState([]);
    const [model, setModel] = useState([]);
    const [cijena, setCijena] = useState([]);
    const [kolicina, setKolicina] = useState([]);

    console.log(artiklId);



    useEffect(()=>{
        getArtikl(artiklId);
    },[]);
    async function getArtikl(id)
    {
        try{
            const response = await axios.get(`http://localhost/react-lv7-php/readONE?Id=${id}`)
            setNaziv(response.data[0].Naziv);
            setId(response.data[0].Id);
            setProizvodac(response.data[0].Proizvodac);
            setModel(response.data[0].Model);
            setCijena(response.data[0].Cijena);
            setKolicina(response.data[0].Kolicina);
        }
        catch(error)
        {
            console.log(error);
        }
    }
    const [] = useState({})
    const editArtikla = (i,n,p,m,c,k) => {
        var params = new URLSearchParams();
        params.append('Id', i);
        params.append('Naziv', n);
        params.append('Proizvodac', p);
        params.append('Model', m);
        params.append('Cijena', c);
        params.append('Kolicina', k);
        axios.post(`http://localhost/react-lv7-php/edit.php`,params)
    }
    const[inputs,setInputs] = useState({});
    const handleSubmit = (event) => {
        event.preventDefault();
        editArtikla(id,naziv,proizvodac,model,cijena,kolicina);
        alert(`${id} radi`);

    };
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
        <label>Unesite Id:
                <input
                type="number"
                name="Id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                />
            </label>
            <br />
            <label>Unesite Naziv:
                <input
                type="text"
                name="Naziv"
                value={naziv}
                onChange={(e) => setNaziv(e.target.value)}
                />
            </label>
            <br />
            <label>Unesite Proizvodaca:
                <input
                type="text"
                name="Proizvodac"
                value={proizvodac}
                onChange={(e) => setProizvodac(e.target.value)}
                />
            </label>
            <br/>
            <label>Unesite Model:
                <input
                type="text"
                name="Model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                />
            </label>
            <br/>
            <label>Unesite cijenu:
                <input
                type="text"
                name="Cijena"
                value={cijena}
                onChange={(e) => setCijena(e.target.value)}
                />
            </label>
            <br/>
            <label>Unesite kolicinu:
                <input
                type="text"
                name="Kolicina"
                value={kolicina}
                onChange={(e) => setKolicina(e.target.value)}
                />
            </label>
            <br/>
            <button type="submit" name="update" className="btn btn-success" >Dodaj</button>
        </form>
        </>
    );
    
}
export default Edit;