import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Feature from "../components/Feature";
export default function Home() {
  return (<>
    <div className=" min-h-screen ">
      <div className="relative h-auto">
      <Hero/>
      <Feature/>
<Pricing/>
</div>

    </div>
  </>
  );
}
