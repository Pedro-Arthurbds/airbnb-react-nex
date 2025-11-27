import { IconStarFilled } from "@/assets/icones"
import { Testimonial } from "@/types/AirbnbDados"
import Image from "next/image"


interface AcomodacaoDepoimentosProps {
    testimonials: Testimonial[]   
}

const AcomodacaoDepoimentos = (
    props : AcomodacaoDepoimentosProps
) => {

    const depoimentos = props.testimonials

    return (
        <div className="w-full py-5">
            <h2 className="text-xl font-semibold">Depoimentos</h2>
            <div className="flex gap-2 flex-row items-center">
                <IconStarFilled className="size-4" />  
                <span>4.9 (400+ avaliações)</span>
            </div>

            {depoimentos.map((depoimentos, indice) => (
                <div className="flex flex-row gap-2 py-4 items-start" key={indice} >
                    <Image 
                    className=" aspect-square object-cover rounded-full"                  
                        src={depoimentos.image} 
                        alt={depoimentos.name} 
                        width={48} 
                        height={48}
                    />
                    <div>
                        <span className="text-md font-semibold">{depoimentos.name}</span>
                        <p>{depoimentos.comment}</p>
                    </div>
                    
                </div>

            ))}

        </div>
    )
}

export default AcomodacaoDepoimentos   