import Table from "./components/Table"
import logo from "./assets/logo.png"
import { useState, useEffect } from "react";
import PolarAreaChart from "./components/PolarAreaChart";

function App() {
  const [parameters, setParameters] = useState({
    Originality: 0,
    IP_Protection: 0,
    Global_Patentability: 0,
    Financial: 0,
    Business: 0,
    Money: 0,
    Concept: 0,
    Development: 0,
    Production_Feasibility: 0,
    Product: 0,
    Market: 0,
    Customer: 0
  });
  const [avg, setAvg] = useState(0);
  useEffect(() => {
    let Avg = 0;
    for (const key in parameters) {
      Avg += parameters[key];
    }
    Avg = Avg / 12;
    setAvg(Avg.toString().substring(0, 4));
  }, [parameters]);

  return (
    <>
      <header className="p-7">
        <nav className="flex flex-row gap-10 items-center">
          <img src={logo} alt="WaysAhead Logo" width={100} height={100} />
          <h1 className="text-3xl font-semibold">Diagnostic Scorecard Metric</h1>
        </nav>
      </header>
      <main>
        <div className="grid grid-cols-2 gap-[15rem] px-3 mb-10">
          <div className="grid gap-10" style={{gridTemplateColumns:"26rem 26rem", gridTemplateRows: "16rem 16rem"}}>
            <Table heading={"Innovation and Intelectual Property"} options={["Originality- How unique is the technology", "IP Protection- Does the technology have strong IP position", "Global Patentability- What's the likelihood of full global patent application"]} color={'bg-yellow-400'} />

            <Table heading={"Design. Development & Technical"} options={["Concept - How well developed is the concept", "Development - How progressed is the R&D phase", "Production Feasibility - Is there a clear understanding of scale up roll out costs"]} color={'bg-green-400'} />

            <Table className="mt-[45px]" heading={"Business, Commercial & Finance"} options={["Financial - How well developed is the financial models", "Business - Is there a clear sustainable business model", "Money - What's the current fiscal health of the venture."]} color={'bg-blue-600'} />

            <Table heading={"Product, Market & Customer"} options={["Product - How well developed is the product Offer", "Market - Is there clearly defined market and market opportunity is well defined", "Customer - Is the target customer defined and needs clearly understood"]} color={'bg-violet-600'} />
          </div>
          <div className='flex flex-col justify-center items-center w-[80%] relative top-[-2rem] left-[5rem]'>
            <div className={` relative left-[-12rem] top-[6rem] -rotate-45 font-semibold text-white p-1 bg-violet-600 border-2 border-black`}>
              <p>Product Market Customer</p>
            </div>
            <div className={` relative left-[12rem] top-[4rem] rotate-45 font-semibold bg-yellow-400 p-1 w-[13rem] text-center border-2 border-black`}>
              <p>Inovation & IP</p>
            </div>
            <div className='w-[30rem] h-[30rem] rounded-full border-[5px] border-blue-600'>
              <PolarAreaChart parameters={parameters} />
            </div>
            <div className={` relative left-[12rem] top-[-4rem] -rotate-45 font-semibold p-1 bg-green-400 border-2 border-black `}>
              <p>Design Development Technical</p>
            </div>
            <div className={` relative left-[-12rem] top-[-6rem] rotate-45 font-semibold text-white p-1 bg-blue-600 border-2 border-black`}>
              <p>Business Commercials Finances</p>
            </div>
            <button className='mt-8 bg-blue-500 py-3 px-5 rounded-md hover:ring-2 hover:ring-blue-400 focus:ring-2 focus:ring-blue-400 outline-none relative top-[2rem] left-[14rem]' onClick={() => {
              setParameters({
                Originality: Number(document.getElementById('Originality').value),
                IP_Protection: Number(document.getElementById('IP_Protection').value),
                Global_Patentability: Number(document.getElementById('Global_Patentability').value),
                Financial: Number(document.getElementById('Financial').value),
                Business: Number(document.getElementById('Business').value),
                Money: Number(document.getElementById('Money').value),
                Concept: Number(document.getElementById('Concept').value),
                Development: Number(document.getElementById('Development').value),
                Production_Feasibility: Number(document.getElementById('Production_Feasibility').value),
                Product: Number(document.getElementById('Product').value),
                Market: Number(document.getElementById('Market').value),
                Customer: Number(document.getElementById('Customer').value)
              })
              if (document.getElementById('pieLabels').classList.contains('hidden')) {
                document.getElementById('pieLabels').classList.remove('hidden');
              }
            }} >Submit</button>
          </div>
        </div>
        <div className={`flex flex-col gap-3 px-5 py-3 font-semibold text-xl mt-[-65px] mb-10`}>
          <p>Over All Score: {avg} / 10 </p>
          <p className='text-base'>Insight Current position is satisfactory with basic work underway, needs deeper & refined focus to become commercially viable & investable</p>
          <p className='-mb-4'>Scale Scoring: </p>
          <div className='flex flex-row justify-between text-base font-normal w-[20rem]'>
            <p>1 - 3 Low</p>
            <p>4 - 7 Average</p>
            <p>8 - 10 High</p>
          </div>
        </div>
      </main>

      <footer className="p-10 bg-sky-300">
        <p className="text-3xl font-bold">
          &#169; WaysAhead Global 2023
        </p>
      </footer>
    </>
  )
}

export default App
