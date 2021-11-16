import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'

export function Header() {

    const data = useStaticQuery(graphql`
    query {
        alldata{
        headers {
            btncontato
            btnloja
            btnpaginainicial
            btnsobre
            biscoitosdaisa
            iconavatar {
                url
            }
            iconfacebook {
                url
            }
            iconinstagram {
                url
            }
            iconinterrogacao {
                url
            }
            iconlupa {
                url
            }
            iconsacola {
                url
            }
            icontelegram {
                url
            }
            iconwhatsapp {
                url
            }
            iconyoutube {
                url
    }
   }
  }
}
    `)

const {btncontato, btnloja, btnpaginainicial, btnsobre, iconavatar, iconfacebook, iconinstagram, iconinterrogacao, iconlupa, iconsacola, icontelegram, iconwhatsapp, iconyoutube} = data.alldata.mains[0]

return(
    <>
    <S.Paragraph>15% de desconto na primeira compra</S.Paragraph>
    <S.ParagraphWhats>Fale conosco via WhatsApp</S.ParagraphWhats>
    </>
)
    }