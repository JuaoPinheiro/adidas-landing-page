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
        <H6header>AS COLLABS DA ADIDAS S??O UMA EXPRESS??O DE CRIATIVIDADE E ATITUDE. SAIBA MAIS AQUI</H6header>
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
        <P>COLE????ES</P>
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
        <p>A ilha est?? chamando. Cadastre-se agora no<br/> CONFIRMED. Sorteio em 27 de agosto.</p>
        <button>EXPLORAR MAIS</button>
      </Section>

      <Section2>
        <img src={Daniel} alt='foto-daniel' />
        <h1>AL??M DA VELOCIDADE</h1>
        <p> O QUE VOC?? PRECISA PARA QUEBRAR NOVOS<br /> RECORDES?</p>
        <button>COMPRAR AGORA</button>
      </Section2>


      <Tendences>
        <h1>TEND??NCIAS</h1>
        <DivVD>
          <video src={Phone} loop autoPlay muted />
          <video src={Messi} loop autoPlay muted />
          <video src={Rick} loop autoPlay muted />
          <video src={Ozworld} loop autoPlay muted />
        </DivVD>
        <TextDiv>
          <DivCelu>
            <Celu>EM BREVE NO BRASIL</Celu>
            <p>O app CONFIRMED da adidas oferece<br /> collabs exclusivas e hist??rias in??ditas,<br /> tudo na ponta do seus dedos.</p>
            <a href='#'>CADASTRE-SE AGORA</a>
          </DivCelu>

          <DivMessi>
            <Messin>VIAJE PARA COPA DO MUNDO</Messin>
            <p>Entre para o adiClub e participe para<br /> viajar para a Grande Final da Copa do<br /> Mundo no Catar!</p>
            <a href='#'>SAIBA MAIS</a>
          </DivMessi>

          <DivMorty>
            <Morty>VELOCIDADE EM TODAS AS DIMENS??ES</Morty>
            <p>Explore a velocidade multidimensional<br /> com a nova X Speedportal. A X Speedportal<br /> chega ao Brasil a partir de hoje na cor Fluid Green</p>
            <a href='#'>COMPRAR AGORA</a>
          </DivMorty>

          <DivOz>
            <Hoz>ENTRE NO OZWORLD. SEJA QUEM VOC?? ?? <br /> DE VERDADE.</Hoz>
            <p>Expresse sua personalidade com a cole????o adidas Ozworld</p>
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
        <h1>ENCONTRE SEU T??NIS DE CORRIDA</h1>
        <DivShoes>
          <img src={Shoe1} alt='shoe1' />
          <img src={Shoe2} alt='shoe2' />
          <img src={Shoe3} alt='shoe3' />
          <img src={Shoe4} alt='shoe4' />
        </DivShoes>


        <TextShoe>
          <DivConfor>
            <Confor>CONFORT??VEL</Confor>
            <p>T??nis de corrida para iniciantes</p>
            <a href='#'>COMPRAR AGORA</a>
          </DivConfor>

          <DivAmor>
            <Amor>AMORTECIDO</Amor>
            <p>T??nis de corrida para o dia a dia</p>
            <a href='#'>COMPRAR AGORA</a>
          </DivAmor>

          <DivLeve>
            <Leve>LEVEZA</Leve>
            <p>T??nis para treino e competi????es</p>
            <a href='#'>COMPRAR AGORA</a>
          </DivLeve>

          <DivSup>
            <Sup>SUPORTE</Sup>
            <p>T??nis para corridas de loga dist??ncia</p>
            <a href='#'>COMPRAR AGORA</a>
          </DivSup>
        </TextShoe>
      </Shoes>

      <ContainerBeach>
        <img src={Beach} alt='beach' />
        <h1>PROTEGER OS OCEANOS ?? A NOSSA PRIORIDADE. ISTO ??<br/> MAIOR DO QUE O ESPORTE. ISTO ?? PARA O NOSSO FUTURO.</h1>
        <button>SAIBA MAIS</button>
        <img src={Colored} alt='color' className='ImageBeach' />
      </ContainerBeach>

      <ContainerPopular>
        <h1><i>POPULAR AGORA</i></h1>
        <Button>MATERIAIS RECICL??VEIS</Button>
        <Button>SAND??LIAS</Button>
        <Button>CHUTEIRAS</Button>
        <Button>ULTRABOOST</Button>
        <Button>PRE??OS INCRIVEIS</Button>
      </ContainerPopular>

      <SectionCategory>
        <img src={Black} alt='ShoeBlack' />
        <img src={Corta} alt='CortaVento' />
        <img src={Fla} alt='Flamengo' />
        <img src={Poche} alt='Pochete' />
      </SectionCategory>

      <TextCategory>
        <H3shoe>CAL??ADOS</H3shoe>
        <H3corta>ROUPAS</H3corta>
        <H3fla>OUTLET</H3fla>
        <H3poche>ACESS??RIOS</H3poche>
      </TextCategory>

      <ShoeWhite>
        <img src={White} alt='foto-white' />
        <h1>SUPERSTAR, FEITO<br /> PARA O AMANH??.</h1>
        <p>Conhe??a nossa mais recente cole????o de ??cones,<br /> agora feita parcialmente de Parley Ocean Plastic</p>
        <a href='#'>COMPRAR AGORA</a>
      </ShoeWhite>

      <Manchester>
        <ImageManchester src={Manche} alt='foto-manchester' />
        <LogoManche src={AdiMan} alt='logo-manchester' />
        <h1>PARA OS RED DEVILS<br /> EM VOC??</h1>
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
        <h3>AS COLLABS DA ADIDAS S??O UMA EXPRESS??O DE CRIATIVIDADE, DINAMISMO E AMOR PELOS<br />DESIGNS CRIADOS EM COLABORA????O COM AMIGOS PR??XIMOS QUE FAZEM PARTE DA NOSSA<br /> FAM??LIA E CULTURA. ATRAV??S DESSES PRODUTOS E EXPERI??NCIAS, EXPLORAMOS O ESTILO<br /> ORIGINAL DE M??SICOS, ARTISTAS, DESIGNERS E ??CONES CULTURAIS , TRABALHANDO JUNTOS<br /> PARA LEVAR A VIS??O DOS CRIADORES PARA TODO MUNDO.</h3>
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
            <p>A inova????o inspira. Celebre as origens do ZX</p>
            <a href='#'>COMPRAR AGORA</a>
          </DivNinja>

          <DivStar>
            <Star>VAI DEIXAR PASSAR?</Star>
            <p>N??o perca de vista os designs mais<br />ousados da cole????o Legacy of Boba Fett.</p>
            <a href='#'>COMPRAR AGORA</a>
          </DivStar>

          <DivDisney>
            <Disney>LIDERE O BANDO</Disney>
            <p>Cole????o Rei Le??o da Disney</p>
            <a href='#'>COMPRAR AGORA</a>
          </DivDisney>

          <DivDisneyimg>
            <DI>REALIZANDO SONHOS</DI>
            <p>Imagine que seus sonhos est??o<br />destinados a ser realizados, ?? s?? correr<br />atr??s deles com a cole????o Bambi.</p>
            <a href='#'>COMPRAR AGORA</a>
          </DivDisneyimg>
        </TextFinish>
      </TendencesFinish>

      <Descubra>
        <h1>DESCUBRA AS NOVIDADES E LAN??AMENTOS<br />ESPECIAIS</h1>
        <p>Saiba sobre  as novas collabs e produtos inovadores nos materiais, desenhos, estilo e atitude.</p>
        <a href='#'>SAIBA MAIS</a>
      </Descubra>

      <DivFooter>
        <p><b>adidas collabs: Jade Picon, Ivy Park, Lego e mais??? nos juntamos com seus artistas favoritos<br/> para criar pe??as ic??nicas.</b><br/>
        Desde os t??nis Yeezy at?? as roupas de Ivy park, voc?? vai encontrar os produtos criados com seus <br/>artistas, personagens ou designers favoritos, as collabs da adidas s??o um conjunto de pe??as<br/> ic??nicas que nascem da uni??o de nossa marca com ??cones que representam nossa cultura das<br/> tr??s listras.<br/>
        <b>Colabora????es de roupas Pharrell, t??nis Star Wars, acessorios Disney e muito mais</b><br/>
        Que tal um t??nis com a magia de Disney? Monte seu look pe??a a pe??a como um Lego, uma<br/> colabora????o t??o criativa e cheia de cor para voc?? brincar e construir a combina????o perfeita.<br/> Encontre os t??nis Yeezy que precisa para dar um toque ??nico no look ou as roupas de Ivy Park que<br/> s??o t??o inovadoras que voc?? vai achar o look perfeito e tamb??m n??o h?? nada como os t??nis,<br/> camiseta o ou acess??rios adidas Star Wars.<br/>
        <b>adidas parceria</b>
        <br/>Voc?? pode se sentir como o ??cone que voc?? ??, com as collabs adidas porque t??m toda a ess??ncia<br/> dos famosos artistas; imprimimos a atitude e estilo dos personagens e pessoas mais influentes<br/> para a colabora????o ideal.</p>
    </DivFooter>

    <Footerzinho>
      <h1>ENTRE PARA O CLUBE E<br/>GANHE 15% OFF</h1>
      <button>CADASTRE-SE GRATUITAMENTE</button>
    </Footerzinho>

    <Footer>
      <ContainerFooter1>
        <h2>PRODUTOS</h2>
        <p>Cal??ados</p>
        <p>T??nis</p>
        <p>Roupas</p>
        <p>Acess??rios</p>
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
        <p>S??o Paulo</p>
        <p>Internacional</p>
        <p>Flamengo</p>
        <p>Federa????o</p>
        <p>Cruzeiro</p>
        <p>Corrida</p>
        <p>Basquete</p>
        <p>Training</p>
        <h2>COLE????ES</h2>
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
        <p>D??vidas Frequentes</p>
        <p>Tabela de Tamanhos</p>
        <p>Vendas por Whatsapp</p>
        <p>Como Comprar</p>
        <p>Entregas e Frete</p>
        <p>Op????es de Pagamento</p>
        <p>Troca e Devolu????o</p>
        <p>Usando Nosso Site</p>
        <p>Como Saber o Tamanho do seu top</p>
        <p>O Que ?? o adiClub</p>
        <p>Mapa do Site</p>
      </ContainerFooter3>
      <ContainerFooter4>
        <h2>INFORMA????O<br/> CORPORATIVA</h2>
        <p>Sobre N??s</p>
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
      <p className='First'>Requisi????es de dados pessoais</p>
      <p>Termos e Condi????es de Navega????o</p>
      <p>Termos e Condi????es</p>
      <p>Termos #YESadidas</p>
      <p>Selecione o Pais</p>
      <p>Pol??tica de Privacidade</p>
      <p>Termos e Condi????es adiClub</p>

      <FinishFooter>
        <p>adidas do Brasil LTDA - CNPJ/MF n?? 42.274.696/0025-61 ??? Inscri????o Estadual&nbsp; 298.144.017.112 Endere??o: Rua Patax??s n?? 241, Galp??o 1, Bairro Jardim Magali, Munic??pio de Emb?? - SP,<br/> CEP 06833-073 Atendimento ao cliente loja online: service@onlineshop.adidas.com.br | An??lise de defeito de fabrica????o: SAC.BR@adidas.com 08008 234 327 ou 11 5546 3700</p> 
      </FinishFooter>
    </Finish>

    </Container >
  )
}

export default App;
