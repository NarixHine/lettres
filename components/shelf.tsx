import { LettresRecord } from '@/lib/xata'
import { RecordArray, SelectedPick } from '@xata.io/client'
import SimpleGrid from './chakra/grid'
import Lettres from './lettres'

export default function Shelf({ lettres }: {
    lettres: SelectedPick<LettresRecord, ("title" | "desc" | "id" | "xata.createdAt" | "cover" | "tags")[]>[] | RecordArray<SelectedPick<LettresRecord, ('title' | 'desc' | 'cover' | 'tags' | 'id' | 'xata.createdAt')[]>>
}) {
    return (
        <SimpleGrid columns={[1, null, 2]} spacing={10} w={'full'}>
            {lettres.map(({ id, title, desc, cover, tags, xata }) => (
                <Lettres width={'full'} key={id} id={id} title={title} cover={cover} tags={tags} desc={desc} date={xata.createdAt}></Lettres>
            ))}
        </SimpleGrid>
    )
}
