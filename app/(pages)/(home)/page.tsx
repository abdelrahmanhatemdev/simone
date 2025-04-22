import dynamic from "next/dynamic";
const Home = dynamic(() => import("@/components/modules/home"))


function page() {
  return <Home/>
}
export default page