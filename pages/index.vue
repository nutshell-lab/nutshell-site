<template>
	<div class="bg-alabaster font-inter">
    <section>
      <!--
      bloc1
      Catch phrase
      H1
      Description
      CTA Contact -->
      <div>Création de stratégies digitales et site sur mesure</div>
      <h1>Agence digitale spécialisée en création de Site internet</h1>
      <div>
        Depuis plus de 10 ans, l’agence de stratégie digitale Nutshell accompagne les PME de tous
        secteurs dans leur transformation numérique. Spécialisée dans la création de sites internet sur-mesure
        et d’applications mobiles optimisées pour l’utilisateur, elle déploie des stratégies performantes
        alliant acquisition web et dispositifs webmarketing.
      </div>
      <nu-link label="Nous contacter" to="/contact">
        <nu-button class="w-full mt-auto">
          Contactez-nous
        </nu-button>
      </nu-link>
      <nu-link label="Découvrir notre agence" to="/agence">
        <nu-button class="w-full mt-auto">
          Nous découvrir
        </nu-button>
      </nu-link>

      <nu-link label="Explorer nos engagements" to="/nos-engagements">
        Agence engagée
      </nu-link>
    </section>
    <section>
      <!--
      bloc2
      liste des clients -->
      <h2>Ils nous font confiance pour leur stratégie digitale</h2>
      <!--
        LOGO non clickable

        OLECIO
        ACTINUUM
        ATLAS
        CONSTRUCTYS
        KEYRO
        KARBON

      -->
    </section>
    <section id="projects" class="bg-gradient-to-b from-chinese-black from-85% to-alabaster to-85% text-alabaster">
      <div class="small-container px-layout pt-16 flex flex-col gap-16">
        <div data-aos="slide-up">
          <nu-typography type="title" class="self-start">Ils ont créé<br />de la valeur.</nu-typography>
        </div>
        <div class="flex flex-col items-end gap-8">
          <div class="flex flex-col @lg:grid @lg:grid-cols-2 gap-6">
            <DataQuery v-slot="{ data }" resource="projets" :where="(p) => ['actinuum', 'brokers', 'atlas', 'constructys'].includes(p.id)">
              <nu-link :label="`Découvrez le projet ${p.title}`" :to="p.path" :disabled="p.disabled"
                v-for="(p, i) in data.slice(0, 4)">
                <nu-project-preview :class="{ '@lg:mt-8': i === 0, '@lg:-mt-8': i === 3 }" :title="p.title" :highlight="p.highlight"
                  :picture="p.picture" :description="p.description" :disabled="p.disabled" data-aos="slide-up"></nu-project-preview>
              </nu-link>
            </DataQuery>
          </div>
          <nu-link label="Découvrez nos autres projets" to="/projets">
            <div class="flex text-cinnabar items-center gap-4 justify-center transition-all duration-300 hover:gap-6">
              <nu-typography type="cta-text" class="">Découvrez nos autres projets</nu-typography>
              <nu-arrow right />
            </div>
          </nu-link>
        </div>
      </div>
    </section>
    <section>
      <!--
      bloc3
       -->
      <h2>Les expertises de notre agence de création pour amplifier votre présence en ligne</h2>
      <div>Notre agence de création excelle dans plusieurs domaines – sans exclusivité. Que vous collaboriez déjà avec une autre agence web ou recherchiez une expertise complète en expérience digital, nous nous adaptons à vos besoins pour accompagner votre projet et booster votre croissance de votre site internet.</div>
      <div>
        <div>
          <h3>Création de site internet</h3>
          <div>Optimisez la conversion de votre trafic avec un site web esthétique et performant, créé par notre agence de stratégie digitale ! Nous vous aidons à concevoir ou refondre votre site vitrine et e-commerce.</div>
          <nu-link label="Découvrir notre agence" to="/creation-site-internet">
            <nu-button class="w-full mt-auto">
              Agence web 
            </nu-button>
          </nu-link>
        </div>
        <div>
          <h3>Stratégie digitale</h3>
          <div>Adoptez une stratégie digitale personnalisée et optimisez votre présence en ligne ! Nous imaginons et développons du contenu aligné avec votre cible et vos objectifs.</div>
          <nu-link label="Découvrir notre agence" to="/strategie-digitale">
            <nu-button class="w-full mt-auto">
              Agence digitale 
            </nu-button>
          </nu-link>
        </div>
        <div>
          <h3>Référencement naturel</h3>
          <div>Générez des visites qualifiées en positionnant votre site dans les premiers résultats de Google avec l’accompagnement de notre agence SEO à travers toute la France ! Le SEO reste le principal levier d’acquisition de trafic.</div>
          <nu-link label="Découvrir notre agence" to="/referencement-naturel">
            <nu-button class="w-full mt-auto">
              Agence SEO
            </nu-button>
          </nu-link>
        </div>
        <div>
          <h3>Webdesign</h3>
          <div>Facilitez la conversion de vos visiteurs en simplifiant la navigation et en respectant les bonnes pratiques du web. Un webdesign bien pensé est clé pour améliorer votre taux de conversion.</div>
          <nu-link label="Découvrir notre agence" to="/webdesign">
            <nu-button class="w-full mt-auto">
              Agence webdesign
            </nu-button>
          </nu-link>
        </div>
        <div>
          <h3>Application sur mesure</h3>
          <div>Boostez l’engagement de vos clients avec des applications web et mobile sur-mesure ! Grâce à notre expertise, nous créons des solutions innovantes et adaptées à vos enjeux pour offrir une expérience fluide et captivante.</div>
          <nu-link label="Découvrir notre agence" to="/application-sur-mesure">
            <nu-button class="w-full mt-auto">
              Agence sur-mesure 
            </nu-button>
          </nu-link>
        </div>
      </div>
    </section>
    <section>
      <!--
      bloc4
      méthodologie
      
      comprendre
      3poles
        design
        tech
        marketing
      approche sectorielle
      -->
      <h2>Collaborez avec une agence digitale passionnée par les défis.</h2>
      <div>
        <div>
          <h3>Analyser vos enjeux business et y apporter une réponse digitale personnalisée.</h3>
          <div>Parce que vos enjeux de notoriété, de développement commercial ou de vente sont intrinsèquement liés au digital, notre rôle est de comprendre rapidement vos problématiques et d’y répondre concrètement avec une solution digitale sur-mesure.</div>
        </div>
        <div>
          <h3>Design, Technologie, Marketing : une synergie au service de votre projet.</h3>
          <div>Nutshell s’appuie sur une approche en trois pôles qui fonctionnent de concert : le Design, pour créer des interfaces engageantes et intuitives ; la Technologie, pour garantir un développement robuste et innovant ; et le Marketing, pour maximiser la portée et l’efficacité de chaque projet. Cette synergie nous permet d’accompagner nos clients avec des solutions digitales complètes et performantes.</div>
        </div>
        <div>
          <h3>Une connaissance approfondie de votre secteur pour des solutions sur-mesure.</h3>
          <div>Notre agence fonctionne avec une organisation sectorielle inspirée des cabinets de conseil. Nous analysons les spécificités de votre secteur tout en intégrant des idées novatrices issues d’autres industries, afin de vous aider à innover et prendre l’avantage sur vos concurrents.</div>
        </div>
      </div>
    </section>
    <section>
      <!--
      bloc5
      OF

      Approche sectorielle spécialisé organisme de formation

      IDea: le secteur à l'honneur
      Organisme de formation


      XXXX
      -->
      <div>Secteur à l'honneur</div>
      <h2>Le digital au service de la formation professionnelle</h2>
      <div>
        La transition numérique d’un organisme de formation ne se limite pas à la création d’un site internet.
        C’est l’opportunité d’optimiser l’ensemble de vos outils digitaux : <nu-link label="Site vitrine" to="/site-internet-pour-organisme-de-formation">site vitrine</nu-link>, <nu-link label="Plateforme E-learning" to="/plateforme-e-learning">plateforme e-learning</nu-link>, <nu-link label="Catalogue de formation" to="/catalogue-de-formation">gestion des inscriptions</nu-link> et
        <nu-link label="Confirmité Qualiopi" to="/site-internet-conforme-qualiopi">conformité réglementaire (Qualiopi, accessibilité, RGPD)</nu-link>.
      </div>
      <div>
        Depuis 2018, notre équipe conjugue compétences et expérience pour offrir un service sur-mesure qui répond précisément à vos attentes.
        Notre objectif est clair : vous propulser en tête des résultats avec un site internet captivant, une visibilité maximale sur les réseaux sociaux, et des campagnes publicitaires qui augmentent votre taux de conversion.
      </div>
      <div>
        Gagnez en attractivité, simplifiez la gestion et boostez votre impact avec une stratégie digitale adaptée
      </div>
    </section>
    <section>
      <!--
      bloc6
      Egagement
      -->
      <h2>Créer un web plus responsable</h2>
      <div>
        Loin d’être un frein à la créativité, l’éco-conception permet de concevoir des sites performants, accessibles et respectueux de l’environnement. Chez Nutshell, nous intégrons cette démarche dès la phase de conception : arborescence optimisée, design épuré, technologies efficientes et hébergement responsable. Un site plus vertueux, sans compromis sur votre image de marque.
      </div>
      <nu-link label="Explorer nos engagements" to="/nos-engagements">
        <nu-button class="w-full">
          Nos engagements
        </nu-button>
      </nu-link>
    </section>
    <section id="cases" class="py-20 bg-chinese-black text-alabaster flex flex-col">
      <div class="small-container px-layout self-center flex flex-col justify-between pt-16 gap-16 relative">
        <h2 data-aos="slide-up">
          <nu-typography type="title" class="max-w-[776px]">Si vous en avez besoin, on peut sûrement vous le
          fabriquer.</nu-typography>
        </h2>
        <DataQuery v-slot="{ data }" resource="dossiers">
          <nu-swiper :items="data" v-slot="{ item }">
            <nu-link :label="`Découvrez le cas ${item.title}`" :to="item.path" :disabled="item.disabled">
              <nu-tile
                :title="item.title"
                :category="item.category"
                :picture="item.picture"
                :caption="item.caption"
                :disabled="item.disabled"
              />
            </nu-link>
          </nu-swiper>
        </DataQuery>
      </div>
    </section>
    <section>
      <!--
      bloc6
      CTA
      -->
      <div>Vous êtes déjà là ? Alors allons plus loin !</div>
      <div>
        Vous souhaitez en savoir davantage sur nos expertises, notre équipe et nos solutions ? Discutons ensemble de votre projet et explorez des options créatives et efficaces.
      </div>
      <nu-link label="Contactez-nous" to="/contact">
        <nu-button class="w-full">
          Nous contacter
        </nu-button>
      </nu-link>
    </section>
	</div>
</template>
