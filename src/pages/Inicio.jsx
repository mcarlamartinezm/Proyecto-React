import ItemListContainer from '../components/ItemListContainer';



function Inicio(){
    return(
        <>
        <h1 className="titulo">PokeHome</h1> 
        
        <ItemListContainer limit={9} />
        
        
        </>


                 
    )
}

export default Inicio