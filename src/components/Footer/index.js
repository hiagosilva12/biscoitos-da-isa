import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'

export function Footer() {
    const data = useStaticQuery(graphql`
    query {
        alldata{
        footers{
          paragrafoloja
          paragrafohorario
          paragrafoendereco
          paragrafoformasdepagamento
          paragrafosaindodoforno
          paragraforedessociais
          paragrafocopyright
        }
      }
    }
    
    `)
}

const {paragrafoloja, paragrafohorario, paragrafoendereco, paragrafoformasdepagamento, paragrafosaindodoforno, paragraforedessociais, paragrafocopyright} = data.alldata.mains[0]

return (
    <>
    
    </>
)