import styled from 'styled-components'
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { RiShoppingBag2Line } from "react-icons/ri";
import Lupa from '../assets/lupa.png'
import Arrow from '../assets/arrow.png'
import ArrowWhite from '../assets/arrowwhite.png'
import { FiTruck } from "react-icons/fi";





export const Container = styled.div`
   
`

export const Headerzinho = styled.div`

    background: black;
    display: flex;
    width: 100vw;
    min-width: 1920px;
    height: 50px; 
    gap: 10px;

    img{
        width: auto;
        height: 25px;
        margin-top: 15px;
        margin-left: 200px;
    }

    h6{
        width: auto;
        color: white;
        font-size: 12px;
        margin-top: 18px;
        margin-right: 60px;
        white-space: nowrap; 
    }

`

export const FiiTruck = styled(FiTruck)`
    color: #ffffff;
    margin-top: 14px;
    margin-right: 5px;
    width: 25px;
    height: 25px;
    white-space: nowrap; 
`

export const H6header = styled.h6`
        color: white;
        margin-top: 15px;
`

export const Header = styled.div`
       display: flex;
       gap: 30px;
       width: auto;
       transform: scale(0.99);
        transform-origin: 0 0;
        img{
            width: 80px;
            height: 80px;
            margin-left: 50px;
        }

        input{
            background: url("${Lupa}");
            background-repeat: no-repeat;
            background-position: 95% 50%;
            padding-left: 10px;
            width: 200px;
            height: 40px;
            margin-top: 30px;
            background-color: #eceff1;
            margin-left: 60px;
            border: none;

            &:hover{
                border: 1px solid #000000;
            }
        }
        div{
            display: flex;
            gap: 50px;
        }
`

export const P1 = styled.p`
    font-weight: bold;
    margin-top: 45px;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

`

export const P = styled.p`
        margin-top: 45px;
        cursor: pointer;

        &:hover{
        opacity: 0.8;
    }
`
export const HeaderDiv = styled.div`
    margin-left: 45px;
`

export const BiiUser = styled(BiUser)`
    width: 30px;
    height: 30px;
    margin-top: 42px;

`

export const FiiHeart = styled(FiHeart)`
    width: 30px;
    height: 30px;
    margin-top: 42px;
`

export const Bag = styled(RiShoppingBag2Line)`
    width: 30px;
    height: 30px;
    margin-top: 42px;
`

export const Section = styled.div`

    img{
        position: absolute;
        width: auto;
        min-width: 100%;
    }

    h1{
        color: white;
        font-weight: 900;
        font-size: 45px;
        padding-top: 285px;
        padding-left: 120px;
        position: absolute;
        white-space: nowrap;
    }

    p{
        color: #ffffff;
        padding-left: 120px;
        font-size: 20px;
        position: absolute;
        margin-top: 400px;
        white-space: nowrap;

    }

    button{
        position: absolute;
        background-image: url('${Arrow}');
        background-repeat: no-repeat;
        background-size: 30px 30px;
        background-position: 94% 50%;
        margin-top: 468px;
        white-space: nowrap;
        margin-left: 120px;
        width: 250px;
        height: 60px;
        border: none;
        font-weight: bold;
        font-size: 17px;
        padding-right: 70px;
        box-shadow: 5px 5px #dddddd;
        cursor: pointer;

        &:hover{
            opacity: 0.8;
        }

        &:active{
            opacity: 0.6;
        }
    }

`

export const Section2 = styled.div`

 img{
        position: absolute;
        width: auto;
        min-width: 100%;
        margin-top: 855px;
    }

    h1{
        font-weight: 900;
        margin-top: 1100px;
        font-size: 45px;
        padding-top: 150px;
        padding-left: 40px;
        position: absolute;
        color: #000000;
    }

    p{
        padding-left: 40px;
        margin-top: 1320px;
        font-size: 20px;
        position: absolute;
        color: #000000;
    }

    button{
        color: white;
        margin-top: 1400px;
        background-image: url('${ArrowWhite}');
        background-repeat: no-repeat;
        background-size: 30px 30px;
        background-position: 94% 50%;
        background-color: black;
        margin-left: 40px;
        width: 250px;
        height: 60px;
        border: none;
        font-weight: bold;
        font-size: 17px;
        padding-right: 70px;
        box-shadow: 5px 5px  #dddddd ;
        position: absolute;
        cursor: pointer;

        &:hover{
            opacity: 0.8;
        }

        &:active{
            opacity: 0.6;
        }
    }

`

