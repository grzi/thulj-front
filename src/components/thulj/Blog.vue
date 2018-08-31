<template>
    <div>
        <SideNav :activeSection='"newspaper"'></SideNav>
        <TitleBar :sectionTitle='sectionTitle' :customClasses="'withMiddleNav'"></TitleBar>
        <div class="middleNav">
            <div class="headerNav">

                <div class="row  no-margin-bottom">
                    <div class="col s12">
                        <div class="row no-margin-bottom">
                            <div class="input-field col s12">
                                <input type="text" id="autocomplete-input" class="autocomplete">
                                <label for="autocomplete-input">Rechercher ...</label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
  import SideNav from '@/components/thulj/commons/SideNav.vue'
  import TitleBar from '@/components/thulj/commons/TitleBar.vue'
  import Footer from '@/components/thulj/commons/Footer.vue'

  export default {
    name: 'Blog',
    components: {
      SideNav,
      Footer,
      TitleBar
    },
    created () {
      document.title = 'Blog - Thulj.fr'
    },
    data: function () {
      return {
        sectionTitle: 'Thulj > Blog'
      }
    }
  }
</script>

<style scoped>
    .middleNav {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        width: 400px;
        position: fixed;
        top: 0;
        background: white;
        height: 100%;
        left: 105px;
    }
    .headerNav{border-bottom:1px solid #CCC;}
</style>
