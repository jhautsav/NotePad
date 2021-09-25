import React from 'react'

function Note({text,addItem,storeItem}) {
    return (
        <div className="add_item text-center">
        
        <input
          type="text"
          placeholder="Add item.... "
          id="input"
          value={text}
          onChange={addItem}
          onKeyPress={storeItem}
        />
      </div>
    )
}

export default Note
