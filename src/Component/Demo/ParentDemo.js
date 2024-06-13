import Demo1 from "./Demo1";

export default function ParentDemo() {
    let person = {
        name: "Chamal Achintha",
        age: 24,
        country: "Sri Lanka"
    }

    return (
        <div>
            <Demo1 person={person}/>
        </div>
    )

}
