<template>
  <div>
    <div class="project-photo-section container-fluid">
      <div class="project-photo">
        <div class="project-photo-title">
          <!--wedding-->
          <div class="Wedding-photos">
            <h2>Wedding Aniversary</h2>
            <p class="wedding-paragraph">
              Some of the best wedding shoot from our photographer all around
              janury till may 2021 , recent wedding we had to do some cover for
              the event
            </p>
            <div class="row wedding-image">
              <div class="col-md-4">
                <img src="@/assets/images/gay.jpg" alt="" srcset="" />
              </div>
              <div class="col-md-4">
                <img src="@/assets/images/happy.jpg" alt="" srcset="" />
              </div>
              <div class="col-md-4">
                <img src="@/assets/images/edward.jpg" alt="" srcset="" />
              </div>
              <div class="col-md-4">
                <img src="@/assets/images/wesner.jpg" alt="" srcset="" />
              </div>
              <div class="col-md-4">
                <img src="@/assets/images/jonathan.jpg" alt="" srcset="" />
              </div>
              <div class="col-md-4">
                <img src="@/assets/images/studio.jpg" alt="" srcset="" />
              </div>
            </div>
          </div>
          <!--party-->

          <div class="party-photos">
            <h2>outdoor shoots</h2>
            <p class="party-paragraph">
              Outdoor project specifically for begginers in tht field is meant
              to nuture career building entusiasim in our models andhere in
              pixels thats is what we are specialized in , here is some of our
              outdoot phootshoot works
            </p>
            <div class="row wedding-image">
              <div class="col-md-4">
                <img src="@/assets/images/natalie.jpg" alt="" srcset="" />
              </div>
              <div class="col-md-4">
                <img src="@/assets/images/sound.jpg" alt="" srcset="" />
              </div>
              <div class="col-md-4">
                <img src="@/assets/images/david.jpg" alt="" srcset="" />
              </div>
              <div class="col-md-4">
                <img src="@/assets/images/ron.jpg" alt="" srcset="" />
              </div>
              <div class="col-md-4">
                <img src="@/assets/images/anna-shvets.jpg" alt="" srcset="" />
              </div>
              <div class="col-md-4">
                <img src="@/assets/images/cottonbro.jpg" alt="" srcset="" />
              </div>
            </div>
          </div>

          <!--some MODEL-->

          <div class="party-photos">
            <h2>Some other top model shoots</h2>
            <p class="party-paragraph">
              we are Delighted to give you a peak of some of out top model
              photoshoot recently shot for some of our collaborative job with
              other top brands and ajencies
            </p>
            <div class="row wedding-image">
              <div class="col-md-4">
                <img src="@/assets/images/resized1.jpg" alt="" srcset="" />
              </div>
              <div class="col-md-4">
                <img src="@/assets/images/collis.jpg" alt="" srcset="" />
              </div>
              <div class="col-md-4">
                <img src="@/assets/images/resized2.jpg" alt="" srcset="" />
              </div>
              <div class="col-md-4">
                <img src="@/assets/images/alexander.jpg" alt="" srcset="" />
              </div>
              <div class="col-md-4">
                <img src="@/assets/images/resized3.jpg" alt="" srcset="" />
              </div>
              <div class="col-md-4">
                <img src="@/assets/images/vilarim.jpg" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectPhoto",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bad+Script&family=Homemade+Apple&family=Lato&family=Lora&family=Montserrat&family=Open+Sans&family=Raleway&family=Roboto&display=swap");

.project-photo-section {
  background: rgb(245, 245, 245);
  height: auto;
  padding: 30px 0px;
}
.project-photo {
  width: 90%;
  margin: 10px auto;
  text-align: center;
}
.project-photo-title h2 {
  margin: 20px 0px;
  text-transform: uppercase;
  font-size: 35px;
  font-family: "Montserrat";
  font-weight: 500;
  color: #727070;
}
.Wedding-photos {
  padding: 20px 0px;
}

.wedding-image {
  width: 82%;
  padding: 20px 0px;
  margin: 20px auto;
}
.wedding-paragraph {
  font-size: 20px;
  margin: 20px 0px;
  font-family: "Montserrat";
  font-weight: 500;
  color: #727070;
}
.wedding-image img {
  border: black solid 2px;
  border-radius: 10px;
  margin-bottom: 10px;
}
.party-photos {
  padding: 20px 0px;
}

.party-paragraph {
  font-size: 20px;
  margin: 20px 0px;
  font-family: "Montserrat";
  font-weight: 500;
  color: #727070;
}

@media only screen and (max-width: 900px) {
  .project-photo-title {
    width: 100%;
  }
  .wedding-image img {
    border: black solid 2px;
    border-radius: 10px;
    margin-bottom: 10px;
    width: 265px;
  }
}
</style>