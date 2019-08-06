import React from "react"
import Header from "../components/Header"
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import partnersData from '../assets/partners.json'

const partnerStyle = {
  alibaba: {
    padding: "45px",
    marginTop: "-50px"
  },
  dso: {
    justifyContent: "center",
    marginTop: "-85px"
  },
  mindef: {
    justifyContent: "center",
    marginTop: "-50px"
  },
  moe: {
    padding: "55px",
    marginTop: "-90px"
  },
  nrf: {
    padding: "25px",
    marginTop: "-30px"
  },
  nsfc: {
    padding: "75px",
    marginTop: "-100px"
  }
}

export default () => (
  <div style={{ margin: `5rem auto`, maxWidth: 1000 }}>
    <Header />
    <h1>Our Research Philosophy</h1>
      <Card style={{ padding: "25px" }}>
      Our relentless focus on fundamental research aims to address key scientific and
      engineering questions or to develop new capabilities in the field of Natural Language Processing.
      </Card>
    <h1>Our Partners</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      { Object.keys(partnersData).map((name, i) =>
        <Card key={name} style={{ width: 310, height: 220, margin: "10px" }}>
          <CardHeader
            action={
              <IconButton
                aria-label={name}
                size="small"
                style={{ color: "#232F34", background: "#ffff", fontSize: "14px", }}
                href={partnersData[name]["link"]}
                target="_blank"
                rel="noopener"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt}/>
              </IconButton>
            }
          />
          <img alt={name}
               src={require("../assets/img/partners/" + name + ".webp")}
               style={partnerStyle[name]}
          />
        </Card>
      )}
    </div>
  </div>
)