import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';

function Description(props) {
    return (
        <>
            <label htmlFor="Description"><TextField
            className='text-white'
            onChange={props.inputValue}
                        id="standard-multiline-flexible"
                        label="Description"
                        value={props.val}
                        name='description'
                        multiline
                        sx={{ width: { sm: 200, md: 430 }, "& .MuiInputBase-root": { height: 60 }}}
                        maxRows={4}
                        variant="standard"
                        /></label>
        </>
    )
}

function NoteAdder(props){
    const[data,setData] = useState({
        title:"",
        description:""
    })
    const inputVal = (event)=>{
        let {name,value} = event.target;
        setData((prevVal) => {
        return {
            ...prevVal,
            [name] : value
        }
        })
    }
    const[Desc,setDesc] = useState(false);
    const showDesc = ()=>{
        if(Desc === false){
            setDesc(true);
        }
    }
    const addEvent = ()=>{
        props.passNote(data);
        setData({
            title:"",
            description:""
        })
    }
    return (
        <>
            <div className="feature-card p-5 w-[100%] rounded-sm" id="note">
                  <div className="headingNote flex flex-row-reverse justify-end">
                   <h2>Add Note</h2><ClearIcon onClick={props.Close}/>
                  </div>
                  <br />
                  <div className='text-white'>
                    <div className='text-white'>
                      <label  htmlFor="Title"><TextField className='text-white' onClick={showDesc}
                      onChange={inputVal}
                      sx={{width: { sm: 200, md: 430 },"& .MuiInputBase-root": { height: 60}}}
                        id="outlined-multiline-flexible"
                        name="title"
                        value={data.title}
                        label="Title"
                        multiline
                        maxRows={4}
                        size="large"
                        /></label><br />
                        {Desc && <Description inputValue={inputVal} val={data.description}/>}
                    </div>
                    <div className="mainSave">
                      <Button id="save" className='text-white' onClick={addEvent}>Save</Button>
                    </div>
                  </div>
            </div>
        </>
    )
}

function AddBtn(props){
    const [showAddCatalogue,setShowApp] = useState(false);
    const [showBtn, setBtn] = useState(true);
    const ShowNoteCata = ()=>{
        if(showAddCatalogue === false && showBtn === true){
            setShowApp(true);
            setBtn(false);
        }
    }
    const CloseCata = ()=>{
        setShowApp(false);
        setBtn(true);
    }
    return (
        <>
            <div id="addNote">
                      {showBtn && <Button variant="outlined" onClick={ShowNoteCata} startIcon={<AddIcon />} className='AddBtn'>AddNote</Button>}
            </div>
            {showAddCatalogue && <NoteAdder Close={CloseCata} passNote={props.peNote}/> }
        </>
    )
}

export default AddBtn;
export {NoteAdder,Description}