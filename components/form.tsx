'use client'

import Box from './chakra/box'
import Button from './chakra/button'
import FormControl, { FormHelperText } from './chakra/form'
import Textarea from './chakra/textarea'
import Input from './chakra/input'
import Accordion, { AccordionButton, AccordionItem, AccordionPanel, AccordionIcon } from './chakra/accordian'
import { useToast } from '@chakra-ui/react'

export default function Form({ items, action, deleteAction, view }: {
    items: {
        text: string,
        name: string,
        value?: string | null,
        multiline?: boolean,
    }[],
    action: ((formData: FormData) => Promise<void>),
    deleteAction?: () => Promise<void>,
    view?: string
}) {
    const toast = useToast()
    return (
        <form action={(formData) => {
            action(formData)
                .then(() => {
                    toast({
                        description: 'Updated',
                        status: 'success',
                    })
                })
                .catch(() => {
                    toast({
                        description: 'Failed',
                        status: 'error',
                    })
                })
        }}>
            <FormControl>
                {
                    items.map(({ text, name, value, multiline }) => (
                        <Box key={name} mb={5}>
                            {
                                multiline ?
                                    <Textarea variant={'filled'} minHeight={200} defaultValue={value ?? ''} width={'full'} name={name}></Textarea> :
                                    <Input variant={'flushed'} defaultValue={value ?? ''} width={'full'} name={name}></Input>
                            }
                            <FormHelperText>{text}</FormHelperText>
                        </Box>
                    ))
                }
                <Button type='submit' colorScheme='twitter' variant={'outline'} w={'full'}>Submit</Button>
                {
                    view ? <Button mt={5} as={'a'} target='_blank' href={view} colorScheme='teal' variant={'outline'} w={'full'}>View</Button> : <></>
                }
                {
                    deleteAction ? <Accordion mt={10} allowToggle>
                        <AccordionItem>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                    Dangerous Zone
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>
                                <Button onClick={() => {
                                    deleteAction()
                                        .then(() => {
                                            toast({
                                                description: 'Deleted',
                                                status: 'success',
                                            })
                                        })
                                        .catch(() => {
                                            toast({
                                                description: 'Failed',
                                                status: 'error',
                                            })
                                        })
                                }} colorScheme='red' variant={'outline'} w={'full'}>DELETE</Button>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion> : <></>
                }
            </FormControl>
        </form>)
}
