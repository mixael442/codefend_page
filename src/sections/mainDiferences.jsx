import { motion } from "framer-motion";
import { fadeTransition } from "../transitions/globalTransitions";
import { serviceTransition } from "../transitions/globalTransitions";

const MainDiferences = () => {
    return (
        <section className="main-differences">
        <div className="container">
          <motion.div initial="hidden"
                      whileInView="visible"
                      variants={fadeTransition} 
                      className="copy">
            <h2>main differences</h2>
            <p>
              Codefend serves all its clients via a desktop application that
              requires installation. From this platform, we establish secure &
              encrypted communications with yourv company's staff. Codefend
              conducts systematic supervision of your infrastructure, employing
              diverse techniques and private information providers.
            </p>
          </motion.div>
          <div className="c-2">
            <motion.div initial={{y:'50vh', opacity:0}}             
                        whileInView={{y:'0',
                            opacity:[0.0,1],
                            transition:{
                            duration: 0.6,}}}
                        variants={{y: '50vw', opacity:0}} 
                        viewport={{ once: true }} 
                        className="image">
              <img src="../assets/images/cuadro.png" alt="" />
            </motion.div>
            <div className="list">
              <ul>
                <motion.li variants={serviceTransition} viewport={{ once: true }} initial='hidden'  whileInView='visible' className="item">
                  <img src="../assets/images/icon1.png" alt="" />
                  <p>
                    <b>our asm delivers permanent surveillance</b>
                    <br />
                    We consider information security should be a run as a
                    process. We provide permanent survelliance instead of once
                    in a year checks. Vulnerabilities found are notified on
                    demand in our plataform.
                  </p>
                </motion.li>
                <motion.li variants={serviceTransition} viewport={{ once: true }} initial='hidden'  whileInView='visible' className="item">
                  <img src="../assets/images/icon2.png" alt="" />
                  <p>
                    <b>issues communicated quickly</b>
                    <br />
                    Traditional security companies run scans once a year.
                    Codefend delivers scans on daily basis. We do not waste a
                    minute to communicate an issue once we find it. Address
                    issues as soon as it appears.
                  </p>
                </motion.li>
                <motion.li variants={serviceTransition} viewport={{ once: true }} initial='hidden'  whileInView='visible' className="item">
                  <img src="../assets/images/icon3.png" alt="" />
                  <p>
                    <b>seriously connected with real hackers</b>
                    <br />
                    Codefend is not exactly a traditional information security
                    company. Aside from compliance reports for your web
                    applications, we deliver information extracted from several
                    private communities.
                  </p>
                </motion.li>
              </ul>
              <div className="buttons">
                <a href="#contact" className="btn alt">
                  contact
                </a>
                <a href="#" className="btn main">
                  download
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bkg"></div>
      </section>
    )
}

export default MainDiferences