export const HitCalculation = ({
    attack,
    defense,
}) => {
    return (attack + 1 > defense ? 1 - 0.5 * (defense/attack) : 0.5 * attack/defense) > Math.random();
}

export const DamageCalculation = (strength) => {
    const damage = Math.round(strength * Math.random())
    return damage > 0 ? damage : 1;
}

export const MonsterStats = (level) => {
    const array = fillWithRandom(99, level)
    return {monsterAttack: array[0],
            monsterStrength: array[1],
            monsterDefense: array[2],
            monsterHealth: array[3] + 5}
}

const fillWithRandom = (max, total, len = 4) => {
    let arr = new Array(len);
    let sum = 0;
    do {
        for (let i = 0; i < len; i++) {
            arr[i] = Math.random();
        }
        sum = arr.reduce((acc, val) => acc + val, 0);
        const scale = (total - len) / sum;
        arr = arr.map(val => Math.min(max, Math.round(val * scale) + 1));
        sum = arr.reduce((acc, val) => acc + val, 0);
    } while (sum - total)
    return arr;
};

export const CombatLog = (
        bigMonster,
        level,
        attack,
        strength,
        defense,
        health,
        setCurrentHealth,
        maxHealth,
        setIsModalOpen
    ) => {
    let monster = bigMonster ? MonsterStats(Math.floor(level * 1.5)) : MonsterStats(level);

    const doCombat = (attack, strength, defense, health) => {
        let monsterDead = false;
        let monsterHealth = monster.monsterHealth;
        let playerDead = false;
        let playerHealth = health;
        let round = 1;
        let combatLog = [`You were engaged by the monster! Seems this one has ${monster.monsterHealth} health.. Scary!`]
        while (!monsterDead && !playerDead) {
            let playerDamage = doPlayerTurn(attack, monster)
            if (playerDamage === 0) {
                combatLog.push(`Round ${round}: You swung at the monster and missed`)
            } else {
                combatLog.push(`Round ${round}: You hit the monster! You did ${playerDamage} damage!`)
                monsterHealth = monsterHealth - playerDamage;
                if (monsterHealth <= 0) {
                    monsterDead = true;
                    combatLog.push('You killed the monster and gained a level!')
                    combatLog.push('');
                    break;
                }
            }
            let monsterDamage = doMonsterTurn(defense, monster);
            if (monsterDamage === 0) {
                combatLog.push(`Round ${round}: You managed to dodge the monsters attack!`)
            } else {
                combatLog.push(`Round ${round}: The monster hit you! You took ${monsterDamage} damage!`)
                playerHealth = playerHealth - monsterDamage;
                if (playerHealth <= 0) {
                    playerDead = true;
                    combatLog.push('The monster killed you! Drink a potion to resurrect');
                    combatLog.push('');
                }
            }
            round = round + 1
        }

        return {
            combatLog,
            playerHealth,
            playerDead
        }
    }

    const doMonsterTurn = (defense, monster) => {
        const doesHit = (defense + 1 > monster.monsterAttack ? 1 - 0.5 * (monster.monsterAttack/defense) : 0.5 * defense/monster.monsterAttack) > Math.random();
        if (doesHit) {
            return  DamageCalculation(monster.monsterStrength);
        }
        return 0
    }

    const doPlayerTurn = (attack, monster) => {
        const doesHit = (attack + 1 > monster.monsterDefense ? 1 - 0.5 * (monster.monsterDefense/attack) : 0.5 * attack/monster.monsterDefense) > Math.random();
        if (doesHit) {
            return DamageCalculation(strength);
        }
        return 0
    }

    return doCombat(attack, strength, defense, health, setCurrentHealth, maxHealth);
}