
export const BasicTypes = () => {

    const nombre: string = 'Wal';
    const edad: number = 31;
    const isActive: boolean = true;

    const poderes: string[] = ['Speed', 'Fly', 'Breath under water'];
    
  return (
    <>
      <h3>Basic Types</h3>
        <p> Nombre: {nombre} </p>
        <p> Edad: {edad} </p>
        <p> Activo: {isActive ? 'Si' : 'No'} </p>
        <p> Poderes: {poderes.join(', ')} </p>
    </>
  )
}


