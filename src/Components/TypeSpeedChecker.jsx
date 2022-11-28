import React,{useState,useEffect,useRef} from 'react'
import RandWords from 'random-words';

const Total_Words = 200;
const Time_Limit = 60;

// steps taken to craete this app
// -> Setting the countdown
// -> Setting up key listeners
// -> Checking for words matches
// -> Displaying the results
// -> Setting a game loop
// -> Giving visual feedback
// -> Going backwards 

function generateRandomWords(){
    return new Array(Total_Words).fill(null).map(()=>RandWords());
}

const TypeSpeedChecker = () => {

    const[RandomWords,setRandWords] = useState([]);
    const[count, setCount] = useState(Time_Limit);
    const[currInput, setCurrInput] = useState("");
    const[currWordIndex, setCurrWordIndex] = useState(0);
    const[correctWord, setCorrectWord] = useState(0);
    const[inCorrectWord, setInCorrectWord] = useState(0);
    const[typingStatus, setTypeStatus] = useState("hold");
    const [currCharIndex, setCurrCharIndex] = useState(-1)
    const [currChar, setCurrChar] = useState("")
    const refInput = useRef(null);
    

    useEffect(()=>{
        setRandWords(generateRandomWords());
    },[])

    useEffect(()=>{
        if(typingStatus === "started"){
            refInput.current.focus();
        }
    },[typingStatus])
    
    const start = ()=>{

        if(typingStatus === "finished"){
            setRandWords(generateRandomWords());
            setCurrWordIndex(0);
            setCorrectWord(0);
            setInCorrectWord(0);
            setCurrCharIndex(-1)
            setCurrChar("")
        }

        if(typingStatus !== "started"){
            setTypeStatus("started");
            let CountInterval = setInterval(()=>{
                setCount((prevCount) => {
                    if(prevCount === 0){
                        clearInterval(CountInterval);
                        setTypeStatus("finished");
                        setCurrInput("");
                        return Time_Limit;
                    }else{
                      return  prevCount - 1;
                    }
                })
            },1000)
        }
        
    }
    const handleKeyDown = ({keyCode, key})=>{
        if(keyCode===32){
            checkWordMatch();
            setCurrInput("");
            setCurrWordIndex(currWordIndex + 1);
            setCurrCharIndex(-1)
    // backspace
        } else if (keyCode === 8) {
            setCurrCharIndex(currCharIndex - 1)
            setCurrChar("")
        } else {
            setCurrCharIndex(currCharIndex + 1)
            setCurrChar(key)
        }
    }


    const checkWordMatch = ()=>{
        const wordToCompare = RandomWords[currWordIndex];
        console.log(wordToCompare);
        const isItMatching = wordToCompare === currInput.trim();
        console.log({isItMatching});
        if(isItMatching){
            setCorrectWord(correctWord + 1);
        }else{
            setInCorrectWord(inCorrectWord + 1);
        }
    }

    function getCharClass(wordIdx, charIdx, char) {
        if (wordIdx === currWordIndex && charIdx === currCharIndex && currChar && typingStatus !== 'finished') {
          if (char === currChar) {
            return ' bg-green-600'
          } else {
            return 'bg-red-600'
          }
        } else if (wordIdx === currWordIndex && currCharIndex >= RandomWords[currWordIndex].length) {
          return 'bg-red-600'
        } else {
          return ''
        }
      }

  return (
    <div className='min-h-[85vh] max-h-fit p-2'>
        <div className="border border-yellow-100 rounded-md p-4 sm:mx-[10%] mx-[0.2%] sm:w-[80%] w-[100%] flex flex-col justify-center bg-primary">
        <h1 className='text-gradient ss:leading-[75px] font-serif leading-[60px] ss:text-[32px] text-[22px] p-3 text-center'>React Type Speed Checker</h1>
            <div className="text-white">
                <div className="mb-4 ml-2 text-center">Time : <span>{count}</span> Sec</div>
                
                {typingStatus === "finished" && (
                    <div className="mb-4 mx-10 flex justify-between">
                    <div>Speed : <span>{correctWord}</span> wpm</div>
                    <div>Accuracy : <span>{Math.round((correctWord/(correctWord+inCorrectWord)) * 100)}</span> %</div>
                </div>
                )}
            </div>
            {typingStatus === "started" && (
                <div className="p-4 mt-4 border border-yellow-300 rounded-2xl">
                {RandomWords.map((word, i) => (
                  <span key={i} className='text-white font-ubantu font-semibold'>
                    <span>
                      {word.split("").map((char, idx) => (
                        <span className={getCharClass(i, idx, char)} key={idx}>{char}</span>
                      )) }
                      {" "}
                    </span>
                  </span>
                ))}
            </div>
            )}

            
            
            <input type="text" ref={refInput} disabled={typingStatus !== "started"} className=' bg-slate-700 rounded-xl p-4 mt-4 text-white' onKeyDown={handleKeyDown} value={currInput} onChange={(e) => setCurrInput(e.target.value)}/>
            <div className="w-[10%]">
                <button className=' w-[100%] px-3 py-2 mt-4 border border-yellow-300 rounded-md text-white' onClick={start}>Start</button>
            </div>
        </div>
    </div>
  )
}

export default TypeSpeedChecker;