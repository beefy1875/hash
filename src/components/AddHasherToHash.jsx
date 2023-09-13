import { useState } from "react"

const AddHasherToHash = () => {
    const [hashers, setHashers] = useState(["Don Salami", "Cumpass"])

    const addHasher = (event) => {
        event.preventDefault()
        const added = event.target.hasher.value
        setHashers(hashers.concat(added))
        event.target.hasher.value = ""
        console.log(added)
    }

    return (
        <div>
            <h3>Add Hashers</h3>
        <form onSubmit={addHasher}>
            <input
                type="text"
                name="hasher" />
            <input type="submit" />
        </form>
        {hashers.map((hasher, index) => <li key={index}>{hasher}</li>)}
        </div>
    )
}

export default AddHasherToHash