import { Container, Grid } from "@material-ui/core";
import Order from "./components/Order";

const Trade = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} lg={2} style={{ backgroundColor: "#ff5c5c" }}>
          검색
        </Grid>
        <Grid item xs={12} lg={10} style={{ backgroundColor: "blue" }}>
          <Grid container>
            <Grid item xs={12} lg={12} style={{ backgroundColor: "#32a852" }}>
              현재가
            </Grid>
            <Grid item xs={12} lg={6} style={{ backgroundColor: "#3259a8" }}>
              차트
            </Grid>
            <Grid item xs={12} lg={6} style={{ backgroundColor: "#a832a0" }}>
              <Order />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Trade;