export const Tendences = styled.div`
    margin-left: 80px;
    padding-top: 100px;
    h1{
        margin-top: 1750px;
    }

`

export const DivVD = styled.div`
    white-space: nowrap;  
    width: auto;
    margin-top: 20px;

    video{
        width: 500px;
        height: 500px;
        margin-left: -68px;
    }

`
export const TextDiv = styled.div`
    display: flex;
    gap: 200px;
`


export const Hoz = styled.h4``
export const Morty = styled.h4``
export const Messin = styled.h4``
export const Celu = styled.h4``

export const DivCelu = styled.div`
    display: flex;
    width: auto;
    flex-direction: column;
    position: absolute;
    margin-left: 25px;
    margin-top: 13px;
    white-space: nowrap;  

    p{
        margin-top: 10px;
    }


    a{
        color: black;
        margin-top: 50px;
        font-weight: bolder;
        font-size: 20px;
        
        &:hover{
            opacity: 0.7;
        }
    }
`
export const DivMessi = styled.div`
    display: flex;
    width: auto;
    flex-direction: column;
    position: absolute;
    margin-left: 445px;
    margin-top: 13px;

    p{
        margin-top: 10px;
    }


    a{
        color: black;
        margin-top: 50px;
        font-weight: bolder;
        font-size: 20px;
        
        &:hover{
            opacity: 0.7;
        }

    }
    
`
export const DivMorty = styled.div`
    display: flex;
    position: absolute;
    width: auto;
    flex-direction: column;
    margin-left: 865px;
    margin-top: 13px;
    white-space: nowrap;

    p{
        margin-top: 10px;
    }


    a{
        color: black;
        margin-top: 50px;
        font-weight: bolder;
        font-size: 20px;
        
        &:hover{
            opacity: 0.7;
        }

    }
`
export const DivOz = styled.div`
    display: flex;
    width: auto;
    flex-direction: column;
    position: absolute;
    margin-left: 1290px;
    margin-top: 13px;
    white-space: nowrap;  

     p{
        margin-top: 10px;
    }

    a{
        color: black;
        margin-top: 70px;
        font-weight: bolder;
        font-size: 20px;
        
        &:hover{
            opacity: 0.7;
        }

    }
`

export const ContainerBeach = styled.div`
    
    white-space: nowrap;  
    width: 100vw;
    min-width: 1920px;
    img{
        position: absolute;
        min-width: 100%;
        margin-top: 200px;
        width: 1920px;
        
    }

    h1{
        position: absolute;
        margin-top: 300px;
        text-align: center;
        color: #ffffff;
        margin-left: 500px;
        font-weight: bolder;
        font-size: 40px;
    }

    button{
        position: absolute;
        color: white;
        margin-top: 470px;
        background-image: url('${ArrowWhite}');
        background-repeat: no-repeat;
        background-size: 30px 30px;
        background-position: 85% 50%;
        background-color: black;
        margin-left: 865px;
        width: 200px;
        height: 60px;
        border: 3px solid #ffffff;
        font-weight: bolder;
        font-size: 17px;
        padding-right: 55px;
        cursor: pointer;

        &:hover{
            opacity: 0.9;
        }
    }

    .ImageBeach{
        position: absolute;
        margin-top: 630px;
    }
    
`
export const Shoes = styled.div`
    margin-left: 80px;
    width: auto;
    min-width: 100%;

     h1{
        margin-top: 990px;
        margin-bottom: 25px;
    }
`
export const DivShoes = styled.div`
    white-space: nowrap;    
    img{
        width: 400px;
        height: 500px;
        margin-right: 15px;
    }
`
export const TextShoe = styled.div`
        display: flex;
        gap: 200px;
`
export const DivConfor = styled.div`
    display: flex;
    width: auto;
    flex-direction: column;
    position: absolute;
    margin-left: 8px;
    margin-top: 13px;
    white-space: nowrap; 

    p{
        margin-top: 10px;
    }


    a{
        color: black;
        margin-top: 50px;
        font-weight: bolder;
        font-size: 20px;
        
        &:hover{
            opacity: 0.7;
        }
    }
`
export const Confor = styled.div`
    font-weight: bolder;
    color: black;
    font-size: 16px;
`
export const DivAmor = styled.div`
     display: flex;
    width: auto;
    flex-direction: column;
    position: absolute;
    margin-left: 417px;
    margin-top: 13px;

    p{
        margin-top: 10px;
    }


    a{
        color: black;
        margin-top: 50px;
        font-weight: bolder;
        font-size: 20px;
        
        &:hover{
            opacity: 0.7;
        }

    }
`
export const Amor = styled.div`
     font-weight: bolder;
    color: black;
    font-size: 16px;
`
export const DivLeve = styled.div`
     display: flex;
    position: absolute;
    width: auto;
    flex-direction: column;
    margin-left: 835px;
    margin-top: 13px;
    white-space: nowrap;

    p{
        margin-top: 10px;
    }

    a{
        color: black;
        margin-top: 50px;
        font-weight: bolder;
        font-size: 20px;
        
        &:hover{
            opacity: 0.7;
        }

    }
`
export const DivSup = styled.div`
     display: flex;
    width: auto;
    flex-direction: column;
    position: absolute;
    margin-left: 1258px;
    margin-top: 13px;
    white-space: nowrap; 

    p{
        margin-top: 10px;
    }

    a{
        color: black;
        margin-top: 50px;
        font-weight: bolder;
        font-size: 20px;
        
        &:hover{
            opacity: 0.7;
        }

    }
`
export const Leve = styled.div`
     font-weight: bolder;
    color: black;
    font-size: 16px;
`
export const Sup = styled.div`
     font-weight: bolder;
    color: black;
    font-size: 16px;
`

