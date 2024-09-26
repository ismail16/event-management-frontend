<template>
  <div class="m-auto">
    <div>
      <div class="card-body">
        <div class="card-img">
          <img src="../../assets/success.svg" class="img" alt="success" />
        </div>
        <div class="card-text-body">
          <p class="card-text-first">Registration Successful</p>
          <p class="card-text-second">
            DUECA REUNION & FRESHERS' RECEPTION , September 28, 2023, 3PM Onwards
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-body {
  margin: 100px auto 50px auto;
}
.card-img {
  text-align: center;
}
.img {
  width: 50%;
  margin: auto;
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.card-text-body {
  text-align: center;
  padding: 1rem;
}
.card-text-first {
  font-weight: 500 !important;
  font-size: 20px;
}
.card-text-second {
  font-size: 16px;
}
.card-text-second span {
  font-weight: 600 !important;
  font-size: 16px;
}
.card-text-third {
  font-size: 18px;
}

@media screen and (min-width: 480px) {
  .card-body {
    width: 35rem;
    margin: 100px auto 100px auto;
    box-shadow: 0px 0px 13px 2px #00000024;
    border: none;
  }
  .card-img {
    text-align: center;
  }
  .img {
    width: 50%;
    margin: auto;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  .card-text-body {
    text-align: center;
    padding: 3rem;
  }
  .card-text-first {
    font-weight: 600 !important;
    font-size: 23px;
  }
  .card-text-second {
    font-size: 18px;
  }
  .card-text-second span {
    font-weight: 600 !important;
    font-size: 18px;
  }
  .card-text-third {
    font-size: 20px;
  }
}
</style>
