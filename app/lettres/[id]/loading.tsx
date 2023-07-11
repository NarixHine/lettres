import Skeleton, { SkeletonText } from '@/components/chakra/skeleton'
import Stack from '@/components/chakra/stack'
import Main from '@/components/main'

export default function LettresLoading() {
    return (<Main>
        <Stack>
            <Skeleton h={'40vh'}></Skeleton>
            <br></br>
            <Skeleton h={20}></Skeleton>
            <br></br>
            <SkeletonText></SkeletonText>
            <br></br>
            <SkeletonText></SkeletonText>
            <br></br>
            <SkeletonText></SkeletonText>
        </Stack>
    </Main>)
}
