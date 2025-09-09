import React from 'react'
import Wrapper from '@/app/(user)/user-layout'
import { CommandClipboard } from '@/components/command-clipboard'
const page = () => {
  return (
    <>
  <Wrapper commandClipboard={<CommandClipboard/>}> 
    <h1>Windows Service</h1>
  </Wrapper>
    </>
  )
}

export default page
 