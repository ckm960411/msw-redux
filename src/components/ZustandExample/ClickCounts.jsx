import React, { useEffect, useRef } from 'react'
import create from 'zustand'

const useStore = create((set) => ({
  clickCount: 0,
  addClickCount: () => set(state => ({ clickCount: state.clickCount +1 }))
}))

export default function Scratches() {
  // const clickCount = useStore(state => state.clickCount)
  const clickCountRef = useRef(useStore.getState().clickCount)
  const addClickCount = useStore(state => state.addClickCount)

  useEffect(() => {
    useStore.subscribe(
      clickCount => { 
        clickCountRef.current = clickCount 
        console.log(clickCount)
        console.log(`clickCountRef: ${clickCountRef.current}`)
        if (clickCount > 5) alert('5를 초과했습니다!')
      },
      state => state.clickCount
    )
  }, [])

  return (
    <div>
      {clickCountRef.current}
      <br />
      <button onClick={addClickCount}>Add ClickCount</button>
    </div>
  )
}
