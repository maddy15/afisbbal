<template>
    <div class="">
        
        <Slider title="Games"/>

        <section class="price py-lg-4 py-md-3 py-sm-3 py-3" id="price">

            <div class="col-md-12 text-center mt-4 pt-4 text-white">
                <div class="row">
                    <a class="col-md-3 pb-1 mt-3 text-white" style="cursor:pointer" href="#games" >
                        <img :src="placeholder" alt="" class="img-responsive" @click="filterGamesAction()">
                        <h6>See All Game Results</h6>
                    </a>

                    <a class="col-md-3 pb-1 mt-3 text-white" v-for="(team,index) in teams" :key="index" style="cursor:pointer" href="#games" @click="filterGamesAction(team.name)">
                        <img :src="isImageAvailable(team.name) ? placeholder : team.img" alt="" class="img-responsive">
                        <h6>{{ team.name }}</h6>
                    </a>
                </div>
            </div>

            <div class="container py-lg-5 py-md-5 py-sm-4 py-3">
                <h3 class="title mb-lg-5 mb-4 pb-4 text-center" id="games">Games</h3>
                <div class="row agileits-banner-grids text-center">
                    <div class=" col-md-4 priceing-tag mb-4" v-for="(game,key) in games" :key="key">
                        <div class="table_cost clr-two">
                            <div class="price-title mb-2">
                                <h4>Final</h4>
                            </div>
                            <span class="cost">
                                <div class="row">
                                    <div class="col-md-5">
                                        <img :src="isImageAvailable(game.event_home_team) ? placeholder : game.event_home_team_logo" alt="" class="img-responsive">
                                    </div>
                                    
                                    <div class="col-md-2">
                                        <h3 class="pt-4">VS</h3>
                                    </div>
                                    <div class="col-md-5">
                                        <img :src="isImageAvailable(game.event_away_team) ? placeholder : game.event_away_team_logo" alt="" class="img-responsive">
                                    </div>
                                </div>
                            </span>
                            <p class="date mt-2">{{ game.event_date | moment('MMM D, dddd') }}</p>
                        </div>
                    <div class="price-tags-grid">
                        <div class="list-price">
                            <ul>
                                <li class="bb">
                                    <div class="row">
                                        <div class="col-md-6 col-xs-6 col-sm-6">
                                            <strong>{{ game.event_home_team }}</strong>
                                        </div>
                                        <div class="col-md-6 col-xs-6 col-sm-6">
                                            <strong>{{ game.event_away_team }}</strong>
                                        </div>
                                    </div>
                                </li>

                                <li v-for="(score,key) in game.scores" :key="key" class="bb">
                                    <div class="row">
                                        <div class="col-md-6 col-xs-6 col-sm-6" v-if="score[0]">
                                            {{ score[0].score_home }}
                                        </div>
                                        <div class="col-md-6 col-xs-6 col-sm-6" v-if="score[0]">
                                            {{ score[0].score_away }}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="row">
                                        <div class="col-md-6 col-xs-6 col-sm-6">
                                            <span :class="{'text-danger' : winner(game.scores) == 'home'}">
                                                {{ totalScore(game.scores).home }}
                                            </span>
                                        </div>
                                        <div class="col-md-6 col-xs-6 col-sm-6">
                                            <span :class="{'text-danger' : winner(game.scores) == 'away'}">
                                                {{ totalScore(game.scores).away }}
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="buy-buttn">
                            <a class="w3_play_icon1 scroll" href="#join-form">
                                {{ winner(game.scores) == 'home' ? game.event_home_team : game.event_away_team}} Won!
                            </a>
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
import moment from 'moment'
import Slider from '@/components/Slider'

    export default {
         components: {
            Slider
        },
        data() {
            return {
                games: null,
                filteredGames : null,
                placeholder : 'https://via.placeholder.com/100x100',
                teams : null,
                selectedTeam : null
            }
        },
        methods: {
            isImageAvailable(teamName) {
                return teamName == 'Monaco' || teamName == 'Levallois' || teamName == 'Chalon/Saone'
            },
            totalScore(scores)
            {
                let home = 0;
                let away = 0;
                for(var property in scores)
                {
                    for(var s in scores[property])
                    {
                        home += parseInt(scores[property][s]['score_home']);
                        away += parseInt(scores[property][s]['score_away']); 
                    }
                }

                return {
                    'home' : home,
                    'away' : away
                };
            },
            winner(scores)
            {
                let result = this.totalScore(scores);

                return result.away > result.home ? 'away' : 'home';
            },
            quarterWinner(home,away)
            {
                console.log(home + ':' + away + '=' + home > away);
                return home > away ? 'home' : 'away'
            },
            getTeams()
            {
                let teams = this.games.map((game) => {
                    return {
                        name : game.event_away_team,
                        img : game.event_away_team_logo
                    };
                });

                let uniqueTeams = Array.from(new Set( teams.map( x => {
                        return x.name
                        })
                    )
                ).map( name => {
                    return {
                        name : name,
                        img : teams.find( z => z.name === name).img
                    }
                })
                
                this.teams = uniqueTeams;
            },
            filterGamesAction(team = '')
            {
                 if(team === '')
                 {
                     this.games = this.filteredGames;
                 }
                 else
                 {
                     this.games = this.filteredGames.filter( game => {
                         return game.event_away_team == team || game.event_home_team == team
                     })
                 }

            }
            
        },
        mounted () {
            this.$axios.$get(`?met=Fixtures&APIkey=${process.env.AsAPIkey}&from=2019-01-01&to=2019-06-29`)
                .then(data => {
                    console.log(data.result);
                    this.filteredGames = this.games = data.result;

                    this.getTeams();
                })

                this.activate();
                
        },
    }
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}

.clr { color : #fff }

  h3.title
  {
    font-family: 'Arimo', sans-serif;
    font-size: 50px;
    color: #fff;
    letter-spacing: 3px;
    font-weight: 600;
    text-transform: uppercase;
    border-bottom : none;
  }

  .date
  {
      font-family: 'Arimo', sans-serif
  }

  .bb
  {
      border-bottom: 1px solid #ddd;
      
  }

  body a:hover{
      cursor : default;
      opacity : 1;
  }
</style>