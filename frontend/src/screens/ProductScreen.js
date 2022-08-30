import { useParams } from "react-router-dom";

let ProductScreen = () => {
    {/*useParams calling product.slug */}
    const params = useParams();
    const { slug } = params;
    return <div>
        <h1>{slug}</h1>
    </div>

}
export default ProductScreen;