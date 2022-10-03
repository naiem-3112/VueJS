function getRandomValue(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}

const app = Vue.createApp({
    data(){
        return {
            monsterHealth: 100,
            playerHealth: 100,
            round: 0,
            winner: null,
            logMessages: []
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
    computed:{
        monsterHealthBarStyle(){
            if(this.monsterHealth < 0){
                return {width: 0 + '%'}
            }
            return {width: this.monsterHealth + '%'};
        },
        playerHealthBarStyle(){
            if(this.playerHealth < 0){
                return {width: 0 + '%'}
            }
            return {width:this.playerHealth + '%'};
        },
        mayUseSpecialAttack(){
            return this.round % 3 !== 0;
        }
    },
    methods:{
        startAgain(){
            this.monsterHealth = 100,
            this.playerHealth = 100,
            this.round = 0,
            this.winner = null,
            this.logMessages = []
        },
        monsterAttack(){
            this.round++;
            this.monsterHealth -= getRandomValue(8, 12);
            this.logMessage('player', 'attack', this.monsterHealth);
            this.playerAttack();
        },
        playerAttack(){
            this.playerHealth -= getRandomValue(10, 15);
            this.logMessage('monster', 'attack', this.playerHealth);

        },
        specialAttack(){
            this.round++;
            this.monsterHealth -= getRandomValue(10, 14);
            this.logMessage('player', 'special attack', this.monsterHealth);
            this.playerAttack();
        },
        healPlayer(){
            this.round++;
            if(this.playerHealth + getRandomValue(10, 15) > 100){
                this.playerHealth = 100;
            }else{
                this.playerHealth += getRandomValue(10, 15);
            }
            this.logMessage('player', 'heal', this.playerHealth);
            this.playerAttack();
        },
        surrender(){
            this.winner = 'surrender';
            this.logMessage('player', 'surrender', this.playerHealth);
        },
        logMessage(who, action, value){
            this.logMessages.unshift({
                actionBy: who,
                actionType: action,
                actionValue: value
            });
        }

    }
});

app.mount('#game');