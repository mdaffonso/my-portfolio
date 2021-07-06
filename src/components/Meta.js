import { useContext } from "react"
import { GlobalContext } from "../contexts/contexts"
import { Helmet } from "react-helmet-async"

const Meta = () => {
  const { globals } = useContext(GlobalContext)
  return (
    <Helmet htmlAttributes={{lang: globals.language.htmlLang}} />
  )
}

export default Meta