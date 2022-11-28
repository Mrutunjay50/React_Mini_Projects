import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {layout} from '../style';
const PokemonDetail = (props)=>{
    return (<>
    
        <h4 className='text-white font-ubantu font-light'>Current Pokemon Data</h4>
        <h5 className='text-white font-ubantu font-semibold'>{props.name}</h5>
        <div className="bg-black/10">
            <div style={{display:'flex',justifyContent:"space-between"}} className="text-white"><div><b>Attribute</b></div><div><b>Total Moves</b></div></div>
            <div style={{display:'flex',justifyContent:"space-between"}} className="text-white"><div className="Attr">{props.Attr}</div><div>{props.nMov}</div></div>
            <div className="contentPok text-white">
            <p className='text-white'>Height : {((props.height*10)/30.48).toPrecision(3)} f</p>
            <p className='text-white'>Weight : {(props.weight)/10} kg</p>
            <div className="text-white">All the moves <br  /> {props.aMov}</div>
            </div>
        </div>
    </>);
 }

const PokeApi = () =>{
    const[id,setId] = useState(Math.floor(Math.random() * 905));
    const[name,setName] = useState({
        "name" : "",
        "move" : [""]
    });
    const[moves,setMove] = useState({
        "type" : "",
        "NumMov" : "",
        "AllMov" : ""
    });
    const[Dimen, setDimen] = useState({
        "Height" : "",
        "Weight" : ""
    })

    useEffect(() =>{
        async function getVal() {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const PokeMov = response.data.moves;
            const Mov = Math.floor(Math.random() * PokeMov.length);
            const AllMov = PokeMov.map((item) => item.move.name);
            const typeA = response.data.types.map((item) => item.type.name);
            console.log(AllMov);
            setDimen({
                "Height" : response.data.height,
                "Weight" : response.data.weight
            })
            setName({
                "name" : response.data.name.toUpperCase(),
                "move" : PokeMov[Mov].move.name
            });
            setMove({
                "type" : typeA.join(", "),
                "NumMov" : PokeMov.length,
                "AllMov" : AllMov.join("}, {")
            });
        }

        getVal();
    },[id]);

    const changeVal = ()=>{
        setId(Math.floor(Math.random() * 905));
    }

    return (<>
    <div className="Poke feature-card p-4 mx-80 min-h-[85vh] max-h-fit rounded-md">
        <div className={`${layout.sectionImg} flex-col m-3 mb-6`}>
        <div className="ShowPoke flex-col">
            <p className={`${layout.sectionImg} text-white ss:leading-[75px] font-serif leading-[60px] ss:text-[28px] text-[12px]`}>Go <span className='text-gradient ss:leading-[75px] font-serif leading-[60px] ss:text-[32px] text-[20px]'>{name.name}</span>{" "}, I choose you!!</p>
            <p className={`${layout.sectionImg} text-white`}>Attack with {name.move}</p>
        </div>
        <button className={`p-3 bg-blue-gradient mt-3 font-ubuntu font-medium text-[18px] text-primary outline-none rounded-[10px]`} onClick={changeVal}>New Pokemon</button>
        <div className="allCPoke">
        <PokemonDetail name={name.name} height={Dimen.Height} weight={Dimen.Weight} Attr={moves.type} nMov={moves.NumMov} aMov={moves.AllMov}/>
        </div>
        </div>
    </div>
    </>);
}

export default PokeApi;