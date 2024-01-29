<script lang="ts" setup>
definePageMeta({
  theme: 'light',
})
</script>

<template>
    <div class="bg-alabaster">
        <section class="px-layout container pt-40 pb-24">
            <div class="flex flex-col gap-24 relative">
                <h1 data-aos="slide-up">
                    <nu-typography type="hero-title-filled">Foire aux<br />questions</nu-typography>
                </h1>
                <div class="text-right ml-auto flex flex-col gap-6">
                    <nu-typography type="subtitle">Vous avez des questions ?</nu-typography>
                    <div class="max-w-[400px]">
                        Nous avons déjà les réponses les plus fréquentes pour les questions courantes.
                        Si vous ne les trouvez pas ici, contactez-nous.
                    </div>
                </div>
            </div>
        </section>

        <section class="pt-24">
            <div class="bg-silver pb-24">
                <div class="px-layout container flex flex-col @xl:flex-row @xl:gap-24">
                    <h3 class="flex-shrink relative top-12 @md:-top-[44px] w-[400px]">
                        <nu-typography type="headline" class="text-stroke-chinese-black">
                            Pour<br />
                        </nu-typography><nu-typography type="headline-filled">
                            com<br />mencer.
                        </nu-typography>
                    </h3>
                    <div class="flex-1 flex flex-col gap-8 mt-24">
                        <nu-expand-item class="border-b pb-8">
                            <template #activator>
                                <nu-typography type="subtitle">Quel est le contenu minimal requis pour amorcer une collaborations ?</nu-typography>
                            </template>
                            <div>
                                Nous pouvons commencer à partir de zéro, simplement avec une compréhension de la quantité de blocs
                                et de ce que vous souhaitez présenter en termes d'informations. En fonction de la conception,
                                nous adapterons du Lorem Ipsum et vous fournirons le nombre exact delignes/symboles qui s'ajusteront
                                parfaitement à la conception. Si vous avez déjà une partie du contenu, cela est également utile,
                                et si vous avez tout préparé, c'est incroyable. Nous sommes satisfaits avec autant de contenu
                                que vous avez.
                            </div>
                        </nu-expand-item>
                        <nu-expand-item class="border-b pb-8">
                            <template #activator>
                                <nu-typography type="subtitle">
                                    Comment fonctionne votre processus ?
                                </nu-typography>
                            </template>
                            <div>
                                Notre processus est très transparent et clair : vous signez le formulaire et nous vous contacterons. Ensuite, vous remplissez le Typeform et organisez un appel avec notre responsable. Si toutes les informations nécessaires sont prêtes pour l'estimation, vous recevrez une ventilation détaillée avec des informations précises sur le temps/l'argent nécessaire pour votre projet. Si vous êtes d'accord avec les tarifs et les délais, nous signons deux contrats - l'accord-cadre et la spécification.
                                Vous ajoutez un dépôt de 50 % et nous organisons une réunion de lancement avec votre équipe et la nôtre pour plonger ensemble dans votre projet. La prochaine étape est la recherche - style et UX, où nous définissons et discutons avec vous des solutions qui vous conviennent le mieux, donc une partie de cela dépend simplement de vos goûts personnels. La prochaine étape est le flux utilisateur, où nous construirons pour vous les flux les plus courants et orientés utilisateur pour chaque scénario.
                                Ensuite, viendrait l'étape de l'UX où nous créons pour vous des wireframes noir et blanc et un prototype, afin que vous puissiez tester et ressentir la convivialité de votre projet même à ce stade. L'étape UI ne commencera qu'une fois que vous aurez approuvé l'UX. Pour le premier écran, vous recevrez 2 versions différentes basées sur le style que vous avez choisi précédemment et une fois confirmé, nous appliquerons ce design au reste du projet.
                                Maintenant, c'est le moment de travailler sur les illustrations et la dernière partie est une animation pour vous. Et une fois que vous êtes satisfait de tout, vous recevrez les fichiers source en fonction de ce que nous avons convenu depuis le début.
                                Ensuite, un soutien en design peut également être ajouté à la portée si vous n'êtes pas sûr de votre équipe de développement.
                            </div>
                        </nu-expand-item>
                        <nu-expand-item>
                            <template #activator>
                                <nu-typography type="subtitle">
                                    Combien de temps cela prend-il pour lancer un nouveau projet ?
                                </nu-typography>
                            </template>
                            <div>
                                La durée dépend de la charge de travail. En règle générale, cela prendra de 2 jours à 1 semaine à compter de la date d'estimation jusqu'à la réunion de lancement, ce qui englobe la phase documentaire et de négociations.
                            </div>
                        </nu-expand-item>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-silver pt-24">
            <div class="bg-alabaster pb-24">
                <div class="px-layout container flex flex-col @xl:flex-row @xl:gap-24">
                    <h3 class="flex-shrink relative top-12 @md:-top-[44px] w-[400px]">
                        <nu-typography type="headline" class="text-stroke-chinese-black">
                            Pour<br />
                        </nu-typography>
                        <nu-typography type="headline-filled">
                            conti<br />nuer.
                        </nu-typography>
                    </h3>
                    <div class="flex-1 flex flex-col gap-8 mt-24">
                        <nu-expand-item class="border-b pb-8">
                            <template #activator>
                                <nu-typography type="subtitle">Pourquoi votre start-up a-t-elle besoin d'un MVP ?</nu-typography>
                            </template>
                            <div>
                                TODO
                            </div>
                        </nu-expand-item>
                        <nu-expand-item class="border-b pb-8">
                            <template #activator>
                                <nu-typography type="subtitle">
                                    Combien de personnes travaillent sur le projet ?
                                </nu-typography>
                            </template>
                            <div>
                                TODO
                            </div>
                        </nu-expand-item>
                        <nu-expand-item class="border-b pb-8">
                            <template #activator>
                                <nu-typography type="subtitle">
                                    Externalisons-nous certains éléments du projet, ou notre équipe est-elle entièrement interne ?
                                </nu-typography>
                            </template>
                            <div>
                                TODO
                            </div>
                        </nu-expand-item>
                        <nu-expand-item>
                            <template #activator>
                                <nu-typography type="subtitle">
                                    Fournissez-vous des rapports (par exemple, des avancements hebdomadaires) ? Si oui, à quelle fréquence et quel en est le format ?
                                </nu-typography>
                            </template>
                            <div>
                                TODO
                            </div>
                        </nu-expand-item>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-silver">
            <nu-section-break class="small-container px-layout place-self-center text-stroke-chinese-black" variant="light">
                <nu-typography type="headline">Une question<br />sans réponse ? </nu-typography>
                <nu-link label="Ouvrir le formulaire de contact" to="?contact">
                    <nu-button class="mt-4">
                        Nous contacter
                    </nu-button>
                </nu-link>
            </nu-section-break>
        </section>
    </div>
</template>

<style>

.test div {
    @apply w-[150px]
}

</style>