import React from 'react'
import './button.scss'

export default function Button() {
  return (
    <>
    <button>Default</button>
    <button class='outline'>Outline</button>
    <button class='text'>Text</button>
    <button class='disable-shadow'>No Shadow</button>
    </>
  )
}
