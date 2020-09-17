<template>
  <div class="attribute-container">
    属性设置
    <color-attribute></color-attribute>
    <size-attribute></size-attribute>
  </div>
</template>
<script>
import colorAttribute from './components/colorAttribute'
import sizeAttribute from './components/sizeAttribute'
export default {
  components: { colorAttribute, sizeAttribute }
}
</script>