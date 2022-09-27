function getRandomValue(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
    data(){
        return {
            monsterHealth: 100,
            playerHealth: 100,
            round: 0,
            winner: null,
        }
    },

    computed:{
        monsterBarStyle(){
            if(this.monsterHealth < 0){
                return { width: 0 };
            }
            return { width: this.monsterHealth + '%' };
        },
        playerBarStyle(){
            if(this.playerHealth < 0){
                return { width: 0 };
            }
            return { width: this.playerHealth + '%' };
        },
        mayUseSpecialAttack(){
            return this.round % 3 !== 0;
        }
    },

    watch:{
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){
                this.winner = 'draw';
            }else if(value <= 0){
                this.winner = 'player'
            }
        },
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){
                this.winner = 'draw';
            }else if(value <= 0){
                this.winner = 'monster'
            }
        }
    },

    methods:{
        startNewGame(){
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.round = 0;
            this.winner = null;
        },
        attackMonster(){
            this.round++;
            this.monsterHealth -= getRandomValue(6, 9);
            this.attackPlayer();
        },
        attackPlayer(){
            this.playerHealth -= getRandomValue(8, 11);
        },
        speacialAttackMonster(){
            this.round++;
            this.monsterHealth -= getRandomValue(12, 15);
            this.attackPlayer(); 
        },
        healPlayer(){
            this.round++;
            amountOfHealing = getRandomValue(10, 13);
            if(this.playerHealth+amountOfHealing <= 100){
                this.playerHealth += amountOfHealing;
            }else{
                this.playerHealth = 100;
            }
            this.attackPlayer();
        },
        surrender(){
            this.winner = 'monster';
        }
    }
});

app.mount('#game');