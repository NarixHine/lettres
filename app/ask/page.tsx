'use client'

import Main from '@/components/main'
import Text from '@/components/chakra/text'
import { Balancer } from 'react-wrap-balancer'
import { Box, Button, Input } from '@chakra-ui/react'
import { useState } from 'react'
import useAskXata from '@/lib/ask'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ask AI'
}

export default function AskPage() {
  const [question, setQuestion] = useState('')
  const { answer, isLoading, askQuestion } = useAskXata()

  return (
    <Main>
      <Text fontWeight={'bold'} fontSize={'5xl'} textAlign={'center'}>Ask AI</Text>
      <Text textAlign={'center'}>
        <Balancer>
          Ask a question about Lettres, AI may give an answer based on existing text in the database.
        </Balancer>
      </Text>
      <br></br>
      <Box mx='auto' display={'flex'}>
        <Input variant='flushed' placeholder='Anything in Lettres ...' onChange={(e) => setQuestion(e.target.value)} />
        <Button colorScheme='teal' variant='outline' mx={5} disabled={isLoading} onClick={() => askQuestion(question)}>
          Ask
        </Button>
      </Box>
      <br></br>
      <Text textAlign={'center'}>
        {answer}
      </Text>
    </Main>
  )
}
