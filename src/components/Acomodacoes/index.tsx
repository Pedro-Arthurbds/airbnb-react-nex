import { IconHeartFilled } from "@/assets/icones";
import { IconStar, IconStarFilled } from "@tabler/icons-react";


interface AcomodacaoProps {
    children: React.ReactNode;
}

const Acomodacao = ( props: AcomodacaoProps) => {
    return(
        <figure className="relative">

            <div className="absolute w-full flex flex-row justify-between items-center p-3 top-0">
                <span className="bg-white rounded-full px-3 py-1 font-semibold">Preferido dos hóspedes</span>
                <IconHeartFilled className="stroke-white opacity-80" 
                    aria-label="Favorito" 
                    size={30} 
                    />
            </div>

            {props.children}

        <figcaption >
            <div className="flex flex-row justify-between">
                
            <span className="font-semibold">Colonia de Pescadores</span>
                <div className="flex flex-row">
                    <IconStarFilled
            arial-label="Favoritos"
            size={15}
             />
             <div>4.3</div>
                </div>
           
            </div>
            <div>Anfitriçao:</div>
        </figcaption>

        </figure>
    )
}

export default Acomodacao