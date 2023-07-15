'use client'

import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, FormControl, FormHelperText, Input, Textarea, useToast } from '@chakra-ui/react'

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
                        description: 'Succeeded',
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
                                    <Textarea variant={'filled'} defaultValue={value ?? ''} width={'full'} name={name}></Textarea> :
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
                                                description: 'Succeeded',
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
