<template>
  <div class="attribute-container">
    <color-attribute class="container"></color-attribute>
    <size-attribute class="container"></size-attribute>
    <material-attribute class="container"></material-attribute>
    <special-attribute class="container"></special-attribute>
    <suitway-attribute class="container"></suitway-attribute>
    <technique-attribute class="container"></technique-attribute>
    <cloth-len-attribute class="container"></cloth-len-attribute>
    <shoe-sports-star-attribute class="container"></shoe-sports-star-attribute>
    <shoe-height-attribute class="container"></shoe-height-attribute>
    <shoe-ground-type-attribute class="container"></shoe-ground-type-attribute>
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
import shoeSportsStarAttribute from './components/shoeSportsStarAttribute'
import shoeHeightAttribute from './components/shoeHeightAttribute'
import shoeGroundTypeAttribute from './components/shoeGroundTypeAttribute'



export default {
  components: { colorAttribute, sizeAttribute, materialAttribute, specialAttribute, suitwayAttribute, 
    techniqueAttribute, clothLenAttribute,shoeSportsStarAttribute,shoeHeightAttribute, shoeGroundTypeAttribute }
}
</script>
<style lang="scss" scoped>
.container {
  width: 90%;
  margin: 30px auto;
}
</style>