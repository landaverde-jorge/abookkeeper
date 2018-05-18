import React from 'react'

export default ({Items}) => {
  return (
    <div>
      {Items.map(group => {
        return <div>{group.name} {group.price}</div>;
      })}
    </div>
  )
}
