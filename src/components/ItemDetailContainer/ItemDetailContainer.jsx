import { useEffect, useState } from "react";
import { LoadingSpinner } from "../Loading/LoadingSpinner.jsx"
import ItemLDetail from "../ItemDetail/ItemDetail.jsx"
import { useParams } from "react-router-dom";
import { db } from "../../Firebase/dbConnection.js"
import { collection, getDoc, doc } from "firebase/firestore";
import "../ItemDetailContainer/ItemDetailContainer.css"

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState({})
    const [cargando, setCargando] = useState(true)
    const { id } = useParams()

    useEffect(() =>{
        setCargando(true)
        const productsCollection = collection(db, "productos")
        const refDoc = doc(productsCollection, id)

        getDoc(refDoc)
            .then((doc) => {
                setProduct({id: doc.id, ...doc.data()})
                setCargando(false)
            })
            .catch((error) =>{
                setCargando(false)
                console.log("Se genero el error documento: ", error)
            })
    },[id])

    return(
        <>
            <main >
                <div className="container-detail">
                    { cargando ? <LoadingSpinner /> : <ItemLDetail {...product}/> }
                </div>
            </main>
        </>
    )
}

export default ItemDetailContainer;