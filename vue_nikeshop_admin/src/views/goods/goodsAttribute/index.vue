<template>
  <div class="attribute-container">
    属性设置
    <color-attribute></color-attribute>
    <size-attribute></size-attribute>
    <material-attribute></material-attribute>
  </div>
</template>
<script>
import colorAttribute from './components/colorAttribute'
import sizeAttribute from './components/sizeAttribute'
import materialAttribute from './components/materialAttribute'
export default {
  components: { colorAttribute, sizeAttribute, materialAttribute }
}
</script>