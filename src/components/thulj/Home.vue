<template>
  <div>
    <SideNav v-bind:activeSection='"home"'/>
    <TitleBar v-bind:sectionTitle='sectionTitle'/>
    <div class="content">
      <div class="container">
        <div class="row"><h4><b>Bienvenue ! </b></h4></div>
        <div class="row">
          <div class="row margin-top-20">
            <div class="col s12 m8 light">
              <div>Je suis <b>Grzi</b> (Jérémy Thulliez), développeur passionné et curieux de nouvelles
                technologies.
                J'ai créé ce site web afin de pouvoir centraliser mes différentes passions, découvertes
                et créations
              </div>
              <div class="margin-top-20">
                En ce qui me concerne, je suis principalement orienté vers le monde de la technologie
                Objet et web.
                J'ai découvert les joies du JAVA en 2010, et n'ai cessé depuis de la cultiver, autant de
                manière
                personnelle que professionnelle.
              </div>
            </div>
            <div class="col l1">
            </div>
            <div class="col s12 m3">
              En savoir plus
              <div class="decaleLiens"><a>Curriculum Vitae</a></div>
              <div class="decaleLiens"><a>Portfolio</a></div>
              Contact
              <div class="decaleLiens"><a>Jeremy.thulliez at gmail.com</a></div>
            </div>
          </div>
          <div class="section">

            <!--   Icon Section   -->
            <div class="row">

              <div class="col s6 m6 l3">
                <div class="icon-block">
                  <h2 class="center brown-text">
                    <font-awesome-icon icon="heart" size="1x"/>
                  </h2>
                  <h5 class="center">Passions</h5>
                  <p class="light center">
                    L'informatique est une passion dévorante depuis que je
                    l'ai découverte. C'est l'une de mes forces, car j'aime ce que je fais chaque
                    jour.
                  </p>
                </div>
              </div>

              <div class="col s6 m6 l3">
                <div class="icon-block">
                  <h2 class="center brown-text">
                    <font-awesome-icon icon="bolt" size="1x"/>
                  </h2>
                  <h5 class="center">Réactivité</h5>
                  <p class="light center">
                    J'aime que les choses bougent ! S'il y a un problème, je souhaite le
                    résoudre ou faire en sorte qu'il soit résolu le plus rapidement possible
                  </p>
                </div>
              </div>
              <div class="col s6 m6 l3">
                <div class="icon-block">
                  <h2 class="center brown-text">
                    <font-awesome-icon icon="lightbulb" size="1x"/>
                  </h2>
                  <h5 class="center">Connaissance</h5>

                  <p class="light center">
                    La veille technique et la curiosité sont deux éléments
                    important de mon métier. Ils faut savoir se maintenir à jour des nouvelles
                    technologies, pratique, si on souhaite être expert.
                  </p>
                </div>
              </div>

              <div class="col s6 m6 l3">
                <div class="icon-block">
                  <h2 class="center brown-text">
                    <font-awesome-icon icon="coffee" size="1x"/>
                  </h2>
                  <h5 class="center">Java</h5>

                  <p class="light center">Le JAVA et moi sommes inséparables. Je ne me lasse pas de
                    cet
                    univers dans lequel j'apprend chaque jour. </p>
                </div>
              </div>

            </div>
          </div>
          <div class="row"><h4><b>Derniers billets</b></h4></div>
          <div class="row">
            <Card v-for="card in cards" v-bind:card="card" v-bind:key="card.title"/>
          </div>
        </div>

      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import SideNav from '@/components/thulj/commons/SideNav.vue'
  import TitleBar from '@/components/thulj/commons/TitleBar.vue'
  import Footer from '@/components/thulj/commons/Footer.vue'
  import Card from '@/components/thulj/commons/Card.vue'

  export default {
    name: 'Home',
    components: {
      Card,
      SideNav,
      Footer,
      TitleBar
    },
    created () {
      document.title = 'Accueil - Thulj.fr'
    },
    data: function () {
      return {
        sectionTitle: 'Thulj > Accueil',
        cards: [
          {
            title: 'Le site fait peau neuve !',
            description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            publishDate: '27/08/2018',
            section: 'newspaper'
          },
          {
            title: 'Le site fait peau neuve !',
            description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            publishDate: '27/08/2018',
            section: 'newspaper'
          },
          {
            title: 'Le site fait peau neuve !',
            description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            publishDate: '27/08/2018',
            section: 'code'
          },
          {
            title: 'Le site fait peau neuve !',
            description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            publishDate: '27/08/2018',
            section: 'code'
          },
          {
            title: 'Le site fait peau neuve !',
            description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            publishDate: '27/08/2018',
            section: 'utensils'
          },
          {
            title: 'Le site fait peau neuve !',
            description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            publishDate: '27/08/2018',
            section: 'newspaper'
          },
          {
            title: 'Le site fait peau neuve !',
            description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            publishDate: '27/08/2018',
            section: 'code'
          },
          {
            title: 'Le site fait peau neuve !',
            description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            publishDate: '27/08/2018',
            section: 'newspaper'
          },
          {
            title: 'Le site fait peau neuve !',
            description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            publishDate: '27/08/2018',
            section: 'newspaper'
          },
          {
            title: 'Le site fait peau neuve !',
            description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            publishDate: '27/08/2018',
            section: 'newspaper'
          },
          {
            title: 'Le site fait peau neuve !',
            description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            publishDate: '27/08/2018',
            section: 'newspaper'
          },
          {
            title: 'Le site fait peau neuve !',
            description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            publishDate: '27/08/2018',
            section: 'newspaper'
          },
          {
            title: 'Le site fait peau neuve !',
            description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            publishDate: '27/08/2018',
            section: 'newspaper'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .margin-top-20 {
    margin-top: 20px;
  }

  #index-banner {
    background-image: url("../../assets/header.jpg");
  }

  .decaleLiens {
    margin-left: 20px;
    color: gray;
  }

  .decaleLiens a {
    color: gray;
  }

  .decaleLiens a:hover {
    color: #4B4B4B;
    cursor: pointer;
  }

</style>
