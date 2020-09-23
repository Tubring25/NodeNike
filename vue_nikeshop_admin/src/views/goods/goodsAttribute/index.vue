<template>
  <div class="attribute-container">
    属性设置
    <color-attribute></color-attribute>
    <size-attribute></size-attribute>
    <material-attribute></material-attribute>
    <special-attribute></special-attribute>
    <suitway-attribute></suitway-attribute>
    <technique-attribute></technique-attribute>
    <cloth-len-attribute></cloth-len-attribute>
  </div>
</template>
<script>
import colorAttribute from './components/colorAttribute'
import sizeAttribute from './components/sizeAttribute'
import materialAttribute from './components/materialAttribute'
import specialAttribute from './components/specialAttribute'
import suitwayAttribute from './components/suitwayAttribute'
import techniqueAttribute from './components/techniqueAttribute'
import clothLenAttribute from './components/clothLenAttribute'


export default {
  components: { colorAttribute, sizeAttribute, materialAttribute, specialAttribute, suitwayAttribute, techniqueAttribute, clothLenAttribute }
}
</script>