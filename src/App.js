import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Note from "./Note";
import List from "./List";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
//to get the data from ls
const getLocalItem=()=>{
  let list =localStorage.getItem('list');
  if(list)
  {
    return JSON.parse(localStorage.getItem('list')) ;
  }
  else{
    return [];
  }
}

function App() {
  const [text, setText] = useState("");
  const[list,setList]=useState(getLocalItem());
  const[toggle,setToggle]=useState(true);
  const[editItem,setEditItem]=useState(null);
  //code for get value of input fild
  function addItem(event) {
    setText(event.target.value);
  }
  //for storing data on enter key
  function storeItem(event)
  {
     if(event.key === 'Enter')
     {
       if(!text)
       {
        toast.warn("you cann't add empty list");
       }
       else if(text && !toggle )
       {
         setList(
           list.map((elem)=>{
             if(elem.id===editItem)
             {
               return {...elem,name:text}
             }
             return elem;
           })
         )
         setText('');
         setEditItem(null);
         setToggle(true);
       }
       else
       {
        const allInputData={id:new Date().getTime().toString(), name:text}
        setList([...list,allInputData]);
        setText('');
       }
     
     }
  }
   //for deleting 
  function ondelete(id)
  {
    setList((preValue) => {
      return preValue.filter((item) => {
        return id !== item.id;
      });
    });
  }
  //for editing 
  function onedit(id)
  {
    let newEditItem=list.find((ele)=>{
      return ele.id === id;
    });
    setText(newEditItem.name);
    //console.log(newEditItem);
    setToggle(false);
    setEditItem(id);
  }
  //add data to localstorage
  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list))
  },[list])
   
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Assignment1</h1>
       
      </div>
     
      <div className="container contact_div">
        <div className="row ">
          <div className="col-md-6 col-10 mx-auto">
       
           <Note text={text} addItem={addItem} storeItem={storeItem}/>
            <div className="note">
               <br/>
               <hr/>
              <h3 className="text-center"> ALL LIST</h3>
               
              {list.map((val)=>{
                return (
                 <List val={val}   key={val.id} ondelete={ondelete}
                   onedit={onedit}
                 />
            
                )
              })}
              
              </div>
               
          </div>
        </div>
      </div>
      <ToastContainer position="top-center"/>
    </>
  );
}

export default App;