export const SectionLuva = styled.div`
    margin-top: 200px;
    white-space: nowrap;  
     img{
        position: absolute;
        width: auto;
        min-width: 100%;
    }

    h1{
        color: white;
        font-weight: 900;
        font-size: 45px;
        padding-top: 180px;
        padding-left: 40px;
        position: absolute;
    }

    p{
        color: #ffffff;
        padding-left: 44px;
        font-size: 20px;
        position: absolute;
        margin-top: 300px;

    }

    button{
        position: absolute;
        background-image: url('${Arrow}');
        background-repeat: no-repeat;
        background-size: 30px 30px;
        background-position: 94% 50%;
        margin-top: 370px;
        margin-left: 40px;
        width: 250px;
        height: 60px;
        border: none;
        font-weight: bold;
        font-size: 17px;
        padding-right: 70px;
        box-shadow: 5px 5px #dddddd;
        cursor: pointer;

        &:hover{
            opacity: 0.8;
        }

        &:active{
            opacity: 0.6;
        }
    }

`

export const ContainerPopular = styled.div`
    margin-top: 1250px;
    margin-left: 440px;
    white-space: nowrap; 
    margin-bottom: 100px;
    width: auto;

    h1{
        font-size: 40px;
        margin-bottom: 30px;
        margin-left: 400px;
    }
`
export const Button = styled.button`
    width: 200px;
    height: 50px;
    font-size: 16px;
    background: #ffffff;
    margin-left: 10px;
    border: 1px solid #d3d7da;
    color: #000000;

    &:hover{
        opacity: 0.7;
    }

    `
export const SectionCategory = styled.div`
    margin-left: 80px;
    white-space: nowrap; 
    img{
        width: 370px;
        height: 370px;
        margin-left: 50px;
    }
`
export const TextCategory = styled.div``
export const H3shoe = styled.h3`
       position: absolute;
       margin-left: 145px;
       cursor: pointer;

       &:hover{
            opacity: 0.7;
        }
`
export const H3corta = styled.h3`
        position: absolute;
        margin-left: 555px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
`
export const H3fla = styled.h3`
        position: absolute;
        margin-left: 978px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }

`
export const H3poche = styled.h3`
        position: absolute;
        margin-left: 1395px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }

`

export const ShoeWhite = styled.div`
    margin-top: 150px;
     img{
        position: absolute;
        width: auto;
        min-width: 100%
    }

    h1{
        color: white;
        font-weight: 900;
        font-size: 50px;
        padding-top: 200px;
        padding-left: 40px;
        position: absolute;
    }

    p{
        color: #ffffff;
        padding-left: 44px;
        font-size: 20px;
        position: absolute;
        margin-top: 330px;

    }

    a{
        position: absolute;
        margin-top: 430px;
        margin-left: 40px;
        width: 250px;
        height: 60px;
        border: none;
        font-weight: bold;
        font-size: 19px;
        color: white;
        cursor: pointer;

        &:hover{
            opacity: 0.8;
        }

        &:active{
            opacity: 0.6;
        }
    }
`

