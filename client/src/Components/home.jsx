import React, { Component } from 'react';

import { Jumbotron, Container } from 'react-bootstrap';

import slika1 from './slika1.png';
import slika2 from './slika2.png';

export default class home extends Component {
  render() {
    return (
      <Container>
        <h2 class='text-center p-3'>Napravite svoj raspored</h2>

        <Jumbotron>
          <h1>Factory World Wide App </h1>
          <p>
            Factory World Wide je digitalna kreativna agencija koja pruža usluge
            digitalnog strateškog planiranja i razvoja kampanja na internetu,
            mobilnim platformama, kao i socijalnim mrežama. U Factory World Wide
            mi nudimo pregršt rešenja digitalnog marketinga, usredsređujući naš
            pristup na postizanje merljivih rezultata. Zajedno sa našim
            klijentima, mi počinjemo sa sticanjem uvida u identitet brenda. Mi
            istražujemo način na koji različiti kanali mogu poboljšati iskustvo
            klijenta, definišući optimalan put za brend kroz digitalnu ravan.
            Naša agencija pruža različit spektar rešenja koja su uvezana u jasnu
            kampanju, ili pojedinačne proizvode dizajnirane za specifičnu svrhu.
            Proizvodi koji su u ponudi su definisani preciznim budžetom, uvek
            održavajući fokus na superiornoj, merljivoj koristi za naše
            klijente.
          </p>
          <br />
        </Jumbotron>
        <div class='row text-center p-3'>
          <div class='col-lg-6 col-md-6 col-xs-6 thumb'>
            <img
              class='img-responsive'
              src={slika1}
              style={{ width: '50%' }}
              alt='scheduler'
            />
            <h3>Organizujte svoje vreme.</h3>
          </div>
          <div class='col-lg-6 col-md-6 col-xs-6 thumb'>
            <img
              class='img-responsive'
              src={slika2}
              style={{ width: '50%' }}
              alt='scheduler2'
            />
            <h3>Pregled rasporeda na dlanu.</h3>
          </div>
        </div>
      </Container>
    );
  }
}
