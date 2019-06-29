<template>
    <div>
        <div class="content"></div>
        
        <Slider :title="team.event_away_team" v-if="team"/>

  
			<section class="banner-bottom-w3layouts py-5" id="team" v-if="team" >
				<div class="container pb-xl-5 pb-lg-3">
					<h3 class="title mb-lg-5 mb-4 pb-4 text-center text-white">Our Starting Lineup</h3>
					<div class="row">
						<div class="col-lg-4 about-in text-center mt-4" v-for="(lineup,key) in team.lineups.away_team.starting_lineups" :key="key">
							<div class="card active">
								<div class="serv-cont-wthree">
									<div class="icon-wthrees">
										<span class="fa fa-thumbs-o-up">{{ lineup.player_number }}</span>
									</div>
									<h5 class="card-title mb-3 text-white">{{ lineup.player }}</h5>
									<p class="card-text">
                                         <img :src="getFlag(lineup.player_country.toLowerCase())" width="20px" alt="" class="img-responsive">
                                                    {{ lineup.player_country }}
                                    </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

            <section class="banner-bottom-w3layouts py-5" id="classes" v-if="team">
				<div class="container pb-xl-5 pb-lg-3">
					<h3 class="title mb-lg-5 mb-4 pb-4 text-center text-white">Substitutes</h3>
					<div class="row">
						<div class="col-lg-4 about-in text-center mt-4" v-for="(substitute,key) in team.lineups.away_team.substitutes" :key="key">
							<div class="card active">
								<div class="serv-cont-wthree">
									<div class="icon-wthrees">
										<span class="fa fa-thumbs-o-up">{{ substitute.player_number }}</span>
									</div>
									<h5 class="card-title mb-3 text-white">{{ substitute.player }}</h5>
									<p class="card-text">
                                         <img :src="getFlag(substitute.player_country.toLowerCase())" width="20px" alt="" class="img-responsive">
                                                    {{ substitute.player_country }}
                                    </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
            <a href="#" id="toTop" style="display: block;"><span id="toTopHover" style="opacity: 1;">asd</span>To Top</a>
    </div>
</template>

<script>
import Slider from '@/components/Slider'
    
    export default {
         components: {
            Slider
        },
        data() {
            return {
                games: null,
                team : null,
                placeholder : 'https://via.placeholder.com/100x100',
                anonymousPlaceholder : 'https://everydaynutrition.co.uk/wp-content/uploads/2015/01/default-user-avatar-66x66.png'
            }
        },
        methods: {
            isImageAvailable(teamName) {
                return teamName == 'Monaco' || teamName == 'Levallois' || teamName == 'Chalon/Saone'
            },
            getTeam()
            {
                let team = this.games.filter( game => {
                    return parseInt(game.away_team_key) == this.$route.params.id
                });

                this.team = team.pop()
            },
            getFlag(country)
            {
                country = country.split(' ').join('-');

                let noIconForThisCountry = [
                    'usa',
                    'poland',
                    'fyr-of-macedonia'
                ];
                
                if(noIconForThisCountry.includes(country))
                {
                    country = 'united-states-of-america';
                }

                return require(`~/assets/png/${country}.png`);
            }
        },
        mounted () {
            this.$axios.$get(`?met=Fixtures&APIkey=${process.env.AsAPIkey}&from=2019-01-01&to=2019-06-29`)
                .then(data => {
                    console.log(data.result);
                    this.games = data.result;
                    this.getTeam();
                    
                })
            this.$router.push('#team');
        },
    }
</script>

<style lang="scss" scoped>
.space
{
    height: 100vh;
}
</style>