import React from 'react'
const logoStyle={
    fontSize:"22px",
    color:"black"
  }
 
function List({val,ondelete,onedit}) {
    return (
       <>
        <div className="mt-4 text-center flex-column color "  >
                  <h3 className="hed">{val.name}</h3>
                <div className="logo">
                  <i className="fa fa-edit i-m" title="edit item i-m" style={logoStyle}  onClick={()=>{
                        return onedit(val.id)
                    }}></i>
                  <i
                    className="fa fa-trash i-m"
                    aria-hidden="true"
                    title="Delete item" style={logoStyle} onClick={()=>{
                        return ondelete(val.id)
                    }}
                  ></i>
                </div>
              </div>
       </>
    )
}

export default List
