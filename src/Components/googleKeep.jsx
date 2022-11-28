import React,{useState} from 'react';
import AddBtn from './Note_App';
import NoteList from './Note_List';


function GoogleKeep() {
    const[list, setList] = useState([]);
    const addNote = (data)=>{
        setList((preVal) =>{
            return [...preVal,data];
        })
    }
    const deleteNote = (id)=>{
        setList((allVal) => {
            return allVal.filter((item,index)=> index!==id);
        })
    }
    return (
        <>
        <div className="min-h-[85vh] max-h-fit text-white">
            <div className=" w-[470px] ml-[35%]">
                <AddBtn peNote={addNote}/>
            </div>
            <div className=" flex flex-wrap justify-center">
                {list.map((item,index) => {
                    return (<NoteList key={index} id={index} {...item} onSelect={deleteNote} />);
                })}
            </div>
        </div>
        </>
    )
}

export default GoogleKeep;