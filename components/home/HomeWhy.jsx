import { Col, Container, Grid, Text } from "@nextui-org/react";
import Image from "next/image";

const HomeWhy = () => {
  return (
    <div
      style={{
        background:
          //   "linear-gradient(202deg, rgba(99,80,80,1) 26%, rgba(173,25,23,1) 71%)",
          " #AD1917",
      }}
    >
      <Container
        justify="center"
        alignItems="center"
        display="flex"
        css={{ textAlign: "center", my: 4 }}
      >
        <Text h2 className="why-text" color="white">
          Dlaczego my?
        </Text>
        <Grid.Container direction="row" gap={2}>
          <Grid
            xs={12}
            sm={4}
            direction="column"
            justify="space-around"
            alignItems="center"
            css={{ "@xs": { justifyContent: "center" } }}
          >
            <Col>
              <Text color="white" className="why-text" h3>
                Doświadczenie i renoma
              </Text>
              <Text b>
                eśli Twoja firma przewozowa ma długoletnie doświadczenie i
                pozytywną reputację w branży, może to budzić zaufanie u
                klientów. Klienci często szukają firm, które mają udokumentowaną
                historię dostarczania usług wysokiej jakości.
              </Text>
            </Col>
            <Col>
              <Text color="white" className="why-text" h3>
                Szeroki zakres usług
              </Text>
              <Text b>
                eśli Twoja firma przewozowa ma długoletnie doświadczenie i
                pozytywną reputację w branży, może to budzić zaufanie u
                klientów. Klienci często szukają firm, które mają udokumentowaną
                historię dostarczania usług wysokiej jakości.
              </Text>
            </Col>
            <Col>
              <Text color="white" className="why-text" h3>
                Konkurencyjne ceny
              </Text>
              <Text b>
                eśli Twoja firma przewozowa ma długoletnie doświadczenie i
                pozytywną reputację w branży, może to budzić zaufanie u
                klientów. Klienci często szukają firm, które mają udokumentowaną
                historię dostarczania usług wysokiej jakości.
              </Text>
            </Col>
          </Grid>
          <Grid xs={12} sm={4} css={{ "@xs": { display: "none" } }}>
            <Image
              src={"/images/why-bus.png"}
              alt="alt"
              width={500}
              height={400}
              style={{
                objectFit: "contain",
                maxHeight: "400px",
                height: "auto",
              }}
              loading="lazy"
            />
          </Grid>
          <Grid
            xs={12}
            sm={4}
            direction="column"
            justify="space-around"
            alignItems="center"
          >
            <Col>
              <Text color="white" className="why-text" h3>
                Bezpieczeństwo i niezawodność
              </Text>
              <Text b>
                eśli Twoja firma przewozowa ma długoletnie doświadczenie i
                pozytywną reputację w branży, może to budzić zaufanie u
                klientów. Klienci często szukają firm, które mają udokumentowaną
                historię dostarczania usług wysokiej jakości.
              </Text>
            </Col>
            <Col>
              <Text color="white" className="why-text" h3>
                Dostępność i obsługa klienta
              </Text>
              <Text b>
                eśli Twoja firma przewozowa ma długoletnie doświadczenie i
                pozytywną reputację w branży, może to budzić zaufanie u
                klientów. Klienci często szukają firm, które mają udokumentowaną
                historię dostarczania usług wysokiej jakości.
              </Text>
            </Col>
            <Col>
              <Text color="white" className="why-text" h3>
                Wykwalifikowana kadra
              </Text>
              <Text b>
                eśli Twoja firma przewozowa ma długoletnie doświadczenie i
                pozytywną reputację w branży, może to budzić zaufanie u
                klientów. Klienci często szukają firm, które mają udokumentowaną
                historię dostarczania usług wysokiej jakości.
              </Text>
            </Col>
          </Grid>
        </Grid.Container>
      </Container>
    </div>
  );
};

export default HomeWhy;
