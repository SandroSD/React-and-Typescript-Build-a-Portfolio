import { ChildAsFC } from './Child';

const Parent = () => {
    return <ChildAsFC
        color="green"
        onClick={() => console.log('clicked')}
    >
        random random
    </ChildAsFC>
}

 export default Parent;