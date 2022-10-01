import Head from "next/head"
import { useRouter } from "next/router"
import Header from "../components/Header"
import { API_KEY, CONTEXT_KEY } from '../keys'
import Response from "../Response"
import SearchResults from "../components/SearchResults"

const Search = ({ results }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.query.term} - Google Search Results</title>
      </Head>

      <Header />

      <SearchResults results={results}/>
    </>
  )
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData
  ? Response 
  : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)
  .then((response) => response.json())

  return {
    props: {
      results: data,
    }
  }
}