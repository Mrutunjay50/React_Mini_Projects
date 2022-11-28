// import React,{useState} from 'react';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';


function NoteList(props){
    
    return (
        <>
            <div className="bg-primary p-6 border border-white-50 mx-[0.5%] my-1">
                <p className='text-gradient ss:leading-[75px] font-serif leading-[60px] ss:text-[32px] text-[22px] p-3'>Note{" "}{props.id + 1}</p>
                <h2 className='noteTitle feature-card p-3 text-white rounded-md'>{props.title}</h2>
                <p className='noteDesc px-3 py-6 feature-card text-white rounded-md'>{props.description}</p>
                <Button className='noteListDel' onClick={()=>{props.onSelect(props.id)}} startIcon={<ClearIcon/>}>Delete</Button>
            </div>
        </>
    )
}

export default NoteList;
