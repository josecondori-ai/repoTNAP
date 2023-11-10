import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './Components/Card/Card'
import { Section } from './Components/Section/Section'
import {ChakraProvider} from '@chakra-ui/react'

function App() {

  let productos = [
    {
      "id": "MLA819328068",
      "title": "Motorola G6 Plus 64 Gb Índigo Oscuro 4 Gb Ram",
      "price": 28599,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "http://mla-s1-p.mlstatic.com/909111-MLA31239994076_062019-I.jpg",
    },
    {
      "id": "MLA807148555",
      "title": "Motorola G6 32 Gb Índigo Oscuro 3 Gb Ram",
      "price": 10999,
      "condition": "new",
      "free_shipping": false,
      "thumbnail": "http://mla-s2-p.mlstatic.com/632562-MLA31003470563_062019-I.jpg"
    },
    {
      "id": "MLA828849306",
      "title": "Motorola G6 Dual Sim 32 Gb Índigo Oscuro 3 Gb Ram",
      "price": 12999,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "http://mla-s1-p.mlstatic.com/708400-MLA31003470610_062019-I.jpg"
    },
    {
      "id": "MLA830174206",
      "title": "Motorola One 64 Gb Negro 4 Gb Ram",
      "price": 23318.9,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "http://mla-s1-p.mlstatic.com/724005-MLA31250987474_062019-I.jpg"
    },
    {
      "id": "MLA814696460",
      "title": "Celular Libre Moto G6 Single Sim Envío Gratis",
      "price": 21999,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "http://mla-s1-p.mlstatic.com/923859-MLA31021617759_062019-I.jpg"
    },
    {
      "id": "MLA814696473",
      "title": "Celular Libre Moto G6 Plus Indigo Single Sim Envío Gratis",
      "price": 28599,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "http://mla-s2-p.mlstatic.com/944627-MLA31043037328_062019-I.jpg"
    },
    {
      "id": "MLA819326507",
      "title": "Celular Motorola E6 Plus  Gris Xt2025 32gb",
      "price": 11899,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "http://mla-s2-p.mlstatic.com/785703-MLA32505273638_102019-I.jpg"
    },
    {
      "id": "MLA742330116",
      "title": "Motorola Moto G6 Dual Cam 3gb Ram 32gb",
      "price": 14555,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "http://mla-s1-p.mlstatic.com/622211-MLA31596959638_072019-I.jpg"
    },
    {
      "id": "MLA769005181",
      "title": "Celulares Liberados Motorola Moto G6  32/3 Gb + Funda",
      "price": 15999,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "http://mla-s2-p.mlstatic.com/847675-MLA31043333518_062019-I.jpg"
    },
    {
      "id": "MLA745908703",
      "title": "Celular Motorola Moto G6 Xt-1925 32gb 3gb Garantia Oficial",
      "price": 10999,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "http://mla-s2-p.mlstatic.com/858049-MLA31021496917_062019-I.jpg"
    },
    {
      "id": "MLA804422188",
      "title": "Motorola Moto G6 32 Gb 3 Gb Ram Nuevo Libre Gtia Ahora 12",
      "price": 19999,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "http://mla-s1-p.mlstatic.com/692398-MLA31609608405_072019-I.jpg"
    },
    {
      "id": "MLA829979045",
      "title": "Nuevo Moto G6 Plus!! 4r/64gb!! ",
      "price": 21999,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "http://mla-s2-p.mlstatic.com/938559-MLA40416912323_012020-I.jpg"
    },
    {
      "id": "MLA773541184",
      "title": "Motorola Moto G6 Plus 64gb Dual Sim Libre Gtia",
      "price": 37400,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "http://mla-s1-p.mlstatic.com/820413-MLA31706703589_082019-I.jpg"
    },
    {
      "id": "MLA734106002",
      "title": "Motorola Moto G6 Plus 64gb 4gb Ram 4g Dual Sim Sellados Azul",
      "price": 23990,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "http://mla-s1-p.mlstatic.com/624153-MLA31044971950_062019-I.jpg"
    },
    {
      "id": "MLA814696483",
      "title": "Celular Libre Moto G6 Plus Nimbo Single Sim Envío Gratis",
      "price": 28599,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "http://mla-s2-p.mlstatic.com/733118-MLA28128586911_092018-I.jpg"
    },
    {
      "id": "MLA815983267",
      "title": "Motorola G6 32 Gb 3 Gb Ram",
      "price": 22988.5,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "http://mla-s2-p.mlstatic.com/681862-MLA32194238129_092019-I.jpg"
    },
    {
      "id": "MLA833739893",
      "title": "Motorola Moto G6 Play Muy Bueno Gold Liberado",
      "price": 13199,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "http://mla-s2-p.mlstatic.com/768599-MLA40383415159_012020-I.jpg"
    },
    {
      "id": "MLA820393439",
      "title": "Celular Motorola Moto G6 / Liberado / Mojado Leer",
      "price": 5800,
      "condition": "used",
      "free_shipping": true,
      "thumbnail": "http://mla-s2-p.mlstatic.com/980310-MLA32569969519_102019-I.jpg"
    },
    {
      "id": "MLA837480456",
      "title": "Motorola Moto G6 Plus Muy Bueno Indigo Liberado",
      "price": 14699,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "http://mla-s1-p.mlstatic.com/785628-MLA40653648748_022020-I.jpg"
    },
    {
      "id": "MLA800236818",
      "title": "Moto G6 Play",
      "price": 12899,
      "condition": "used",
      "free_shipping": false,
      "thumbnail": "http://mla-s1-p.mlstatic.com/886692-MLA31662700265_082019-I.jpg"
    },
    {
      "id": "MLA839894821",
      "title": "Motorola Moto G6 Play 32gb Libre Para Cualquier Empresa",
      "price": 8000,
      "condition": "used",
      "free_shipping": false,
      "thumbnail": "http://mla-s2-p.mlstatic.com/686206-MLA40825025754_022020-I.jpg"
    },
    {
      "id": "MLA821235367",
      "title": "Motorola Moto G6 Plus 64gb 4g Libre",
      "price": 17900,
      "condition": "used",
      "free_shipping": false,
      "thumbnail": "http://mla-s2-p.mlstatic.com/753214-MLA27862412915_072018-I.jpg"
    },
    {
      "id": "MLA811814198",
      "title": "Motorola Moto G6 Plus - Impecable Liberado - 4gb Ram 64g Int",
      "price": 16500,
      "condition": "used",
      "free_shipping": false,
      "thumbnail": "http://mla-s1-p.mlstatic.com/788745-MLA31997623843_082019-I.jpg"
    },
    {
      "id": "MLA811170539",
      "title": "Motorola G6 Play Liberado!!! Oportunidad",
      "price": 12880,
      "condition": "used",
      "free_shipping": true,
      "thumbnail": "http://mla-s2-p.mlstatic.com/967341-MLA31959518485_082019-I.jpg"
    },
    {
      "id": "MLA838169376",
      "title": "Motorola Moto G6 Play Refabricado Dorado Liberado",
      "price": 14599,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "http://mla-s1-p.mlstatic.com/731411-MLA40700822385_022020-I.jpg"
    },
    {
      "id": "MLA835785093",
      "title": "Celular Motorola G6 Play",
      "price": 9000,
      "condition": "used",
      "free_shipping": false,
      "thumbnail": "http://mla-s2-p.mlstatic.com/922176-MLA40533566156_012020-I.jpg"
    },
    {
      "id": "MLA833328079",
      "title": "Motorola Moto G6 Plateado 3gb Ram Liberado Excelentes Condic",
      "price": 14000,
      "condition": "used",
      "free_shipping": true,
      "thumbnail": "http://mla-s2-p.mlstatic.com/766567-MLA40238548897_122019-I.jpg"
    },
    {
      "id": "MLA838085262",
      "title": "Motorola Z3 Play Xt1926-6 1 Mes De Uso Excelente Estado",
      "price": 22000,
      "condition": "used",
      "free_shipping": true,
      "thumbnail": "http://mla-s1-p.mlstatic.com/643573-MLA40695837843_022020-I.jpg"
    },
    {
      "id": "MLA734083504",
      "title": "Motorola Moto G6 5.7 Garantia 6 Meses 6 Cuotas Sin Interés",
      "price": 18000,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "http://mla-s1-p.mlstatic.com/843880-MLA31594786612_072019-I.jpg"
    },
    {
      "id": "MLA752436405",
      "title": "Celular Motorola Moto G6 Plus Xt1926 64gb Liberado Nuevo",
      "price": 29999,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "http://mla-s2-p.mlstatic.com/900864-MLA31352723399_072019-I.jpg"
    },
    {
      "id": "MLA761733146",
      "title": "Moto G6 Plus, Mojado. No Funciona. Liberado De Fábrica",
      "price": 5999,
      "condition": "used",
      "free_shipping": false,
      "thumbnail": "http://mla-s1-p.mlstatic.com/880952-MLA28933340289_122018-I.jpg"
    },
    {
      "id": "MLA833264695",
      "title": "Celular Moto G6. Hay Que Cambiar El Módulo No Funciona.",
      "price": 6000,
      "condition": "used",
      "free_shipping": false,
      "thumbnail": "http://mla-s2-p.mlstatic.com/948956-MLA40359040273_012020-I.jpg"
    },
    {
      "id": "MLA803361446",
      "title": "Motorola G6 Plus 64gb Indigo Usado",
      "price": 14000,
      "condition": "used",
      "free_shipping": false,
      "thumbnail": "http://mla-s1-p.mlstatic.com/605461-MLA32148584796_092019-I.jpg"
    },
    {
      "id": "MLA835277008",
      "title": "Motorola G3 Para Arreglar O Repuesto",
      "price": 1899,
      "condition": "used",
      "free_shipping": false,
      "thumbnail": "http://mla-s1-p.mlstatic.com/682388-MLA40497504210_012020-I.jpg"
    },
    {
      "id": "MLA725662995",
      "title": "Motorola Moto G6 Plus 64gb 4gb Ram 4g Dual Sim Sellados Azul",
      "price": 28990,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "http://mla-s2-p.mlstatic.com/829878-MLA31079855860_062019-I.jpg"
    },
    {
      "id": "MLA838338003",
      "title": "Motorola Motog6 Plus Excelente",
      "price": 18000,
      "condition": "used",
      "free_shipping": false,
      "thumbnail": "http://mla-s2-p.mlstatic.com/705595-MLA40714490115_022020-I.jpg"
    },
    {
      "id": "MLA840611119",
      "title": "Teléfono Celular Motorola G6 Play",
      "price": 9999,
      "condition": "used",
      "free_shipping": false,
      "thumbnail": "http://mla-s2-p.mlstatic.com/725686-MLA40878956745_022020-I.jpg"
    },
    {
      "id": "MLA800679195",
      "title": "Motorola Moto G6 Xt1925 64 Gb 4gb Ram Huella Dual Sim Olivos",
      "price": 19000,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "http://mla-s2-p.mlstatic.com/825798-MLA31886690204_082019-I.jpg"
    },
    {
      "id": "MLA817003710",
      "title": "Moto G6 Plus 128gb Memoria! (64 Int + 64 Ext) + Funda + Film",
      "price": 16000,
      "condition": "used",
      "free_shipping": true,
      "thumbnail": "http://mla-s1-p.mlstatic.com/857858-MLA32341088131_092019-I.jpg"
    },
    {
      "id": "MLA830248833",
      "title": "Motorola G6 Deep Indigo",
      "price": 11000,
      "condition": "used",
      "free_shipping": false,
      "thumbnail": "http://mla-s2-p.mlstatic.com/627754-MLA40132289703_122019-I.jpg"
    },
    {
      "id": "MLA836447223",
      "title": "Motorola G6 Plus Nuevo Vendo O Permuto Liberado",
      "price": 21000,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "http://mla-s2-p.mlstatic.com/637835-MLA40577704088_012020-I.jpg"
    },
    {
      "id": "MLA837235906",
      "title": "Motorola Moto G6 Play 32gb - 3gb Ram - Libres - Caja Sellada",
      "price": 12000,
      "condition": "used",
      "free_shipping": false,
      "thumbnail": "http://mla-s1-p.mlstatic.com/766836-MLA31661340861_082019-I.jpg"
    },
    {
      "id": "MLA824743294",
      "title": "Moto G6 32gb",
      "price": 15900,
      "condition": "used",
      "free_shipping": true,
      "thumbnail": "http://mla-s1-p.mlstatic.com/726509-MLA40521495068_012020-I.jpg"
    },
    {
      "id": "MLA838161461",
      "title": "Motorola Moto G6",
      "price": 12000,
      "condition": "used",
      "free_shipping": true,
      "thumbnail": "http://mla-s2-p.mlstatic.com/656377-MLA40699957797_022020-I.jpg"
    },
    {
      "id": "MLA837187694",
      "title": "Celular Moto G6 Plus Azul Funda Igual A Nuevo C/caja Y Acc",
      "price": 13999,
      "condition": "used",
      "free_shipping": false,
      "thumbnail": "http://mla-s1-p.mlstatic.com/864590-MLA40633091580_022020-I.jpg"
    },
    {
      "id": "MLA831840445",
      "title": "Motorola G6 Xt1925-2 Andando, Completo, Muy Buen Estado",
      "price": 9900,
      "condition": "used",
      "free_shipping": false,
      "thumbnail": "http://mla-s2-p.mlstatic.com/849955-MLA40245612417_122019-I.jpg"
    },
    {
      "id": "MLA725003087",
      "title": "Telefono Celular Motorola Moto G6 Xt1925-2 32gb 3gb Ram D/s",
      "price": 14964,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "http://mla-s2-p.mlstatic.com/856302-MLA31735325016_082019-I.jpg"
    },
    {
      "id": "MLA842107302",
      "title": "Motorola Moto G6 Plus Libre",
      "price": 12000,
      "condition": "used",
      "free_shipping": false,
      "thumbnail": "http://mla-s1-p.mlstatic.com/971071-MLA40997454208_032020-I.jpg"
    },
    {
      "id": "MLA818337130",
      "title": "Mororola G6 Plus 64gb/4gb",
      "price": 8500,
      "condition": "used",
      "free_shipping": false,
      "thumbnail": "http://mla-s1-p.mlstatic.com/923128-MLA30957505960_062019-I.jpg"
    },
    {
      "id": "MLA830074353",
      "title": "Moto G6 Azul ",
      "price": 14500,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "http://mla-s2-p.mlstatic.com/940826-MLA40118860395_122019-I.jpg"
    }
  ]


// const producto =   {
//   "id": "MLA819328068",
//   "title": "Motorola G6 Plus 64 Gb Índigo Oscuro 4 Gb Ram",
//   "price": 28599,
//   "condition": "new",
//   "free_shipping": true,
//   "thumbnail": "http://mla-s1-p.mlstatic.com/909111-MLA31239994076_062019-I.jpg",
 //   "code4654654":"toyota"
// }

  return (
    <>
      <div>
        {/* <ChakraProvider> */}
              <Section/>
        {/* </ChakraProvider> */}
        {/* <Card producto={productos}/> */}
       {/* { productos.map(producto => <Card producto={producto} key={producto.id}/>)} */}
        {/* {productos.map(producto=><Card  key={producto.id} img={producto.thumbnail}  title={producto.title} price={producto.price} shipping={producto.free_shiping} condition={producto.condition} />)} */}
    
       </div>
    </>
  )
}

export default App
