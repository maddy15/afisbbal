<template>
    <div>
         <div class="header-w3layouts">
            
			<div class="headr-title">
                        <div class="hedder-up"></div>
			   <div class="clearfix"></div>
			   </div>
            <nav class="navbar navbar-expand-lg navbar-light">
               <button class="navbar-toggler" @click="asd" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse nav-fill" :class="{ 'show' : showResponsive }" id="navbarSupportedContent">
                  <ul class="navbar-nav nav-pills nav-fill">
                      
                      <li class="nav-item">
                         <nuxt-link class="nav-link" to="/">
                            <img :src="require(`~/assets/logo/logo.png`)" width="100px" alt="" class="img-responsive">
                        </nuxt-link>
                     </li>

                     <li class="nav-item pt-2">
                        <nuxt-link to="/standings" class="nav-link">
                            <span>Standings</span> 
                        </nuxt-link>
                     </li>
                     
                     <li class="nav-item pt-2">
                        <nuxt-link to="/games" class="nav-link">
                           <span>Games</span> 
                        </nuxt-link>
                     </li>

                     <li class="nav-item dropdown pt-2" :class="{ 'show' : show }">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  @click.prevent="show = !show">
                            <span>Teams</span> 
                        </a>
                        <div class="dropdown-menu" :class="{ 'show' : show }" aria-labelledby="navbarDropdown">
                           <nuxt-link :to="{ name:'teams-id',params:{ id: team.team_id },hash:'#team'}" class="dropdown-item" href="#" v-for="(team,key) in teams" :key="key">
                            {{ team.team_name }}
                            </nuxt-link>
                        </div>
                     </li>
                  </ul>
               </div>
			   
            </nav>
		
</div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            show: false,
            standings : null,
            teams : null,
            showResponsive : false
        }
    },
    methods: {
        getTeams() {
            this.teams =  this.standings.map( standing => {
                return {
                    team_id : standing.team_key,
                    team_name : standing.standing_team
                }
            }).sort();
        },
        asd()
        {
            this.showResponsive = !this.showResponsive;
        }
    },
    mounted () {
        this.$axios.$get(`?met=Standings&APIkey=${process.env.AsAPIkey}&leagueId=669`)
            .then(data => {
                this.standings = data.result.total
                this.getTeams();
            });
    },
}
</script>