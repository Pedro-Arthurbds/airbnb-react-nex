import Link from "next/link"

const Rodape = () => {
    return (
        <footer className="container mx-auto py-4 text-center">
            <span className=" text-lg font-semibold pb-2">&copy; Airbnb</span>
            <ul className=" flex flex-row gap-2">
                <li><Link className="hover:text-red-500" href="#">Privacidade</Link></li>
                <li>&middot;</li>
                <li><Link className="hover:text-red-500" href="#">Termos</Link></li>
                <li>&middot;</li>
                <li><Link className="hover:text-red-500" href="#">Mapa do Site</Link></li>
                <li>&middot;</li>
                <li><Link className="hover:text-red-500" href="#">Informações da Empresa</Link></li>
            </ul>
        </footer>
    )
}

export default Rodape