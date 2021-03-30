<template lang="pug">
  div.dt-infinite-scroll-wrap
    h1.dt-infinite-scroll-header Бесконечная прокрутка
    span Количество чисел - {{ this.numbers.length }}
    div#infinite-list.dt-infinite-scroll-content
      span(
        v-for="(num, key) in rangeNumbers(this.numbers)"
        :key="key"
      ).dt-infinite-scroll-item {{ num }}
</template>

<script>
export default {
  name: 'InfiniteScroll',
  data: () => ({
    numbers: [],
    firstNumber: 1,
    amountNumbers: 20,
    firstRange: 1,
    secondRange: 20
  }),
  mounted() {
    const listNumber = document.querySelector('#infinite-list')
    listNumber.addEventListener('scroll', () => {
      if(listNumber.scrollTop + listNumber.clientHeight >= listNumber.scrollHeight) {
        this.nextNumbers()
        listNumber.scrollTop = 5
      }
      if (listNumber.scrollTop === 0) {
        this.prevNumbers()
        listNumber.scrollTop = 5
      }
    })
    this.firstNumbers()
  },
  methods: {
    firstNumbers() {
      this.fillArray()
    },
    prevNumbers() {
      if (this.firstRange > 1) {
        this.decreaseRange()
        this.firstNumber -= this.amountNumbers
      }
    },
    nextNumbers() {
      if (this.numbers[this.firstNumber - 1] === undefined) {
        this.fillArray()
        this.increaseRange()
      } else {
        this.increaseRange()
        this.firstNumber += this.amountNumbers
      }
    },
    rangeNumbers(numbers) {
      const rangeNumbers = numbers.slice(this.firstRange - 1, this.secondRange)
      return rangeNumbers
    },
    fillArray() {
      for (let i = 0; i < this.amountNumbers; i++) {
        this.numbers.push(this.firstNumber++)
      }
    },
    decreaseRange() {
      this.firstRange -= this.amountNumbers
      this.secondRange -= this.amountNumbers
    },
    increaseRange() {
      this.firstRange += this.amountNumbers
      this.secondRange += this.amountNumbers
    }
  }
}
</script>

<style lang="less" scoped>
body {
  padding: 0;
  margin: 0;
}
@layer base {
    .dt-infinite-scroll-header {
      @apply
      font-bold
      uppercase
      mb-8;
    }
    .dt-infinite-scroll-wrap {
        @apply
        w-full
        flex
        flex-wrap
        flex-col
        items-center;
    }
    .dt-infinite-scroll-content {
        @apply
        w-48
        h-96
        overflow-scroll
        max-h-full
        overflow-hidden
        flex
        flex-wrap
        flex-grow-0
        border-double
        border-black
        border-2
        rounded-lg;
    }
    .dt-infinite-scroll-item {
        @apply
        w-full
        bg-blue-50
        border-dashed
        border-black
        border-0
        border-b-2;
    }
}
</style>