export const Manchester = styled.div`
    h1{
        font-weight: 900;
        margin-top: 1000px;
        font-size: 45px;
        padding-top: 150px;
        padding-left: 40px;
        position: absolute;
        color: #000000;
    }

    p{
        padding-left: 40px;
        margin-top: 1275px;
        font-size: 20px;
        position: absolute;
        color: #000000;
    }

    button{
        color: white;
        position: absolute;
        margin-top: 1350px;
        background-image: url('${ArrowWhite}');
        background-repeat: no-repeat;
        background-size: 30px 30px;
        background-position: 94% 50%;
        background-color: black;
        margin-left: 40px;
        width: 250px;
        cursor: pointer;
        height: 60px;
        border: none;
        font-weight: bold;
        font-size: 17px;
        padding-right: 70px;
       

        &:hover{
            opacity: 0.8;
        }

        &:active{
            opacity: 0.6;
        }
    }
`

export const ImageManchester = styled.img`
        position: absolute;
        width: auto;
        min-width: 100%;
        margin-top: 840px;
`

export const LogoManche = styled.img`
    position: absolute;
    margin-top: 1000px;
    margin-left: 40px;
`

export const Colabs = styled.div`
    width: 100vw;
    min-width: 1920px;
    height: 300px;
    margin-top: 2385px;
    background: black;
    color: white;
    white-space: nowrap; 
    text-align: center;

    h3{
        padding-top: 100px;
        white-space: nowrap; 
    }
`

export const ContainerPharrel = styled.div`
    h1{
        color: white;
        font-weight: 900;
        font-size: 45px;
        padding-top: 1965px;
        padding-left: 40px;
        position: absolute;
    }

    p{
        color: #ffffff;
        padding-left: 44px;
        font-size: 20px;
        position: absolute;
        margin-top: 2090px;

    }   

    button{  
        position: absolute;
        background-image: url('${Arrow}');
        background-repeat: no-repeat;
        background-size: 30px 30px;
        background-position: 94% 50%;
        margin-top: 2200px;
        margin-left: 40px;
        width: 250px;
        height: 60px;
        border: none;
        font-weight: bold;
        font-size: 17px;
        padding-right: 70px;
        box-shadow: 5px 5px #dddddd;
        cursor: pointer;

        &:hover{
            opacity: 0.8;
        }

        &:active{
            opacity: 0.6;
        }
    }
`
export const IMGPharrel = styled.img`
    position: absolute;
    margin-top: 1830px;
    margin-left: 40px;
`
export const BGPharrel = styled.img`
         position: absolute;
        width: auto;
        min-width: 100%;
        margin-top: 1692px;
    
`
export const TendencesFinish = styled.div`
    margin-top: 100px;
    margin-left: 80px;
`
export const DivFinish = styled.div`
    white-space: nowrap;
    width: auto;
    margin-top: 20px;

    video{
        width: 500px;
        height: 500px;
        margin-left: -68px;
    }

    img{
        width: 350px;
        height: 500px;
        margin-left: -18px;
    }
`
export const TextFinish = styled.div`
     display: flex;
     gap: 150px;
`
export const DivNinja = styled.div`
     display: flex;
    width: auto;
    flex-direction: column;
    position: absolute;
    margin-left: 25px;
    margin-top: 13px;

    p{
        margin-top: 10px;
    }


    a{
        color: black;
        margin-top: 90px;
        font-weight: bolder;
        font-size: 20px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
    }
`
export const DivStar = styled.div`
    display: flex;
    width: auto;
    flex-direction: column;
    position: absolute;
    margin-left: 445px;
    margin-top: 13px;
    white-space: nowrap; 


    p{
        margin-top: 10px;
    }


    a{
        color: black;
        margin-top: 70px;
        font-weight: bolder;
        font-size: 20px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }

    }
`
export const DivDisneyimg = styled.div`
     display: flex;
    position: absolute;
    width: auto;
    flex-direction: column;
    margin-left: 1290px;
    margin-top: 13px;
    white-space: nowrap; 


    p{
        margin-top: 10px;
    }


    a{
        color: black;
        margin-top: 50px;
        font-weight: bolder;
        font-size: 20px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }

    }
`
export const DivDisney = styled.div`
     display: flex;
    width: auto;
    flex-direction: column;
    position: absolute;
    margin-left: 865px;
    margin-top: 13px;
    white-space: nowrap; 


     p{
        margin-top: 10px;
    }

    a{
        color: black;
        margin-top: 90px;
        font-weight: bolder;
        font-size: 20px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }

    }
`
export const Disney = styled.h4``
export const DI = styled.h4``
export const Star = styled.h4``
export const Ninja = styled.h4``

