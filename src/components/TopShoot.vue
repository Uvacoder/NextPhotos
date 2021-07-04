<template>
  <div>
    <div class="top-shoot-section container-fluid">
      <div class="top-shoot">
        <div class="top-shoot-caption">
          <h2>Some of our top shots photograpghers with models</h2>
          <p>
            We ooffer the best photograpghy and modelling contract which see our
            models as top priority as the continue to push further immersely in
            their career . we offer saemless connections with the top most
            companies and agencies and we are really proud with working with
            newbies who intend to merge with the gaints in the industry
          </p>
        </div>
        <div class="shot-gallery">
          <div class="row gallery-card">
            <div class="col-md-4">
              <div class="shot-card">
                <img :src="image" alt="" srcset="" />
                <div class="shot-card-caption">
                  <p class="shot-card-text">ALEXA SCHIZLE</p>
                  <div class="see-more-btn">
                    <button
                      type="button"
                      class="btn btn-lg btn-outline-warning"
                    >
                      see more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="shot-card">
                <img :src="image2" alt="" srcset="" />
                <div class="shot-card-caption">
                  <p class="shot-card-text">NEIL VÖN-HAAG</p>
                  <div class="see-more-btn">
                    <button
                      type="button"
                      class="btn btn-lg btn-outline-warning"
                    >
                      see more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="shot-card">
                <img :src="image3" alt="" srcset="" />
                <div class="shot-card-caption">
                  <p class="shot-card-text">KIMBERLY PATTERSON</p>
                  <div class="see-more-btn">
                    <button
                      type="button"
                      class="btn btn-lg btn-outline-warning"
                    >
                      see more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!---map -->

    <div id="map-section">
      <div class="map">
        <img src="@/assets/images/map.png" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>ot-car

<script>
export default {
  name: "TopShoot",
  data() {
    return {
      image:
        "https://images.pexels.com/photos/8072528/pexels-photo-8072528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      image2:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80",
      image3:
        "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bad+Script&family=Homemade+Apple&family=Lato&family=Lora&family=Montserrat&family=Open+Sans&family=Raleway&family=Roboto&display=swap");

.top-shoot-section {
  background-color: #9f9ee7;
  margin: 60px 0px 20px 0px;
  height: auto;
}

.top-shoot {
  width: 90%;
  margin: 0px auto;
  padding: 20px 10px;
  height: auto;
}

.top-shoot-caption {
  width: 80%;
  margin: 0px auto;
}

.top-shoot-caption h2 {
  text-align: center !important;
  padding: 30px 0px;
  color: #efefef;
  font-size: 35px;
  font-weight: 900;
  font-family: "Montserrat";
  text-transform: uppercase;
}

.top-shoot-caption p {
  text-align: center !important;
  padding: 15px 0px;
  color: #efefef;
  font-size: 18px;
  font-family: "Montserrat";
}

.shot-card {
  width: 100%;
  height: auto;
  padding: 5px;
}

.shot-card img {
  width: 100%;
  height: 350px;
  border-radius: 18px;
}

.gallery-card {
  background-color: rgb(255, 255, 255);
  padding: 20px 10px;
  border-radius: 15px;
}

.shot-card-text {
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 20px;
  padding: 15px 0px;
  height: auto;
  color: #efefef;
  border-radius: 0px 0px 20px 20px;
  background-color: #2f2e51e0;
}

.see-more-btn {
  justify-content: center;
  margin: 10px 10px 10px 30px;
}
.map img {
  object-fit: cover;
  width: 100%;
  height: 250px;
}
/**MEDIA QUERIES FCOR MOBILE VERSION  */
@media only screen and (max-width: 900px) {
  .top-shoot {
    width: 100%;
    margin: 0px auto;
    padding: 20px 0px;
    height: auto;
  }
}

.top-shoot-caption h2 {
  text-align: left;
  padding: 30px 0px;
  color: #efefef;
  font-size: 25px;
  font-family: "Montserrat";
  text-transform: uppercase;
}

.top-shoot-caption p {
  text-align: left;
  padding: 0px 0px 30px 0px;
  color: #efefef;
  font-size: 18px;
  font-family: "Montserrat";
}
.gallery-card {
  background-color: rgb(255, 255, 255);
  padding: 20px 0px;
}

.shot-card img {
  width: 100%;
  height: 300px;
  border-radius: 18px;
}

.shot-card {
  width: 100%;
  height: auto;
  padding: 5px;
}
</style>