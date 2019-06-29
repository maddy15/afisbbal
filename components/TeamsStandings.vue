<template>
    <div class="basketball-bg-gradient py-4">
        <div class="container">
            <h3 class="title mb-lg-5 mb-4 pb-4 text-center text-white">Standings</h3>
            <div class="table100 ver3 m-b-110">
                <div class="table100-head">
                <table>
                    <thead>
                        <tr class="row100 head">
                            <th class="cell100 column1" @click.prevent="sort" style="cursor:pointer">Rank</th>
                            <th class="cell100 column2">Name</th>
                            <th class="cell100 column3">Wins</th>
                            <th class="cell100 column4">Losses</th>
                            <th class="cell100 column5">PCT (%)</th>
                        </tr>
                    </thead>
                </table>
                </div>

                <div class="table100-body js-pscroll ps ps--active-y">
                    <table>
                        <tbody>
                            <tr class="row100 body" v-for="(standing,key) in standings" :key="key">
                                <td class="cell100 column1"><strong>{{ standing.standing_place }}</strong></td>
                                <td class="cell100 column2">{{ standing.standing_team }}</td>
                                <td class="cell100 column3">{{ standing.standing_W }}</td>
                                <td class="cell100 column4">{{ standing.standing_L }}</td>
                                <td class="cell100 column5">{{ standing.standing_PCT }}</td>
                            </tr>

                        </tbody>
                    </table>

                    <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
                        <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                    </div>

                    <div class="ps__rail-y" style="top: 0px; height: 585px; right: 5px;">
                        <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 294px;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                standings: null
            }
        },
        methods: {
            sort() {
                this.standings.reverse();
            }
        },
        mounted () {
        this.$axios.$get(`?met=Standings&APIkey=${process.env.AsAPIkey}&leagueId=669`)
            .then(data => {
                console.log(data);
                this.standings = data.result.total
            });
    },
    }
</script>

<style lang="scss" scoped>

</style>