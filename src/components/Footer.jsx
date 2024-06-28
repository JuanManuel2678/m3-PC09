import { useFilters } from "../Hook/useFilters"

export const Footer = () => {
  const { filters  } = useFilters()

  return (

    <footer className="fixed bg-[rgba(0,0,0.7)] bottom-4 text-left py-2 px-6 opacity-85 rounded-[32px] text-white backdrop-sepia-0" >

      <h4 className="m-0 flex">Prueba tecnica de React  ☸ - <a href="https://github.com/JuanManuel2678/m3-PC09"><span  className="text-[14px] text-[#7dbce6] opacity-[.8] "> jaredjuan71@gmail.com</span></a></h4>
      
      <h5 className="m-0 flex">Shopping cart con useContext y useReduce</h5>

      {
        JSON.stringify(filters, null, 2)
      }
    </footer>
  )
}

 