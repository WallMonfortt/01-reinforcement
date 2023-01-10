

interface Person {
    name: string;
    age: number;
    adress: Adress;
}

interface Adress {
    street: string;
    number: number;
    postalCode: string;
}

const LiteralObjects = () => {

    const person:Person = {
        name: 'John',
        age: 35,
        adress: {
            street: 'Main Street',
            number: 123,
            postalCode: '12345-678'
        }
    }
  return (
    <>
      <h3>Literal Objects</h3>
        <code> 
            <pre>
                { JSON.stringify(person, null, 2) }
            </pre>
        </code>
    </>
  )
}

export default LiteralObjects
