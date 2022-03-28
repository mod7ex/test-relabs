<template>
      <Default>
            <div class="products">
                  <div class="product">
                        <div class="product-photo product-property">
                              <img src="../assets/img/product.jpeg" />
                              <div class="overlay">
                                    <span class="quick_veiw overlay-item"
                                          >быстрый просмотр</span
                                    >
                                    <small class="discount overlay-item"
                                          >-14%</small
                                    >
                                    <span class="mark overlay-item">
                                          <span></span>
                                    </span>
                              </div>
                        </div>

                        <div class="price product-property">
                              <p class="main-price price-section">
                                    <b>86 956</b> &#8381;
                                    <small><b>99 990</b>&#8381;</small>
                              </p>

                              <p class="card-price price-section">
                                    <small><b>85 251</b>&#8381;</small>
                              </p>
                        </div>

                        <div class="description product-property">
                              <p>
                                    Apple &#47; смартфон iPhone 12 pro 128GB
                                    &#47; 6.1" &#47; 2532x1170 &#47; OLED &#47;
                                    128ГБ
                              </p>
                        </div>

                        <div class="rating product-property">
                              <svg
                                    v-for="i in 5"
                                    :key="i"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="19"
                                    fill="#cc46aa"
                                    viewBox="0 0 24 24"
                              >
                                    <path
                                          d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                                    />
                              </svg>
                              <span class="rating-count">87</span>
                        </div>

                        <div class="info product-property">
                              <span>РАCCРОЧКА 0-0-6</span>
                        </div>

                        <div class="cta product-property">
                              <Button v-fill:purple>в корзинy</Button>

                              <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#cc46aa"
                                    width="19"
                                    height="19"
                                    viewBox="0 0 24 24"
                              >
                                    <path
                                          d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z"
                                    />
                              </svg>
                        </div>
                  </div>
            </div>
      </Default>
</template>

<script>
export default {
      name: "Shop",
};
</script>

<style lang="scss">
.products {
      @include flex($justify: flex-start);

      .product {
            border-radius: $radius * 4;
            max-width: $product-item-width;

            @include shadow($blure: 19px);
            padding: 1.5em;

            .product-property {
                  margin-bottom: 0.8em;
            }

            .cta {
                  @include flex($justify: flex-start);

                  button {
                        padding: 0.7em 1em;
                        border-radius: $radius * 3;
                        margin-right: 1em;
                  }
            }

            .info {
                  background: rgb(234, 244, 79);
                  background: linear-gradient(
                        270deg,
                        rgba(234, 244, 79, 1) 0%,
                        rgba(210, 251, 230, 1) 80%
                  );
                  border-radius: 10em;
                  padding: 0.3em 0.7em;
                  width: fit-content;
            }

            .rating {
                  @include flex($justify: flex-start);

                  svg {
                        margin: 0 0.1em;
                  }
                  .rating-count {
                        color: rgba($secondary-black, 0.7);
                        margin-left: 0.3em;
                  }
            }

            .description {
                  p {
                        font-size: 0.9rem;
                        color: rgba($secondary-black, 0.7);
                  }
            }

            .price {
                  .price-section {
                        font-size: 1.2rem;
                        &.main-price {
                              small {
                                    color: $secondary-black;
                                    text-decoration: line-through;
                              }
                        }

                        &.card-price {
                              small {
                                    color: $purple;
                              }
                        }
                  }
            }

            .product-photo {
                  position: relative;
                  margin-bottom: 1.5em;

                  img {
                        width: 100%;
                  }

                  .overlay {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        top: 0;
                        padding: 0.5em;

                        .overlay-item {
                              position: absolute;
                              border-radius: 10em;
                              background-color: rgba(255, 255, 255, 0.63);

                              left: 0;
                              bottom: 0;

                              &.quick_veiw {
                                    padding: 0.5em 1em;
                                    max-width: fit-content;
                                    max-height: fit-content;
                                    margin: auto;

                                    right: 0;
                                    top: 0;
                              }
                              &.discount {
                                    padding: 0.1em 0.3em;
                                    color: $purple;
                                    background-color: #fdeef9;
                                    font-weight: 900;
                                    z-index: 1;
                              }
                              &.mark {
                                    bottom: 9px;
                                    border-radius: $radius * 2;
                                    padding: 0.5em;
                                    @include flex();
                                    span {
                                          display: block;
                                          height: 0.6em;
                                          width: 0.6em;
                                          background-color: rgba(0, 0, 0, 0.5);
                                    }
                              }
                        }
                  }
            }
      }
}
</style>
