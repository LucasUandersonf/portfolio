import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";

const About = () => {
    const grid2Container = useRef();
    return <section className="c-space section-spacing">
        <h2 className="text-heading">Sobre Mim</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
            {/* Grid 1 */}
            <div className="flex items-end grid-red-color  grid-1">
                <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10 mt-[-0.5rem]">
            <p className="headtext">Olá, sou Lucas Uanderson</p>
            <p className="subtext ">
              Nos últimos 4 anos, desenvolvi habilidades em backend e frontend para criar aplicações dinâmicas de software e web. 
              Sou formado em Engenharia de Software e curso Automação com Python para TI.
            </p>
            <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
          </div>
            </div>
            {/* Grid 2 */}
        <div className="grid-white-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container}
              colorClass="bg-custom-oxo"
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container} 
              colorClass="bg-custom-red1"
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
              colorClass="bg-custom-oange"
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
              colorClass="bg-custom-bluee"
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
              colorClass="bg-custom-green1 "
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/blazor-pink.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
            {/* Grid 3 */}
            <div className="grid-black-color1 grid-3">
              <div className="z-10 w-[50%]">
                <p className="headtext">Fuso Horário</p>
            <p className="subtext">
              Localizado no Brasil, disponível para trabalho remoto em qualquer lugar do mundo.
            </p>
            <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
              </div>
            </div>
            {/* Grid 4 */}
            <div className="grid-special-color grid-4"></div>
            {/* Grid 5 */}
            <div className="grid-green-color grid-5"></div>
        </div>
    </section>
};

export default About;

