import React,{useState} from 'react';
const Questions = [
    {
        id:1,
        question:"What is React?",
        answer:"React is a front-end and open-source JavaScript library which is useful in developing user interfaces specifically for applications with a single page. It is helpful in building complex and reusable user interface(UI) components of mobile and web applications as it follows the component-based approach."
    },
    {
        id:2,
        question:"What are the advantages of using React?",
        answer:`MVC is generally abbreviated as Model View Controller.
        
        o Use of Virtual DOM to improve efficiency:React uses virtual DOM to render the view. As the suggests, virtual DOM is a virtual representation of the real DOM. Each time the data changes in a react app, a new virtual DOM gets created. Creating a virtual DOM is much faster than rendering the UI inside the browser. Therefore, with the use of virtual DOM, the efficiency of the app improves.
        o Gentle learning curve: React has a gentle learning curve when compared to frameworks like Angular. Anyone with little knowledge of javascript can start building web applications using React.
        
        o SEO friendly: React allows developers to develop engaging user interfaces that can be easily navigated in various search engines. It also allows server-side rendering, which boosts the SEO of an app.
        o Reusable components: React uses component-based architecture for developing applications. Components are independent and reusable bits of code. These components can be shared across various applications having similar functionality. The re-use of components increases the pace of development.
        
        o Huge ecosystem of libraries to choose from: React provides you with the freedom to choose the tools, libraries, and architecture for developing an application based on your requirement.`
    },
    {
        id:3,
        question:"What are the limitations of React?",
        answer:`The few limitations of React are as given below:
        React is not a full-blown framework as it is only a library.
        The components of React are numerous and will take time to fully grasp the benefits of all.
        It might be difficult for beginner programmers to understand React.
        Coding might become complex as it will make use of inline templating and JSX.`
    },
    {
        id:4,
        question:"What is useState() in React?",
        answer:`The useState() is a built-in React Hook that allows you for having state variables in functional components. It should be used when the DOM has something that is dynamically manipulating/controlling.
        In the below-given example code, The useState(0) will return a tuple where the count is the first parameter that represents the counter’s current state and the second parameter setCounter method will allow us to update the state of the counter.
        
        ...
        const [count, setCounter] = useState(0);
        const [otherStuffs, setOtherStuffs] = useState(...);
        ...
        const setCount = () => {
           setCounter(count + 1);
           setOtherStuffs(...);
           ...
        };
        We can make use of setCounter() method for updating the state of count anywhere. In this example, we are using setCounter() inside the setCount function where various other things can also be done. The idea with the usage of hooks is that we will be able to keep our code more functional and avoid class-based components if they are not required.`
    },
    {
        id:5,
        question:"What is JSX?",
        answer:`JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( ).
        As stated in the official docs of React, JSX provides syntactic sugar for React.createElement( ) function.Note- We can create react applications without using JSX as well.
        Let’s understand how JSX works:
        
        Without using JSX, we would have to create an element by the following process:
        
        const text = React.createElement('p', {}, 'This is a text');
        const container = React.createElement('div','{}',text );
        ReactDOM.render(container,rootElement);
        Using JSX, the above code can be simplified:
        
        const container = (
        <div>
          <p>This is a text</p>
        </div>
        );
        ReactDOM.render(container,rootElement);`
    },
    {
        id:6,
        question:"What is React?",
        answer:"React is a front-end and open-source JavaScript library which is useful in developing user interfaces specifically for applications with a single page. It is helpful in building complex and reusable user interface(UI) components of mobile and web applications as it follows the component-based approach."
    },
]




const Sq = ({question,answer}) =>{
    const[show,setShow] = useState(false);
    const showAns = () =>{
        if(show === false){
            setShow(true);
        }else{
            setShow(false);
        }
    }
    return (
        <>
            <div className="infoCont">
                <div className='flex feature-card justify-left items-center py-4 px-1 rounded-md'>
                    <p onClick={showAns} className="font-semibold text-[30px] mr-1">{show ? 'Q' : '+'}</p>
                    <h3 className='text-[30px]'>{question}</h3>
                </div>
                {show && <pre className='ans onject-contain w-[100%] overflow-x-auto p-3'>{answer}</pre>}
            </div>
        </>
    )
}



const Accordion = () =>{
    const[data] = useState(Questions);
    return (
        <>
            <div className="feedback-card min-h-[85vh] max-h-fit mx-80 text-white py-3 px-5 rounded-lg">
                <h1 className='text-gradient ss:leading-[75px] font-serif leading-[60px] ss:text-[62px] text-[42px]'>Questions</h1>
                <hr />
                {data.map((curElem)=>{
                let {id} = curElem;
                return <Sq  key={id} {...curElem} />
                })}
            </div>
        </>
    )
}

export default Accordion;