export const Descubra = styled.div`
    width: 100vw;
    min-width: 1920px;
    height: 300px;
    margin-top: 200px;
    background: black;
    color: white;
    text-align: center;
    white-space: nowrap; 

    h1{
        padding-top: 60px;
        font-weight: 900;
    }

    p{
        padding-top: 20px;
        padding-bottom: 30px;
        font-size: 20px;
    }

    a{
        color: #ffffff;
        font-weight: 900;
        font-size: 17px;
        cursor: pointer;
    }
    
`
export const DivFooter = styled.div`
    font-size: 20px;
    margin-left: 550px;
    margin-top: 100px;
    margin-bottom: 100px;
    white-space: nowrap; 
    width: auto;

`

export const Footerzinho = styled.div`
    background-color: #ede734;
    width: 100vw;
    min-width: 1920px;
    height: 145px;
    margin-bottom: 200px;
    white-space: nowrap; 


    button{
        position: absolute;
        margin-left: 950px;
        margin-top: 50px;
        background-image: url('${ArrowWhite}');
        background-color: black;
        color: #ffffff;
        background-repeat: no-repeat;
        background-size: 30px 30px;
        background-position: 94% 50%;
        width: 400px;
        height: 60px;
        border: none;
        font-weight: bold;
        font-size: 17px;
        padding-right: 70px;
        cursor: pointer;

        &:hover{
            opacity: 0.8;
        }

        &:active{
            opacity: 0.6;
        }
    }

    h1{
        position: absolute;
        margin-left: 350px;
        margin-top: 40px;
    }
`

export const ContainerFooter = styled.div`

    display: flex;
    flex-direction: column;
    position: absolute;
    gap: 15px;
    margin-left: 1450px;
    margin-top: -150px;
    white-space: nowrap;

    img{
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
`
export const ContainerFooter1 = styled.div`
    position: absolute;
    display: flex;
    gap: 15px;
    flex-direction: column;
    margin-left: 240px;
    margin-top: -150px;
    cursor: pointer;

    p{
    &:hover{
        font-weight: bolder;
    }
}

`
export const ContainerFooter2 = styled.div`
    position: absolute;
    display: flex;
    gap: 15px;
    flex-direction: column;
    margin-left: 550px;
    margin-top: -150px;
    cursor: pointer;

    p{
    &:hover{
        font-weight: bolder;
    }
}
`
export const ContainerFooter3 = styled.div`
    position: absolute;
    display: flex;
    gap: 15px;
    flex-direction: column;
    margin-left: 850px;
    margin-top: -150px;
    cursor: pointer;

    p{
    &:hover{
        font-weight: bolder;
    }
}
`
export const ContainerFooter4 = styled.div`
    position: absolute;
    display: flex;
    gap: 15px;
    flex-direction: column;
    margin-left: 1150px;
    margin-top: -150px;
    cursor: pointer;
    

    p{
    &:hover{
        font-weight: bolder;
    }
}
`
export const Footer = styled.div``
export const Finish = styled.div`
    background-color: #363738;
    width: 100vw;
    min-width: 1920px;
    height: 200px;
    margin-top: 800px;
    display: flex;
    white-space: nowrap;  
   

    p{
        display: block;
        margin-left: 90px;
        margin-top: 30px;
        color: #c8cbcc;
        font-size: 12px;
    }

    .First{
        margin-left: 250px;
    }
`

export const FinishFooter = styled.div`
    position: absolute;
    display: block;
    margin-top: 120px;
    margin-left: 350px;
    white-space: nowrap;  
    

`













