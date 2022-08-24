import React from 'react'
import {
  Container,
  Headerzinho,
  H6header,
  Header,
  P1,
  P,
  BiiUser,
  FiiHeart,
  Bag,
  Section,
  Section2,
  Tendences,
  ContainerBeach,
  DivVD,
  TextDiv,
  FiiTruck,
  Hoz,
  Morty,
  Messin,
  Celu,
  DivCelu,
  DivMessi,
  DivMorty,
  DivOz,
  Colabs,
  Shoes,
  DivShoes,
  TextShoe,
  DivConfor,
  Confor,
  DivAmor,
  Amor,
  DivLeve,
  Leve,
  DivSup,
  Sup,
  SectionLuva,
  ContainerPopular,
  Button,
  TextCategory,
  SectionCategory,
  H3shoe,
  H3corta,
  H3fla,
  H3poche,
  ShoeWhite,
  Manchester,
  ImageManchester,
  LogoManche,
  ContainerPharrel,
  BGPharrel,
  IMGPharrel,
  TendencesFinish,
  DivFinish,
  TextFinish,
  DivNinja,
  Ninja,
  DivStar,
  Star,
  DivDisneyimg,
  DI,
  DivDisney,
  Disney,
  Descubra,
  DivFooter,
  Footerzinho,
  Footer,
  ContainerFooter,
  ContainerFooter1,
  ContainerFooter2,
  ContainerFooter3,
  ContainerFooter4,
  Finish,
  FinishFooter,
  HeaderDiv
} from './styles'
import Logo from '../assets/logo.png'
import Loguinho from '../assets/logo-branco.png'
import Desert from '../assets/desert.webp'
import Daniel from '../assets/daniel.jpg'
import Phone from '../assets/cellphone.mp4'
import Messi from '../assets//messi.mp4'
import Rick from '../assets/rick.mp4'
import Ozworld from '../assets/ozworld.mp4'
import Beach from '../assets/beach.webp'
import Colored from '../assets/colored.webp'
import Shoe1 from '../assets/shoeone.webp'
import Shoe2 from '../assets/shoetwo.jpg'
import Shoe3 from '../assets/shoetree.webp'
import Shoe4 from '../assets/shoefour.jpg'
import Luva from '../assets/luva.webp'
import Black from '../assets/black.webp'
import Corta from '../assets/corta.webp'
import Fla from '../assets/fla.webp'
import Poche from '../assets/poche.webp'
import White from '../assets/shoewhite.webp'
import Manche from '../assets/bgmanche.webp'
import AdiMan from '../assets/logomanche.webp'
import Pharrel from '../assets/bgpharrel.webp'
import LogoPharrel from '../assets/pharrel.webp'
import Kawa from '../assets/ninja.mp4'
import Wars from '../assets/star.mp4'
import DisneyI from '../assets/disneyimg.webp'
import DisneyV from '../assets/disney.mp4'
import Face from '../assets/face.webp'
import Insta from '../assets/insta.webp'
import TW from '../assets/tw.webp'
import Pinte from '../assets/pinte.webp'
import Tik from '../assets/tik.webp'
import You from '../assets/you.webp'






