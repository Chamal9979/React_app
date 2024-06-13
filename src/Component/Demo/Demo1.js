


export default function Demo1(props) {
    return (
        <div>
            <h1 className="text-6xl">name is {props.person.name}</h1>
            <h1 className="text-6xl">age is {props.person.age}</h1>
            <h1 className="text-6xl">country is {props.person.country}</h1>
        </div>
    )
}