'use client'
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import Photo from '@/components/Photo';
import Socials from '@/components/Socials';
import Stats from '@/components/Stats';
import CarouselTech from '@/components/CarouselTech';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto text-center xl:text-left">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-20 xl:pt-8 xl:pb-24">
          <div className="flex-1">
            <span className="block text-justify">Analista de Dados | Desenvolvedor Web Full Stack | Business Intelligence | Desenvolvedor SQL | Analista de Infraestrutura</span>
            <h1 className="text-[48px] xl:text-[80px] leading-[1.1] font-semibold pb-20 pt-12">
              Olá, eu sou <br />
              <span className="text-accent">Hudson Lima</span>
            </h1>
            <p className="text-white/60 pb-20 text-justify">
              Tenho experiência em várias funções, incluindo Analista de Dados, profissional de Business Intelligence, Desenvolvedor SQL, Analista de Infraestrutura e Desenvolvedor Web Full Stack.
              Minha expertise inclui análise de dados para extrair insights, design e implementação de soluções de BI, desenvolvimento de consultas SQL e bancos de dados, gerenciamento de infraestrutura para garantir ambientes robustos de TI e construção de aplicações web full stack do frontend ao backend.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Baixar CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <Socials />
            </div>
          </div>
          <div className="flex-1 mt-12 xl:mt-0 xl:ml-8">
            <Photo />
          </div>
          
        </div>
      </div>
      <Stats />
      <CarouselTech />
    </section>
  );
};

export default Home;