function App() {
  return (
    <Container>
      <Headerzinho>
        <img src={Loguinho} className='Loguinho' alt='loguinhoo' />
        <H6header>AS COLLABS DA ADIDAS SÃO UMA EXPRESSÃO DE CRIATIVIDADE E ATITUDE. SAIBA MAIS AQUI</H6header>
        <FiiTruck />
        <h6>RECEBA NO MESMO DIA</h6>
        <img src={Loguinho} className='Loguinho' alt='loguinhoo' />
        <h6>AS MELHORES OFERTAS</h6>
      </Headerzinho>

      <Header>
        <img src={Logo} alt='logo' />
        <HeaderDiv>
        <P1 style={{ marginLeft: 250 }}>MULHER</P1>
        <P1>HOMEM</P1>
        <P1>INFANTIL</P1>
        <P>ESPORTES</P>
        <P>MARCAS</P>
        <P>COLEÇÕES</P>
        </HeaderDiv>

        <input placeholder='Procurar' />
        <div>
          <BiiUser />
          <FiiHeart />
          <Bag />
        </div>
      </Header>

      <Section>
        <img src={Desert} alt='foto-voltan' />
        <h1>BAD NUNNY`S FORUM<br/>BLUE</h1>
        <p>A ilha está chamando. Cadastre-se agora no<br/> CONFIRMED. Sorteio em 27 de agosto.</p>
        <button>EXPLORAR MAIS</button>
      </Section>

      <Section2>
        <img src={Daniel} alt='foto-daniel' />
        <h1>ALÉM DA VELOCIDADE</h1>
        <p> O QUE VOCÊ PRECISA PARA QUEBRAR NOVOS<br /> RECORDES?</p>
        <button>COMPRAR AGORA</button>
      </Section2>


      <Tendences>
        <h1>TENDÊNCIAS</h1>
        <DivVD>
          <video src={Phone} loop autoPlay muted />
          <video src={Messi} loop autoPlay muted />
          <video src={Rick} loop autoPlay muted />
          <video src={Ozworld} loop autoPlay muted />
        </DivVD>
        <TextDiv>
          <DivCelu>
            <Celu>EM BREVE NO BRASIL</Celu>
            <p>O app CONFIRMED da adidas oferece<br /> collabs exclusivas e histórias inéditas,<br /> tudo na ponta do seus dedos.</p>
            <a href='#'>CADASTRE-SE AGORA</a>
          </DivCelu>

          <DivMessi>
            <Messin>VIAJE PARA COPA DO MUNDO</Messin>
            <p>Entre para o adiClub e participe para<br /> viajar para a Grande Final da Copa do<br /> Mundo no Catar!</p>
            <a href='#'>SAIBA MAIS</a>
          </DivMessi>

          <DivMorty>
            <Morty>VELOCIDADE EM TODAS AS DIMENSÕES</Morty>
            <p>Explore a velocidade multidimensional<br /> com a nova X Speedportal. A X Speedportal<br /> chega ao Brasil a partir de hoje na cor Fluid Green</p>
            <a href='#'>COMPRAR AGORA</a>
          </DivMorty>

          <DivOz>
            <Hoz>ENTRE NO OZWORLD. SEJA QUEM VOCÊ É <br /> DE VERDADE.</Hoz>
            <p>Expresse sua personalidade com a coleção adidas Ozworld</p>
            <a href='#'>COMPRAR AGORA</a>
          </DivOz>
        </TextDiv>
      </Tendences>

      <SectionLuva>
        <img src={Luva} alt='foto-luva' />
        <h1>RECEEEEEEEBA<br /> VELOCIDADE</h1>
        <p>Explore a velocidade multidimensional com a nova X<br /> Speedportal.</p>
        <button>COMPRAR AGORA</button>
      </SectionLuva>

      <Shoes>
        <h1>ENCONTRE SEU TÊNIS DE CORRIDA</h1>
        <DivShoes>
          <img src={Shoe1} alt='shoe1' />
          <img src={Shoe2} alt='shoe2' />
          <img src={Shoe3} alt='shoe3' />
          <img src={Shoe4} alt='shoe4' />
        </DivShoes>


        <TextShoe>
          <DivConfor>
            <Confor>CONFORTÁVEL</Confor>
            <p>Tênis de corrida para iniciantes</p>
            <a href='#'>COMPRAR AGORA</a>
          </DivConfor>

          <DivAmor>
            <Amor>AMORTECIDO</Amor>
            <p>Tênis de corrida para o dia a dia</p>
            <a href='#'>COMPRAR AGORA</a>
          </DivAmor>

          <DivLeve>
            <Leve>LEVEZA</Leve>
            <p>Tênis para treino e competiçôes</p>
            <a href='#'>COMPRAR AGORA</a>
          </DivLeve>

          <DivSup>
            <Sup>SUPORTE</Sup>
            <p>Tênis para corridas de loga distância</p>
            <a href='#'>COMPRAR AGORA</a>
          </DivSup>
        </TextShoe>
      </Shoes>

      <ContainerBeach>
        <img src={Beach} alt='beach' />
        <h1>PROTEGER OS OCEANOS É A NOSSA<br /> PRIORIDADE. ISTO É MAIOR DO QUE O ESPORTE.<br /> ISTO É PARA O NOSSO FUTURO.</h1>
        <button>SAIBA MAIS</button>
        <img src={Colored} alt='color' className='ImageBeach' />
      </ContainerBeach>

      <ContainerPopular>
        <h1><i>POPULAR AGORA</i></h1>
        <Button>MATERIAIS RECICLÁVEIS</Button>
        <Button>SANDÁLIAS</Button>
        <Button>CHUTEIRAS</Button>
        <Button>ULTRABOOST</Button>
        <Button>PREÇOS INCRIVEIS</Button>
      </ContainerPopular>

      <SectionCategory>
        <img src={Black} alt='ShoeBlack' />
        <img src={Corta} alt='CortaVento' />
        <img src={Fla} alt='Flamengo' />
        <img src={Poche} alt='Pochete' />
      </SectionCategory>

      <TextCategory>
        <H3shoe>CALÇADOS</H3shoe>
        <H3corta>ROUPAS</H3corta>
        <H3fla>OUTLET</H3fla>
        <H3poche>ACESSÓRIOS</H3poche>
      </TextCategory>

      <ShoeWhite>
        <img src={White} alt='foto-white' />
        <h1>SUPERSTAR, FEITO<br /> PARA O AMANHÃ.</h1>
        <p>Conheça nossa mais recente coleção de ícones,<br /> agora feita parcialmente de Parley Ocean Plastic</p>
        <a href='#'>COMPRAR AGORA</a>
      </ShoeWhite>

      <Manchester>
        <ImageManchester src={Manche} alt='foto-manchester' />
        <LogoManche src={AdiMan} alt='logo-manchester' />
        <h1>PARA OS RED DEVILS<br /> EM VOCÊ</h1>
        <p>Manchester United e adidas Originals se uniram<br />para trazer de volta a vibe dos anos 90.</p>
        <button>COMPRAR AGORA</button>
      </Manchester>

      <ContainerPharrel>
        <BGPharrel src={Pharrel} alt='bg' />
        <IMGPharrel src={LogoPharrel} alt='logo' />
        <h1>HU NMD ANIMAL <br />PRINT ORANGE</h1>
        <p>Pharrel e adidas apresentam uma estampa grande<br />inpirada nos felinos e exibida em um tom de<br /> laranja vibrante e destemido.</p>
        <button>COMPRAR AGORA</button>
      </ContainerPharrel>

      <Colabs>
        <h3>AS COLLABS DA ADIDAS SÃO UMA EXPRESSÃO DE CRIATIVIDADE, DINAMISMO E AMOR PELOS<br />DESIGNS CRIADOS EM COLABORAÇÃO COM AMIGOS PRÓXIMOS QUE FAZEM PARTE DA NOSSA<br /> FAMÍLIA E CULTURA. ATRAVÉS DESSES PRODUTOS E EXPERIÊNCIAS, EXPLORAMOS O ESTILO<br /> ORIGINAL DE MÚSICOS, ARTISTAS, DESIGNERS E ÍCONES CULTURAIS , TRABALHANDO JUNTOS<br /> PARA LEVAR A VISÃO DOS CRIADORES PARA TODO MUNDO.</h3>
      </Colabs>

      <TendencesFinish>
        <DivFinish>
          <video src={Kawa} loop autoPlay muted />
          <video src={Wars} loop autoPlay muted />
          <video src={DisneyV} loop autoPlay muted />
          <img src={DisneyI} alt='disney-image' />
        </DivFinish>

        <TextFinish>
          <DivNinja>
            <Ninja>KAWASAKI ZX</Ninja>
            <p>A inovação inspira. Celebre as origens do ZX</p>
            <a href='#'>COMPRAR AGORA</a>
          </DivNinja>

          <DivStar>
            <Star>VAI DEIXAR PASSAR?</Star>
            <p>Não perca de vista os designs mais<br />ousados da coleção Legacy of Boba Fett.</p>
            <a href='#'>COMPRAR AGORA</a>
          </DivStar>

          <DivDisney>
            <Disney>LIDERE O BANDO</Disney>
            <p>Coleção Rei Leão da Disney</p>
            <a href='#'>COMPRAR AGORA</a>
          </DivDisney>

          <DivDisneyimg>
            <DI>REALIZANDO SONHOS</DI>
            <p>Imagine que seus sonhos estão<br />destinados a ser realizados, é só correr<br />atrás deles com a coleção Bambi.</p>
            <a href='#'>COMPRAR AGORA</a>
          </DivDisneyimg>
        </TextFinish>
      </TendencesFinish>

      <Descubra>
        <h1>DESCUBRA AS NOVIDADES E LANÇAMENTOS<br />ESPECIAIS</h1>
        <p>Saiba sobre  as novas collabs e produtos inovadores nos materiais, desenhos, estilo e atitude.</p>
        <a href='#'>SAIBA MAIS</a>
      </Descubra>

      <DivFooter>
        <p><b>adidas collabs: Jade Picon, Ivy Park, Lego e mais… nos juntamos com seus artistas favoritos<br/> para criar peças icônicas.</b><br/>
        Desde os tênis Yeezy até as roupas de Ivy park, você vai encontrar os produtos criados com seus <br/>artistas, personagens ou designers favoritos, as collabs da adidas são um conjunto de peças<br/> icônicas que nascem da união de nossa marca com ícones que representam nossa cultura das<br/> três listras.<br/>
        <b>Colaborações de roupas Pharrell, tênis Star Wars, acessorios Disney e muito mais</b><br/>
        Que tal um tênis com a magia de Disney? Monte seu look peça a peça como um Lego, uma<br/> colaboração tão criativa e cheia de cor para você brincar e construir a combinação perfeita.<br/> Encontre os tênis Yeezy que precisa para dar um toque único no look ou as roupas de Ivy Park que<br/> são tão inovadoras que você vai achar o look perfeito e também não há nada como os tênis,<br/> camiseta o ou acessórios adidas Star Wars.<br/>
        <b>adidas parceria</b>
        <br/>Você pode se sentir como o ícone que você é, com as collabs adidas porque têm toda a essência<br/> dos famosos artistas; imprimimos a atitude e estilo dos personagens e pessoas mais influentes<br/> para a colaboração ideal.</p>
    </DivFooter>

    <Footerzinho>
      <h1>ENTRE PARA O CLUBE E<br/>GANHE 15% OFF</h1>
      <button>CADASTRE-SE GRATUITAMENTE</button>
    </Footerzinho>

    <Footer>
      <ContainerFooter1>
        <h2>PRODUTOS</h2>
        <p>Calçados</p>
        <p>Tênis</p>
        <p>Roupas</p>
        <p>Acessórios</p>
        <p>Chuteiras</p>
        <p>Quebra Vento</p>
        <p>Novidades</p>
        <p>Maratona do Rio</p>
        <p>Black Friday</p>
        <p>Outlet</p>
        <p>Cyber Monday</p>
        <p>adiClub</p>
        <p>adidas em Casa</p>
        <p>adidas app</p>
        <p>adidas Runners</p>
      </ContainerFooter1>
      <ContainerFooter2>
        <h2>ESPORTES</h2>
        <p>Futebol</p>
        <p>São Paulo</p>
        <p>Internacional</p>
        <p>Flamengo</p>
        <p>Federação</p>
        <p>Cruzeiro</p>
        <p>Corrida</p>
        <p>Basquete</p>
        <p>Training</p>
        <h2>COLEÇÕES</h2>
        <p>Yeezy</p>
        <p>Ultraboost</p>
        <p>Originals</p>
        <p>NWD</p>
        <p>Slip On</p>
        <p>Stan Smith</p>
        <p>adicolor</p>
        <p>Superstar</p>
        <p>Farm</p>
      </ContainerFooter2>
      <ContainerFooter3>
        <h2>SUPORTE</h2>
        <p>Podemos Ajudar?</p>
        <p>Atendimento ao Cliente</p>
        <p>Dúvidas Frequentes</p>
        <p>Tabela de Tamanhos</p>
        <p>Vendas por Whatsapp</p>
        <p>Como Comprar</p>
        <p>Entregas e Frete</p>
        <p>Opções de Pagamento</p>
        <p>Troca e Devolução</p>
        <p>Usando Nosso Site</p>
        <p>Como Saber o Tamanho do seu top</p>
        <p>O Que é o adiClub</p>
        <p>Mapa do Site</p>
      </ContainerFooter3>
      <ContainerFooter4>
        <h2>INFORMAÇÃO<br/> CORPORATIVA</h2>
        <p>Sobre Nós</p>
        <p>Carreiras</p>
        <p>Imprensa</p>
        <p>Produtos</p>
      </ContainerFooter4>
      <ContainerFooter>
        <h2>SIGA-NOS</h2>
        <img src={Face} alt=''/>
        <img src={Insta} alt=''/>
        <img src={TW} alt=''/>
        <img src={Pinte} alt=''/>
        <img src={Tik} alt=''/>
        <img src={You} alt=''/>
      </ContainerFooter>
    </Footer>

    <Finish>
      <p className='First'>Requisições de dados pessoais</p>
      <p>Termos e Condições de Navegação</p>
      <p>Termos e Condições</p>
      <p>Termos #YESadidas</p>
      <p>Selecione o Pais</p>
      <p>Política de Privacidade</p>
      <p>Termos e Condições adiClub</p>

      <FinishFooter>
        <p>adidas do Brasil LTDA - CNPJ/MF nº 42.274.696/0025-61 – Inscrição Estadual&nbsp; 298.144.017.112 Endereço: Rua Pataxós nº 241, Galpão 1, Bairro Jardim Magali, Município de Embú - SP,<br/> CEP 06833-073 Atendimento ao cliente loja online: service@onlineshop.adidas.com.br | Análise de defeito de fabricação: SAC.BR@adidas.com 08008 234 327 ou 11 5546 3700</p> 
      </FinishFooter>
    </Finish>

    </Container >
  )
}

export default App;
