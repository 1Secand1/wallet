<template>
  <section class="bank-account-info">
    <div class="bank-account-info__wrapper">
      <h2 class="bank-account-info__title">Total Ballance</h2>

      <div class="bank-account-info__last-transaction">
        <p class="bank-account-info__last-transaction-sum">+ 200</p>
        <p class="bank-account-info__last-transaction-text">Last Transation</p>

        <div class="bank-account-info__last-transaction-butons">
          <button class="bank-account-info__last-transaction-button">
            TOP UP
          </button>
          <button class="bank-account-info__last-transaction-button">
            WITHDRAW
          </button>
        </div>
      </div>
    </div>

    <div class="bank-account-info__wallets">
      <h2 class="bank-account-info__wallets-sum">$ 200.58</h2>
      <p class="bank-account-info__wallets-text">WALLETS AMOUNT</p>
    </div>
  </section>
</template>
<style lang="scss">
.bank-account-info {
  display: flex;
  justify-content: space-between;

  position: relative;
  overflow: hidden;
  z-index: 1;

  width: 100%;
  height: 100%;

  background: white;

  &::before {
    content: "";

    position: absolute;
    z-index: -1;
    top: 50%;
    right: -60px;

    transform: translateY(-50%);

    width: 310px;
    height: 310px;

    border-radius: 100%;
    background: #4c49ed;
  }

  &__title {
    font-size: 25px;
    font-weight: 900;
  }
  &__wrapper {
    display: grid;

    height: 100%;

    align-content: center;
    align-items: center;

    margin-left: 36px;
  }
  &__last-transaction {
    display: grid;
    align-items: center;
    align-content: center;

    margin-top: 15px;
  }
  &__last-transaction-sum {
    color: #4fd18b;
    font-size: 25px;
    font-weight: 800;
  }
  &__last-transaction-text {
    margin-top: 3px;

    color: #a1a0bd;
    font-size: 16px;
    font-weight: 700;
  }

  &__last-transaction-butons {
    margin-top: 15px;
  }
  &__last-transaction-button {
    padding: 14px 20px;
    border-radius: 45px;
    border: 1px solid #4c49ed;
    background: none;

    cursor: pointer;

    color: #4c49ed;
    font-size: 13px;
    font-weight: 900;
    letter-spacing: 0.52px;
    text-transform: uppercase;

    transition: all 250ms ease-in;
    &:hover {
      background: #4c49ed;
      color: #ffff;
    }
  }
  &__wallets {
    display: grid;
    align-items: center;
    align-content: center;
    margin-right: 24px;
  }
  &__wallets-sum {
    margin-top: 4px;

    font-size: 45px;
    font-weight: 800;
    color: #fff;
  }
  &__wallets-text {
    color: #a5a4f6;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 2.04px;
    text-transform: uppercase;
  }
}
</style>
