interface ChildProps {
    color: string;
    onClick: () => void;
    children: React.ReactNode
}

// Typescript doesn't understand that we are defining a react component.
export const Child = ({ color, onClick }: ChildProps) => {
    return <div>
        Hi from child - {color}
        <button onClick={onClick}>Click me</button>
    </div>;
}


export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return <div>
        Hi from child - {color}
        <button onClick={onClick}>Click me</button>
        {children}
    </div>
}