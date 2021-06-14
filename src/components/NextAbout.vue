<template>
  <div>
    <div class="container-fluid" id="About-next-photo-section">
      <div class="About-next-photo">
        <div class="title">
          <h2>WHAT WE OFFER HERE AT NEXT PHOTO</h2>
          <p>
            We are a Photography brand currently based in Miami. We currently
            working on a huge project based on future partnership with our
            client both in the States and Aboard, We have worked with various
            Multi-Brand and produced the Best student and groom them to the Most
            sort out models in the field.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NextAbout",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bad+Script&family=Homemade+Apple&family=Lato&family=Lora&family=Montserrat&family=Open+Sans&family=Raleway&family=Roboto&display=swap");

#About-next-photo-section {
  height: auto;
  padding: 30px 0px;
}

.About-next-photo {
  width: 90%;
  margin: 0 auto;
  padding: 10px 10px;
}
.title {
  width: 75%;
  margin: 0px auto;
  text-align: center;
}
.title h2 {
  padding: 20px 0px;
  font-family: "Montserrat";
  font-style: normal;
  font-size: 30px;
  font-weight: 100;
}

.title p {
  font-family: "Montserrat";
  font-style: normal;
  font-size: 18px;
  font-weight: 500;
  color: rgb(39, 39, 39);
}

@media only screen and (max-width: 900px) {
  .title {
    width: 100%;
    text-align: left;
  }

  .title h2 {
    padding: 20px 0px;
    font-family: "Montserrat";
    font-style: normal;
    font-size: 25px;
    font-weight: 100;
  }

  .title p {
    font-family: "Montserrat";
    font-style: normal;
    font-size: 12px;
    font-weight: 500;
    color: rgb(39, 39, 39);
  }
}
</style>