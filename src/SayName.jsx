import { useState } from "react";

function SayName(props){
    const [nome, setNome] = useState ("");

    function alteraNome(event){
        setNome(event.target.value);
    }

    return (
        <div>
        </div>

    );

};
export default SayName;