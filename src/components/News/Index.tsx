import { useState } from "react"
import NewsList from "./NewsList"

const Index = () => {
  const [loading, setLoading] = useState(false)
  return <NewsList />
}

export default Index